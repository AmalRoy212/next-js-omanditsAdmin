"use client";
import React from 'react';
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function Pagination({count}) {

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter(); 

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 7;

  
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) =>{
    type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params}`);
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>previous</button>
      <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage("next")}>next</button>
    </div>
  )
}

export default Pagination
