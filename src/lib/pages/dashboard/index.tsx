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

const mockProductTable = [
  {
    id: 'ID001',
    packageName: 'Paket A',
    packagePrice: 1,
    packageDate: '2023-08-07T12:30:00Z',
  },
  {
    id: 'ID002',
    packageName: 'Paket B',
    packagePrice: 1,
    packageDate: '2023-08-08T12:30:00Z',
  },
  {
    id: 'ID003',
    packageName: 'Paket A',
    packagePrice: 1,
    packageDate: '2023-08-09T12:30:00Z',
  },
];

const mockUserTable = [
  {
    id: 'ID001',
    packageName: 'Paket A',
    packagePrice: 1,
    packageDate: '2023-08-10T12:30:00Z',
  },
];

const DashboardPage = () => {
  const resultArray = mockProductTable.map((product) => {
    // check if the product exists in the mockUserTable
    const userOwnsProduct = mockUserTable.some(
      (userProduct) => userProduct.id === product.id
    );

    // If user owns the product, set owned property to true, otherwise return product as it is.
    return userOwnsProduct
      ? { ...product, owned: true }
      : { ...product, owned: false };
  });
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
      <TableBody>
        {resultArray.map((data) => (
          <TableRow key={data.id}>
            <TableCell> {data.id} </TableCell>
            <TableCell> {data.packageName} </TableCell>
            <TableCell> {data.packagePrice} </TableCell>
            <TableCell> {data.packageDate} </TableCell>
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
                      <AlertDialogAction>Yes</AlertDialogAction>
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
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit</DialogTitle>
                        <DialogDescription>Edit Your Package</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label htmlFor="id" className="text-right">
                            ID
                          </Label>
                          <Input
                            id="id"
                            value={data.id}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label htmlFor="packageName" className="text-right">
                            Package Name
                          </Label>
                          <Input
                            id="packageName"
                            value={data.packageName}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label htmlFor="packagePrice" className="text-right">
                            Price
                          </Label>
                          <Input
                            id="packagePrice"
                            value={data.packagePrice}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid items-center grid-cols-4 gap-4">
                          <Label htmlFor="packageDate" className="text-right">
                            Date
                          </Label>
                          <Input
                            id="packageDate"
                            value={data.packageDate}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
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
                        <AlertDialogAction>Yes</AlertDialogAction>
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
  );
};

export default DashboardPage;
