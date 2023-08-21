import { TableBody, TableRow } from '../ui/table';
import type { ShownTable } from '@/utils/types';

import ActionCell from './action-cell';
import TableCellComponent from './table-cell';

interface TableBodyProps {
  tableData: ShownTable[];
}

const TableBodyComponent: React.FC<TableBodyProps> = ({
  tableData,
}: TableBodyProps) => {
  return (
    <TableBody>
      {tableData.map((data) => (
        <TableRow key={data.id}>
          <TableCellComponent data={data} />
          <ActionCell data={data} />
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyComponent;
