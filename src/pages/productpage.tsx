import BulkOrders from "@/components/bulk-orders";
import CustomerCare from "@/components/customer-care";
import NutritionalBenefits from "@/components/nutritional-benefits";
import ProductCard from "@/components/product-card";
import ProductsLandingPage from "@/components/products-landing";
import ProductsProduct from "@/components/products-product";
import TalkToCeo from "@/components/talk-to-the-ceo";

export default function ProductPage() {
  return (
    <div>
      
      <ProductsLandingPage />
      <ProductsProduct />
      <NutritionalBenefits />
    </div>
  );
}
