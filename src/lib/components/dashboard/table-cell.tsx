import React from 'react';

import { TableCell } from '../ui/table';
import type { ShownTable } from '@/utils/types';

interface TableCellProps {
  data: ShownTable;
}

const TableCellComponent: React.FC<TableCellProps> = ({ data }) => {
  return (
    <>
      <TableCell> {data.id} </TableCell>
      <TableCell> {data.package_name} </TableCell>
      <TableCell> {data.package_price} </TableCell>
      <TableCell> {data.package_date} </TableCell>
    </>
  );
};

export default React.memo(TableCellComponent);
