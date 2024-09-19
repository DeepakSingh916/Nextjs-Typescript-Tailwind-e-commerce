"use client";

import { Button, Rating } from "@mui/material";
import Image from "next/image";

interface ProductDetailsProps {
    product: any
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2"/>
}


const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const avgRating = product.reviews.reduce((accumulator: number, items: any) => items.rating + accumulator, 0) / product.reviews.length

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="">img
                {/* <Image
                    src={product.images[0].image}
                    fill
                    alt={product.name}
                    className="object-contain"
                /> */}
            </div>
            <div className="flex flex-col gap-4 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex gap-2 text-center">
                    <div><Rating value={avgRating} readOnly /></div>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal/>
                <div className="text-justify">{product.description}</div>
                <Horizontal/>
                <div>
                    <span className="font-semibold">CATEGORY:</span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">BRAND:</span> {product.brand}
                </div>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock? "Instock" : "Out of Stock"}</div>
                <Horizontal />
                <div>Color</div>
                <Horizontal />
                <div>Quality</div>
                <Horizontal />
                <Button className="bg-slate-600 text-white w-[70%]">Add To Cart</Button>
            </div>
        </div>);
}

export default ProductDetails;