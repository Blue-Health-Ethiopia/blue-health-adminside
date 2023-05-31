import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import Email from './../Component/Email';

function Table({ data, columns, onEdit }) {
  const tableData = useMemo(() => data, [data]);
  const tableColumns = useMemo(() => columns, [columns]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns: tableColumns,
      data: tableData,
    });

  return (
    <table
      {...getTableProps()}
      className="w-[64rem] m-5 text-center border border-gray-400"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
            <th>Actions</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="border border-gray-400 p-2"
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
              <td className="border border-gray-400 p-2">
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Send />}
                  onClick={handleOpen}
                >
                  Send Email
                </Button>
                <Email isOpen={isOpen} isClose={handleClose} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
