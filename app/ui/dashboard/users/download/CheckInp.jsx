
"use client"

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CheckInp({ removeFromList, _id, addToCurrentList }) {
  
  const select = useSelector((state) => state.select.value);
  
  const [ checkedStatus, setCheckedStatus ] = useState(true);

  const handleRemove = () => {
    console.log('called')
    checkedStatus ? setCheckedStatus(false) : setCheckedStatus(true);
    checkedStatus ? removeFromList(_id) : addToCurrentList(_id);
  }
    
  return (
    <>
    {select ? 
      (
        <input type="checkbox" checked={select} onChange={handleRemove} id="check" />
      ) : 
      (
        <input type="checkbox" checked={checkedStatus} onChange={handleRemove} id="check" />
      )
    }
      
    </>
  )
}

export default CheckInp