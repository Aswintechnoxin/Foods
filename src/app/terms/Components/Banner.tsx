import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black border-bottom-banner">
            {/* Background Image */}
            <Image
                src="/banner.jpg" // Replace with your actual image path
                alt="Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />

            {/* Overlay Text */}
            <div className="absolute text-center text-white">
                <h1 className="text-4xl font-bold text-[70px] breadcumb-title">Terms & Conditions</h1>
                <div className="flex items-center justify-center mt-2 text-sm">
                    <span className="flex items-center text-[14px] gap-1 icon-menu">
                        <FontAwesomeIcon icon={faHouse} className="w-4 h-4 mr-1 mt-[-2px]"/>
                        HOME
                    </span>
                    <span className="mx-2 text-yellow-400">/</span>
                    <span className="text-yellow-400 font-semibold">TERMS & CONDITIONS</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
