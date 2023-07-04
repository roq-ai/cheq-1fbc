import { BrandInterface } from 'interfaces/brand';
import { RetailerInterface } from 'interfaces/retailer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NetworkInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  brand?: BrandInterface[];
  retailer?: RetailerInterface[];
  user?: UserInterface;
  _count?: {
    brand?: number;
    retailer?: number;
  };
}

export interface NetworkGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
