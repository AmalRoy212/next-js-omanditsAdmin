
"use client"

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function CheckInp({ removeFromList, _id, addToCurrentList }) {
  
  const select = useSelector((state) => state.select.value);
  
  const [ checkedStatus, setCheckedStatus ] = useState(true);
  const [ currentState, setCurrentState ] = useState(select)

  useEffect(() => {
    if( select || !select ) setCurrentState(select);
    else if ( checkedStatus || !checkedStatus ) setCurrentState(checkedStatus)
    console.log(currentState);
  },[select, checkedStatus])

  const handleRemove = () => {
    console.log("am here");
    checkedStatus ? setCheckedStatus(false) : setCheckedStatus(true);
    checkedStatus ? removeFromList(_id) : addToCurrentList(_id);
  }
  const handleData = () => {
    checkedStatus ? setCheckedStatus(false) : setCheckedStatus(true);
    checkedStatus ? removeFromList(_id) : addToCurrentList(_id);
  }
    
  return (
    <>
     <input type="radio" checked={currentState} onClick={() => handleRemove()} id="check" />
    </>
  )
}

export default CheckInp