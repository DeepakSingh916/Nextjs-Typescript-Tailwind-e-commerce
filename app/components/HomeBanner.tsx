import Image from "next/image";
import img from "../public/banner-image.png";

const HomeBanner = () => {
    return (
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8 mt-4 max-h-100">
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="text-balance mb-7 md:mb-0 text-center">
                    <h1 className="font-bold text-4xl md:text-6xl text-white mb-4 ">Summer Sale !</h1>
                    <p className="mb-4 text-white text-lg md:text-xl">Enjoy discounts on slected items</p>
                    <p className="font-bold text-2xl md:text-5xl text-yellow-400">GET 50% off</p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image
                        src={img}
                        alt="Banner Image"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;