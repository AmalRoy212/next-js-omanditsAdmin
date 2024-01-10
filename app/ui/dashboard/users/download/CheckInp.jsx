
"use client"

import React, { useState } from 'react';

function CheckInp({ removeFromList, _id, addToCurrentList }) {
  
  const [ checkedStatus, setCheckedStatus ] = useState(true);

  const handleRemove = () => {
    checkedStatus ? setCheckedStatus(false) : setCheckedStatus(true);
    checkedStatus ? removeFromList(_id) : addToCurrentList(_id);
  }
    
  return (
    <input type="checkbox" checked={checkedStatus} onChange={handleRemove} id="check" />
  )
}

export default CheckInp