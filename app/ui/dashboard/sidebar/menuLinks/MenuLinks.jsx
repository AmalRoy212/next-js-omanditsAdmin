"use client"

import React from 'react';
import Link from "next/link";
import styles from './menulinks.module.css'
import { usePathname } from 'next/navigation';

function MenuLinks({item}) {

  const pathname = usePathname()

  return (
    <>
     <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
        {item.icon}
        <span className={styles.itemName}> {item.title}</span>
     </Link>
    </>
  )
}

export default MenuLinks