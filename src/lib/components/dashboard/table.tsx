/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable sonarjs/no-duplicate-string */

import { useEffect, useState } from 'react';

import TableBodyComponent from '@/lib/components/dashboard/table-body';
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/components/ui/table';
import type { ProductTable, ShownTable, UserTable } from '@/utils/types';
import { useTableStore } from '@/utils/zustandStore';

const DashboardTable = () => {
  const fetchState = useTableStore((state) => state.actionState);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productTable, setProductTable] = useState<ProductTable[]>([]);
  const [userTable, setUserTable] = useState<UserTable[]>([]);
  const [tableData, setTableData] = useState<ShownTable[]>([]);

  const fetchData = async (endpoint: string) => {
    try {
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return await response.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    }
  };

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const products = await fetchData('/api/product');
        const users = await fetchData('/api/user');

        console.log(users);

        setProductTable(products);
        setUserTable(users);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndUpdateState();
  }, [fetchState]);

  useEffect(() => {
    if (productTable.length > 0) {
      let data = [];
      console.log(userTable[0]);
      console.log(productTable[0]);
      if (userTable.length > 0) {
        data = productTable.map((product) => {
          const userProduct = userTable.find(
            (userProd) => userProd.product_id === product.id
          );

          if (userProduct) {
            const { product_id, ...rest } = userProduct;
            return { id: product_id, ...rest, owned: true };
          }
          return { ...product, owned: false };
        });
      } else {
        data = productTable.map((product) => ({ ...product, owned: false }));
      }
      setTableData(data);
    }
  }, [productTable, userTable]);

  if (loading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return <div> An error occurred: {error} </div>;
  }

  return (
    <Table>
      <TableCaption> Dashboard Table </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead> ID </TableHead>
          <TableHead> Package Name </TableHead>
          <TableHead> Price </TableHead>
          <TableHead> Date </TableHead>
          <TableHead> Action </TableHead>
        </TableRow>
      </TableHeader>
      <TableBodyComponent tableData={tableData} />
    </Table>
  );
};

export default DashboardTable;
