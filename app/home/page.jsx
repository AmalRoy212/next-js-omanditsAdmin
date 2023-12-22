import React from 'react'

function Home() {
  return (
    <div>Home</div>
  )
}

export default Home


// this is working for downloading xl sheet 

// "use client"
// import React from 'react';
// import * as XLSX from 'xlsx';

// const ExcelDownload = () => {
//   const generateExcel = () => {
//     // Sample data to be included in the Excel file
//     const data = [
//       ['Name', 'Age', 'Country'],
//       ['John Doe', 30, 'USA'],
//       ['Jane Smith', 28, 'Canada'],
//       ['Tom Brown', 35, 'UK'],
//     ];

//     // Creating a new Excel workbook
//     const workbook = XLSX.utils.book_new();
//     const worksheet = XLSX.utils.aoa_to_sheet(data);

//     // Add the worksheet to the workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

//     // Generate a binary representation of the XLSX file
//     const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

//     // Convert the binary Excel data to a blob
//     const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

//     // Create a download link
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'sample.xlsx'); // Set the file name
//     document.body.appendChild(link);

//     // Trigger the download
//     link.click();

//     // Cleanup
//     URL.revokeObjectURL(url);
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <button onClick={generateExcel}>Download Excel</button>
//     </div>
//   );
// };

// export default ExcelDownload;
