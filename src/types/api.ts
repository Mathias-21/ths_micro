export interface IOrder {
  id: number;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  orderProductAdditionals: [IOrderProductAdditionals];
}

export interface IOrderProductAdditionals {
  id: number;
  order_id: number;
  product_additional_id: number;
  productAdditional: IProductAdditional;
  created_at: string;
  updated_at: string;
}

export interface IProductAdditional {
  id: number;
  product_id: number;
  additional_id: number;
  created_at: string;
  updated_at: string;
  product: IProduct;
  additional: IAdditional;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  created_at: string;
  updated_at: string;
}

export interface IAdditional {
  id: number;
  name: string;
  price: number;
  created_at: string;
  updated_at: string;
}
