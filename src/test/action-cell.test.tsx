// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import fetchMock from 'jest-fetch-mock';

// import ActionCell from '@/lib/components/dashboard/action-cell';
// import { useTableStore, useUserStore } from '@/utils/zustandStore';

// type DataType = {
//   id: string;
//   package_name: string;
//   package_date: string;
//   package_price: number;
//   owned: boolean;
// };

// // Mocking Zustand store
// jest.mock('@/utils/zustandStore', () => ({
//   useTableStore: jest.fn(),
//   useUserStore: jest.fn(),
// }));

// describe('<ActionCell />', () => {
//   const data: DataType = {
//     id: '123',
//     package_name: 'Package Name',
//     package_date: '2021-01-01',
//     package_price: 100,
//     owned: true,
//   };

//   beforeEach(() => {
//     // Clear all instances and calls to constructor and all methods
//     fetchMock.resetMocks();

//     // Zustand store mocks
//     (useTableStore as jest.Mock).mockImplementation(() => ({
//       setTableState: jest.fn(),
//     }));
//     (useUserStore as unknown as jest.Mock).mockImplementation(() => ({
//       userID: '1',
//     }));
//   });

//   it('renders edit button for owned data', () => {
//     render(<ActionCell data={data} />);

//     // Check if edit button is rendered
//     expect(screen.getByText('Edit')).toBeInTheDocument();
//   });

//   // You may write more tests for add, delete, edit logic, etc.
//   // For fetch calls, you can use fetchMock.mockResponseOnce() to mock responses.
// });
