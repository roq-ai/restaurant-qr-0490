import { MenuInterface } from 'interfaces/menu';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  table_number: number;
  menu_id?: string;
  user_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  menu?: MenuInterface;
  user?: UserInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  menu_id?: string;
  user_id?: string;
  status?: string;
}
