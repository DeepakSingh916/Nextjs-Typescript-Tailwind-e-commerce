import Image from "next/image";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { products } from "@/utils/Products";
import ProductCard from "./components/products/ProductCard";

export default function Home() {

  // const truncateText = (str: String) => {
  //     if(str.length < 25)
  //       return str;
  //     return str.substring(0,25)+"...";
  // }

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any)=>{
          return <ProductCard data={product}/>})}
        </div>
      </Container>
    </div>
  );
}
