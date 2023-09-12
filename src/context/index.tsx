'use client';

import {
  LayoutProps,
  adminAddProductType,
  loadderType,
  responseLoginType,
} from '@/types/type';
import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';

export const GlobalContext = createContext(null);

export const initialCheckoutFormData: any = {
  shippingAddress: {},
  paymentMethod: '',
  totalPrice: 0,
  isPaid: false,
  paidAt: new Date(),
  isProcessing: true,
};

const protectedRoutes = ['cart', 'checkout', 'account', 'orders', 'admin-view'];

const protectedAdminRoutes = [
  '/admin-view',
  '/admin-view/add-product',
  '/admin-view/all-products',
];

export default function GlobalState({ children }: LayoutProps) {
  const [showNavModal, setShowNavModal] = useState<boolean>(false);
  const [commonLoader, setCommonLoader] = useState<boolean>(false);
  const [pageLevelLoader, setPageLevelLoader] = useState<boolean>(false);
  const [componentLevelLoader, setComponentLevelLoader] = useState<loadderType>(
    {
      loading: false,
      id: '',
    }
  );
  const [isAuthUser, setIsAuthUser] = useState<boolean>(false);
  const [user, setUser] = useState<responseLoginType | {}>({});
  const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState<
    adminAddProductType | {}
  >({});
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [addressFormData, setAddressFormData] = useState({
    fullName: '',
    city: '',
    country: '',
    postalCode: '',
    address: '',
  });

  const [checkoutFormData, setCheckoutFormData] = useState(
    initialCheckoutFormData
  );

  const [allOrdersForUser, setAllOrdersForUser] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [allOrdersForAllUsers, setAllOrdersForAllUsers] = useState([]);

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (Cookies.get('token') !== undefined) {
      setIsAuthUser(true);
      const userLocal: any = localStorage.getItem('user');
      const userData: responseLoginType[] = JSON.parse(userLocal) || {};
      console.log(userData);
      const cartItems: any = localStorage.getItem('cartItems');
      const getCartItems = JSON.parse(cartItems) || [];
      setUser(userData);
      setCartItems(getCartItems);
    } else {
      setIsAuthUser(false);
      setUser({}); //unauthenticated user
    }
  }, [Cookies]);

  useEffect(() => {
    if (
      pathName !== '/register' &&
      !pathName.includes('product') &&
      pathName !== '/' &&
      user &&
      Object.keys(user).length === 0 &&
      protectedRoutes.includes(pathName)
    )
      router.push('/login');
  }, [user, pathName]);

  const value: any = {
    showNavModal,
    setShowNavModal,
    commonLoader,
    setCommonLoader,
    isAuthUser,
    setIsAuthUser,
    user,
    setUser,
    pageLevelLoader,
    setPageLevelLoader,
    componentLevelLoader,
    setComponentLevelLoader,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
    showCartModal,
    setShowCartModal,
    cartItems,
    setCartItems,
    addresses,
    setAddresses,
    addressFormData,
    setAddressFormData,
    checkoutFormData,
    setCheckoutFormData,
    allOrdersForUser,
    setAllOrdersForUser,
    orderDetails,
    setOrderDetails,
    allOrdersForAllUsers,
    setAllOrdersForAllUsers,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}
