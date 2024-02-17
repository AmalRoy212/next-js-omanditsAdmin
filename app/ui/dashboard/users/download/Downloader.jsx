
"use client"

import React, { useEffect } from 'react';
import * as XLSX from 'xlsx';
import styles from "./download.module.css"
import { deactivatePopUp } from '@/app/store/popUpSlice'
import CheckInp from './CheckInp';
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFalse, setActiveTrue } from '@/app/store/selectSlice';



const ExcelDownload = ({ delegates }) => {

  const removedObjs = [];
 
  const select = useSelector((state) => state.select.value);

  const dispatch = useDispatch();

  const removeFromList = (_id = null) => {
    if (_id === null) return;
    delegates = delegates.filter((dele) => {
      if(dele._id == _id){
        removedObjs.push(dele);
        return false
      }
      return dele._id !== _id
    })
  };

  const addToCurrentList = (_id = null) => {
    if (_id === null) return;
    
    const selectedObject = removedObjs.filter((obj) => {
      return obj._id == _id
    });

    if (selectedObject) {
      delegates = [...delegates, selectedObject[0]];
    }
  };
  
  
  const generateExcel = () => {
    const data = [
      ["NOS",'First Name', 'Last Name', 'Email', 'Job Title', "company name", 'phone', "Industry", "NO Employees", "Looking For", "Role", 'Country', 'Type', 'Budget', 'Timing', 'Date'],
    ];

    delegates.map((del,index) => {

      let delegate =  Object.values(del);

      if(!del.lastName){
        delegate.splice(2, 0, " ");
        delegate = [...delegate];
      }

      data.push(delegate);
      data[index+ 1][0] = index + 1

      if(index !== 0){
        data[index].pop();
        data[index].pop();
      }
    });

    if (data.length > 0) {
      data[data.length - 1].pop();
      data[data.length - 1].pop();
    } 

    // Creating a new Excel workbook
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Generate a binary representation of the XLSX file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Convert the binary Excel data to a blob
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'delegates.xlsx'); // Set the file name
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Cleanup
    URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };

  const clickHandler = () => {
    select ? dispatch(setActiveFalse()) : dispatch(setActiveTrue())
  }
  return (
    <div className={styles.container}>
      <div className={styles.holder}>
        <div className={styles.tableHolder}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td style={{ display:'flex', justifyContent : "center", alignItems : "center"}}>
                  <input type='radio' checked={select} onChange='' onClick={clickHandler} className={styles.selectbutton}></input> <span>All</span>
                </td>
                <td>Name</td>
                <td>Email</td>
              </tr>
            </thead>
            <tbody>
              <div style={{marginTop:"2rem"}}></div>
              {delegates && delegates.map((dele, index) => (
                <tr key={index}>
                  <td>
                    <CheckInp key={index} addToCurrentList={addToCurrentList} removeFromList={removeFromList} _id={dele._id} />
                  </td>
                  <td>{dele.name || dele.refName}</td>
                  <td>{dele.email || dele.refEmail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.btnHolder}>
          <button className={styles.cancel} onClick={() => dispatch(deactivatePopUp())}>Cancel</button>
          <button className={styles.downButton} onClick={generateExcel}>Download Excel</button>
        </div>
      </div>
    </div>
  );
};


export default ExcelDownload;