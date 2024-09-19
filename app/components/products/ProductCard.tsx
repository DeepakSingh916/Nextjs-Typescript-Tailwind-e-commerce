"use client";

import { formatPrice } from "@/app/formatPrice";
import { truncateText } from "@/app/truncateText";
import Image from "next/image";
import React from "react";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";


interface ProductCardProps {
    data: any
}


const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter()

    const avgRating = data.reviews.reduce((accumulator: number, items: any) => items.rating + accumulator, 0) / data.reviews.length

    return (
        <div 
        onClick={()=>router.push(`/productDetails/${data.id}`)}
        className="col-span-1 cursor-pointer border-[1.2px] border-slate-200
        bg-slate-50 rounded-sm p-2 text-center text-sm transition hover:scale-110">
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        src={data.images[0].image}
                        alt={data.name}
                        fill
                        className="w-full h-full object-contain"
                    />

                </div>
                <div className="mt-4 font-semibold text-slate-600">{truncateText(data.name)}</div>
                <div>
                    <Rating value={avgRating} readOnly />
                </div>
                <div className="text-slate-600">{data.reviews.length} reviews</div>
                <div className="font-semibold text-slate-600">{formatPrice(data.price)}</div>
            </div>
        </div>
    );
}

export default ProductCard;