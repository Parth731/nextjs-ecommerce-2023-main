import CommonListing from '@/components/commonListing';
import { productByCategory } from '@/services/product';

export default async function MenAllProducts() {
  const getAllProducts = await productByCategory('women');

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
