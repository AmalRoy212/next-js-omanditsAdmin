import { fetchNominies } from '@/app/lib/data';
import Table from '@/app/ui/dashboard/table/Table'
import React from 'react'

async function page() {
  const headings = ["Name", "Email", "Phone", "Company Name", "Job Title", "Referred By", "Referred Email"];
  const nominees = await fetchNominies();
  
  return (
    
    <div style={{minHeight:"90vh"}}>
        <Table headings={headings} data={nominees} />
    </div>
    
  )
}

export default page