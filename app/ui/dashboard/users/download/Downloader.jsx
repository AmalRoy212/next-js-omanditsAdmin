"use client"
import React from 'react';
import * as XLSX from 'xlsx';
import styles from "./download.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { deactivatePopUp } from '@/app/store/popUpSlice'

const ExcelDownload = ({ delegates }) => {

  const dispatch = useDispatch()

  const generateExcel = () => {
    const data = [
      ["NOS",'Name', 'Email', 'Job Title', "company name", 'phone', "Industry", "NO Employees", "Looking For", "Role", 'Country', 'Type', 'Budget', 'Timing', 'Date'],
    ];

    delegates.map((del,index) => {
      data.push(Object.values(del));
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

  return (
    <div className={styles.container}>
      <div className={styles.holder}>
        <div className={styles.tableHolder}>
          <table className={styles.table}>
            <thead>
              <tr>
                <td>Name</td>
                <td>email</td>
              </tr>
            </thead>
            <tbody>
              {delegates && delegates.map((dele, index) => (
                <tr key={index}>
                  <td>{dele.name}</td>
                  <td>{dele.email}</td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
        <div className={styles.btnHolder}>
          <button className={styles.cancel}  onClick={() => dispatch(deactivatePopUp())}>Cancel</button>
          <button className={styles.downButton} onClick={generateExcel}>Download Excel</button>
        </div>
      </div>
    </div>
  );
};

export default ExcelDownload;