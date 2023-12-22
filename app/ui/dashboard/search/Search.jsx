"use client"

import React from 'react';
import styles from "./serach.module.css";
import { MdSearch } from 'react-icons/md';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from "use-debounce";

function Search({placeholder}) {

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter(); 

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete('q')
    }

    replace(`${pathName}?${params}`);
  },300)

  return (
    <div className={styles.container}>
      <MdSearch/>
      <input onChange={handleSearch} type="text" placeholder={placeholder} className={styles.input} name="" id="" />
    </div>
  )
}

export default Search
