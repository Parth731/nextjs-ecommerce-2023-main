import CommonDetails from '@/components/commonDetails';
import { productById } from '@/services/product';

export default async function ProductDetails({ params }: any) {
  const productDetailsData = await productById(params.details);

  console.log(productDetailsData, 'sangam');

  return <CommonDetails item={productDetailsData && productDetailsData.data} />;
}
