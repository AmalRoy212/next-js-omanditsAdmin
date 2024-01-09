
"use client"

import React, { useState } from 'react';

function CheckInp({ removeFromList, _id }) {
  
  const [ checkedStatus, setCheckedStatus ] = useState(true);

  const handleRemove = () => {
    setCheckedStatus(false);
    removeFromList(_id);
  }
    
  return (
    <td><input type="checkbox" checked={checkedStatus} onClick={handleRemove} id="check" /></td>
  )
}

export default CheckInp