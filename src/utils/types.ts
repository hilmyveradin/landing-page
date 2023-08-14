export type ProductTable = {
  id: string;
  package_name: string;
  package_price: number;
  package_date: string;
};

export type UserTable = {
  user_id: string;
  product_id: string;
  package_name: string;
  package_price: number;
  package_date: string;
};

export type ShownTable = {
  owned: boolean;
  id: string;
  package_name: string;
  package_price: number;
  package_date: string;
};
