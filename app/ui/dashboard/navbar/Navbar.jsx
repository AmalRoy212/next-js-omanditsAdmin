"use client"

import { usePathname } from 'next/navigation';
import styles from './navbar.module.css'
import React from 'react'

function Navbar() {

  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>  {pathname.split('/').pop()}</h3>
      </div>

    </div>
  )
}

export default Navbar