import React from 'react';
import { fetchAllNominees, fetchNominies } from '@/app/lib/data';
import Search from '@/app/ui/dashboard/search/Search';
import Table from '@/app/ui/dashboard/table/Table'
import PreviewButton from '@/app/ui/dashboard/users/preview/PreviewButton';
import styles from '@/app/ui/dashboard/table/table.module.css'
import Link from 'next/link';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';

async function page({searchParams}) {

  const headings = ["Name", "Email", "Phone", "Company Name", "Job Title", "Referred By", "Referred Email"];
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, nominees } = await fetchNominies(q, page);
  const allNominees = await fetchAllNominees();
  
  const plainNomines = JSON.parse(JSON.stringify(nominees));
  const plainAllNominees = JSON.parse(JSON.stringify(allNominees));

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for delegates.."/>
        <PreviewButton delegates={plainNomines} plainAllDele={plainAllNominees} q={q} />
        {/* <Link href="/dashboard/delegates/add">
          <button className={styles.addButton}>Add New</button>
        </Link> */}
      </div>
      <Table headings={headings} data={nominees} />
      <Pagination count={count} />
    </div>
  )
}

export default page