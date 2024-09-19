import { MdFacebook } from "react-icons/md";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="
        bg-slate-700
        text-slate-200
        text-sm
        mt-16
        ">
            <Container>
                <div className="
                flex flex-col
                md:flex-row
                justify-between
                pt-16
                pb-8
                ">
                    <FooterList>
                        <h3 className="text-base font-bold pb-2">Shop Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Watches</Link>
                        <Link href="#">TVs</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold pb-2">Customer Services</h3>
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Shipping Policies</Link>
                        <Link href="#">Returns & Exchanges</Link>
                        <Link href="#">FAQs</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold mb-2">About Us</h3>
                        <p className="mb-2">At our electronic state we are dedicated to providing dedicated
                            and latest devices and accessories to our customers</p>
                        <p>&copy; {new Date().getFullYear()} E~Shop, All rights reserved.</p>
                    </FooterList>
                    <FooterList>
                        <h3 className="text-base font-bold pb-2">Follow Us</h3>
                        <div className="gap-2 ml-6">
                            <Link href="#">
                                <div className="flex items-center mb-2">
                                    <MdFacebook size={24} className="mr-2"/>
                                    <span>Facebook</span>
                                </div>
                            </Link>
                            <Link href="#">
                                <div className="flex items-center mb-2">
                                    <AiFillTwitterCircle size={24} className="mr-2"/>
                                    <span>Twitter</span>
                                </div>
                            </Link>
                            <Link href="#">
                                <div className="flex items-center mb-2">
                                    <AiFillInstagram size={24} className="mr-2"/>
                                    <span>Instagram</span>
                                </div>
                            </Link>
                            <Link href="#">
                                <div className="flex items-center mb-2">
                                    <AiFillYoutube size={24} className="mr-2"/>
                                    <span>YouTube</span>
                                </div>
                            </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
