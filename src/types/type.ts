export interface NavbarType {
  router: any;
  isModalView?: boolean;
  isAdminView: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface navOptionsType {
  id: string;
  label: string;
  path: string;
}

export interface isAuthUser {
  id: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}

export interface FormControlType {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  componentType: string;
  options?: RoleOption[]; // Only for componentType "select"
}

interface RoleOption {
  id: string;
  label: string;
}

export interface userLoginType {
  email: string;
  password: string;
}

export interface userRegisterType extends userLoginType {
  name: string;
  role: string;
}

export interface responseLoginType {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface loadderType {
  id: string;
  loading: boolean;
}

export interface ComponentLevelLoaderType {
  text: string;
  color: string;
  loading: boolean;
  size?: number;
}

export interface sizes {
  id: string;
  label: string;
}

export interface adminAddProductType {
  name: string;
  price: number;
  description: string;
  category: string;
  sizes: sizes[];
  deliveryInfo: string;
  onSale: string;
  imageUrl: string;
  priceDrop: number;
}

export interface listofProducts extends adminAddProductType {
  _id: string;
}

export interface productsData {
  data: listofProducts[];
}

export type configOptionsType = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};
