export interface IPost {
  _id: string;
  id_old: string;
  title: string;
  categoryId_old: string;
  productId_old: string;
  area: number;
  price: number;
  minPrice: number;
  maxPrice: number;
  isFree: string;
  isNegotiable: string;
  group: string;
  userType: string;
  shopIds: any;
  favoriteIds: any;
  createdAt: any;
  details: any;
  attachments: any;
  status: string;
}
