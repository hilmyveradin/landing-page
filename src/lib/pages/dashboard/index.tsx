/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable sonarjs/no-duplicate-string */

'use client';

import { DialogClose } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/lib/components/ui/alert-dialog';
import { Button } from '@/lib/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/lib/components/ui/dialog';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/components/ui/table';
import type { ProductTable, ShownTable, UserTable } from '@/utils/types';

const MOCKUSERID = 'USER001';

const DashboardPage = () => {
  const [productTable, setProductTable] = useState<ProductTable[]>([]);
  const [userTable, setUserTable] = useState<UserTable[]>([]);
  const [tableData, setTableData] = useState<ShownTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editedData, setEditedData] = useState<UserTable>();
  const [dataChanged, setDataChanged] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setEditedData((prevData) => {
      if (!prevData) {
        console.error('Previous data is not available.');
        return;
      }

      if (id in prevData) {
        return {
          ...prevData,
          [id]: value,
        };
      }
      console.error(`Unknown input id: ${id}`);
      return prevData;
    });
  };

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

  const addItemsToUser = async (userID: string, index: number) => {
    try {
      const response = await fetch('api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productTable[index].id,
          user_id: userID,
          package_name: productTable[index].package_name,
          package_date: productTable[index].package_date,
          package_price: productTable[index].package_price,
        } as UserTable),
      });
      setDataChanged((prev) => !prev);
      return await response.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    }
  };

  const deleteUserTable = async (index: number) => {
    try {
      await fetch('api/user', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: MOCKUSERID,
          product_id: productTable[index].id,
        } as UserTable),
      });
      setDataChanged((prev) => !prev);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    }
  };

  const editPackage = async (userID: string) => {
    if (!editedData) {
      console.error('No edited data available');
      return;
    }

    try {
      const response = await fetch('api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: editedData.product_id,
          user_id: userID,
          package_name: editedData.package_name,
          package_date: editedData.package_date,
          package_price: editedData.package_price,
        } as UserTable),
      });
      setDataChanged((prev) => !prev);
      return await response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await editPackage(MOCKUSERID);
    } catch (err) {
      console.log(err);
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
  }, [dataChanged]);

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
    <div className="flex flex-col items-center w-full mt-10 space-y-4">
      <Label> Hello, User {MOCKUSERID} </Label>
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
        <TableBody>
          {tableData.map((data, index) => (
            <TableRow key={data.id}>
              <TableCell> {data.id} </TableCell>
              <TableCell> {data.package_name} </TableCell>
              <TableCell> {data.package_price} </TableCell>
              <TableCell> {data.package_date} </TableCell>
              {!data.owned ? (
                <TableCell>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline"> Add </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="sm:max-w-[425px]">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Add Package? </AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>No</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => addItemsToUser(MOCKUSERID, index)}
                        >
                          Yes
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              ) : (
                <TableCell>
                  {' '}
                  <div className="flex space-x-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() =>
                            setEditedData({
                              product_id: data.id,
                              package_name: data.package_name,
                              package_price: data.package_price,
                              package_date: data.package_date,
                            } as UserTable)
                          }
                        >
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit</DialogTitle>
                          <DialogDescription>
                            Edit Your Package
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleEditSubmit}>
                          <div className="grid gap-4 py-4">
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label className="text-right">ID</Label>
                              <Input
                                value={editedData?.product_id || ''}
                                disabled
                              />
                            </div>
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label className="text-right">Package Name</Label>
                              <Input
                                id="package_name"
                                value={editedData?.package_name || ''}
                                onChange={handleInputChange}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label className="text-right">Price</Label>
                              <Input
                                id="package_price"
                                value={editedData?.package_price || ''}
                                onChange={handleInputChange}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label className="text-right">Date</Label>
                              <Input
                                id="package_date"
                                value={editedData?.package_date || ''}
                                onChange={handleInputChange}
                                className="col-span-3"
                              />
                            </div>
                          </div>

                          <DialogFooter>
                            <DialogClose>
                              <Button type="submit">Save changes</Button>
                            </DialogClose>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline"> Delete </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="sm:max-w-[425px]">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Package? </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>No</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteUserTable(index)}
                          >
                            Yes
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>{' '}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DashboardPage;
