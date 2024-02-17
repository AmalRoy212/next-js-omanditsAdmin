
"use client"

import { setActiveFalse } from '@/app/store/selectSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CheckInp({ removeFromList, _id, addToCurrentList }) {
  
  const select = useSelector((state) => state.select.value);
  const dispatch = useDispatch();
  
  const [ checkedStatus, setCheckedStatus ] = useState(false);
  // const [ currentState, setCurrentState ] = useState(select)

  useEffect(() => {
    // if( select || !select ) setCurrentState(select);
    // else if ( checkedStatus || !checkedStatus ) setCurrentState(checkedStatus)
    // console.log(currentState);
  },[select])

  const handleRemove = () => {
    select ? dispatch(setActiveFalse()) : console.log();

    setCheckedStatus(prevStatus => !prevStatus); // Toggle the value of checkedStatus
    select ? removeFromList(_id) : addToCurrentList(_id);
  };

    
  return (
    <>
      <input type="radio" checked={checkedStatus || select} onClick={handleRemove} id="check" />
    </>
  )
}

export default CheckInp