
"use client";

import React, { useState } from 'react';
import styles from '../users.module.css';



function DeleteButton({_id}) {

    const [ button, setButton ] = useState(false);
 
    function handleDelete(_id){
        !button ? setButton(true) : setButton(false)
    }
  
  return (
    <>
        {
            !button 
            ? 
            <button onClick={handleDelete} className={`${styles.button} ${styles.delete}`}>delete</button> 
            :
            <button onClick={handleDelete} className={`${styles.button} ${styles.deleted}`}>deleted</button>
        }
    </>
  )
}

export default DeleteButton