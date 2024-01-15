
"use client"

import { setActiveFalse } from '@/app/store/selectSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CheckInp({ removeFromList, _id, addToCurrentList }) {
  
  let select = useSelector((state) => state.select.value);
  const dispatch = useDispatch()
  
  const [ checkedStatus, setCheckedStatus ] = useState(false);

  function handleRemove() {
    dispatch(setActiveFalse());
    checkedStatus ? setCheckedStatus(false) : setCheckedStatus(true);
    checkedStatus ? removeFromList(_id) : addToCurrentList(_id);
  }
    
  return (
    <>
     <input type="radio" checked={select || checkedStatus} onChange={() => {}} onClick={() => handleRemove()} id="check" />
    </>
  )
}

export default CheckInp