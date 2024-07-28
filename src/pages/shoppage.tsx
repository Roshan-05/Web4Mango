import BulkOrders from "@/components/bulk-orders";
import CustomerCare from "@/components/customer-care";
import ProductCard from "@/components/product-card";
import ProductsLandingPage from "@/components/products-landing";
import ShopsLandingPage from "@/components/shops-landing";
import TalkToCeo from "@/components/talk-to-the-ceo";

export default function ShopPage() {
  return (
    <div>
      <ShopsLandingPage />
      <ProductCard />
    </div>
  );
}
