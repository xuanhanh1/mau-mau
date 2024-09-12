export interface categories {
  createdAt: number;
  description: string;
  giveaway: string;
  group: string;
  icon: string;
  id_old?: string;
  image: string;
  name: string;
  order: number;
  prefix: string | null;
  price: number;
  slug: string;
  status: string | "ACTIVE" | "NOTACTIVE";
  suffixes: string;
  updatedAt: number;
  updatedBy: string;
  userType: string;
  _id?: string;
  products?: any;
}
