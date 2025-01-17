export interface Route extends MenuDataItem {
  routes?: Route[];
}

export interface MessageDescriptor {
  id: any;
  description?: string;
  defaultMessage?: string;
}

export interface MenuDataItem {
  routes?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: any;
  locale?: string | false;
  name?: string;
  key?: string;
  pro_layout_parentKeys?: string[];
  path?: string;
  parentKeys?: string[];
  [key: string]: any;
}
