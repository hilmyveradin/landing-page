/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable consistent-return */
/* eslint-disable no-console */

'use client';

import { DialogClose } from '@radix-ui/react-dialog';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

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
  // const [editedData, setEditedData] = useState<UserTable>();
  const changeState = useTableStore((state) => state.setTableState);
  const userID = useUserStore((state) => state.userID);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    watch,
  } = useForm<UserTable>();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { product_id } = watch();

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
  const submitEditHelper = async (formData: UserTable) => {
    try {
      console.log('form data: ', formData);
      const response = await fetch('api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: formData.product_id,
          user_id: userID,
          package_name: formData.package_name,
          package_date: formData.package_date,
          package_price: formData.package_price,
        } as UserTable),
      });
      return await response.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const submitEditedUserProduct = handleSubmit(async (formData: UserTable) => {
    try {
      console.log('SUBMITTED');
      await submitEditHelper(formData);
      changeState();
    } catch (err) {
      console.log(err);
    }
  });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;

  //   setEditedData((prevData) => {
  //     if (!prevData) {
  //       console.error('Previous data is not available.');
  //       return;
  //     }

  //     if (id in prevData) {
  //       return {
  //         ...prevData,
  //         [id]: value,
  //       };
  //     }
  //     console.error(`Unknown input id: ${id}`);
  //     return prevData;
  //   });
  // };

  return data.owned ? (
    <TableCell>
      <div className="flex space-x-1">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              onClick={() => {
                setValue('product_id', data.id);
                setValue('package_name', data.package_name);
                setValue('package_price', data.package_price);
                setValue('package_date', data.package_date);
              }}
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
                  <Input value={product_id || ''} disabled />
                </div>
                {['package_name', 'package_price', 'package_date'].map(
                  (field) => (
                    <div
                      key={field}
                      className="grid items-center grid-cols-4 gap-4"
                    >
                      <Label className="text-right">
                        {field.replace('_', ' ').toUpperCase()}
                      </Label>
                      <Controller
                        name={field as keyof UserTable}
                        control={control}
                        defaultValue={String(data[field as keyof ShownTable])}
                        // eslint-disable-next-line @typescript-eslint/no-shadow
                        render={({ field }) => (
                          <Input
                            id={field.name}
                            value={field.value as string | number}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="col-span-3"
                          />
                        )}
                      />
                    </div>
                  )
                )}
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button onClick={deleteProductToUserTable}>
                    Delete Package
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
  ) : (
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
