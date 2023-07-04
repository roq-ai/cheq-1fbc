import { NetworkInterface } from 'interfaces/network';
import { GetQueryInterface } from 'interfaces';

export interface BrandInterface {
  id?: string;
  name: string;
  network_id?: string;
  created_at?: any;
  updated_at?: any;

  network?: NetworkInterface;
  _count?: {};
}

export interface BrandGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  network_id?: string;
}
