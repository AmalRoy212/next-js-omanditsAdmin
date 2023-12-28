"use client"
import React from 'react';
import styles from './preview.module.css';
import { activatePopUp } from '@/app/store/popUpSlice';
import { useSelector, useDispatch } from 'react-redux'
import ExcelDownload from '../download/Downloader';

function PreviewButton({delegates}) {
    const dispatch = useDispatch();
    const popUp = useSelector((state) => state.popUp.value);
  return (
    <>
        <button className={styles.addButton}
            aria-label="Decrement value"
            onClick={() => dispatch(activatePopUp())}
        >Download</button>
        {popUp && <ExcelDownload delegates={delegates}/>}
        
    </>
  )
}

export default PreviewButton