/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable consistent-return */
/* eslint-disable no-console */

'use client';

import { DialogClose } from '@radix-ui/react-dialog';
import React, { useState } from 'react';

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
import { TableCell } from '@/lib/components/ui/table';
import type { ShownTable, UserTable } from '@/utils/types';
import { useTableStore, useUserStore } from '@/utils/zustandStore';

interface ActionCellProps {
  data: ShownTable;
}

const ActionCell: React.FC<ActionCellProps> = ({ data }: ActionCellProps) => {
  // handle ini jadi zustand?
  const [editedData, setEditedData] = useState<UserTable>();
  const changeState = useTableStore((state) => state.setTableState);
  const userID = useUserStore((state) => state.userID);

  // MARK: ADD LOGIC
  const addProductToUserTable = async () => {
    try {
      const response = await fetch('api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: data.id,
          user_id: userID,
          package_name: data.package_name,
          package_date: data.package_date,
          package_price: data.package_price,
        } as UserTable),
      });
      // setDataChanged((prev) => !prev);
      changeState();
      return await response.json();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    }
  };

  // MARK: DELETE LOGIC
  const deleteProductToUserTable = async () => {
    try {
      await fetch('api/user', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userID,
          product_id: data.id,
        } as UserTable),
      });
      // setDataChanged((prev) => !prev);
      changeState();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      throw err;
    }
  };

  // MARK: EDIT LOGIC
  const submitEditHelper = async () => {
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
      return await response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const submitEditedUserProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitEditHelper();
      changeState();
    } catch (err) {
      console.log(err);
    }
  };

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

  if (data.owned) {
    return (
      <TableCell>
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
                <DialogTitle>Edit/Delete</DialogTitle>
                <DialogDescription>Edit Your Package</DialogDescription>
              </DialogHeader>
              <form onSubmit={submitEditedUserProduct}>
                <div className="grid gap-4 py-4">
                  <div className="grid items-center grid-cols-4 gap-4">
                    <Label className="text-right">ID</Label>
                    <Input value={editedData?.product_id || ''} disabled />
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
                    <Button onClick={deleteProductToUserTable}>
                      {' '}
                      Delete Package{' '}
                    </Button>
                  </DialogClose>
                  <DialogClose>
                    <Button type="submit">Save changes</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </TableCell>
    );
  }
  return (
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
            <AlertDialogAction onClick={addProductToUserTable}>
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TableCell>
  );
};

export default React.memo(ActionCell);
