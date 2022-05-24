import React, { useEffect, useState } from 'react';
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from 'carbon-components-react';

const headers = [
  {
    key: 'firstName',
    header: 'First Name',
  },
  {
    key: 'lastName',
    header: 'Last Name',
  },
  {
    key: 'email',
    header: 'Email',
  },
  {
    key: 'role',
    header: 'Role',
  },
];
// const rows = [
//     {
//         id: '1',
//         firstName: 'Vrushali',
//         lastName: 'Tambat',
//         email: 'vrushali@gmail.com',
//         role: 'Intern'
//     },
//     {
//         id: '2',
//         firstName: 'Vrushali',
//         lastName: 'Tambat',
//         email: 'vrushali@gmail.com',
//         role: 'Intern'
//     },
//     {
//         id: '3',
//         firstName: 'Vrushali',
//         lastName: 'Tambat',
//         email: 'vrushali@gmail.com',
//         role: 'Intern'
//     },
//     {
//         id: '4',
//         firstName: 'Vrushali',
//         lastName: 'Tambat',
//         email: 'vrushali@gmail.com',
//         role: 'Intern'
//     },
//     {
//         id: '5',
//         firstName: 'Vrushali',
//         lastName: 'Tambat',
//         email: 'vrushali@gmail.com',
//         role: 'Intern'
//     },
// ];
const BasicTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/tableData')
      .then(data => data.json())
      .then(json => {
        // console.log('JSON IS', json);
        setTableData(json);
      });
  }, []);

  return (
    <DataTable rows={tableData} headers={headers}>
      {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow {...getRowProps({ row })}>
                {row.cells.map(cell => (
                  <TableCell key={cell.id}>{cell.value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DataTable>
  );
};

export default BasicTable;
