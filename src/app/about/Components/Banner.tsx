import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    return (
        <div className="relative flex justify-center items-center bg-black w-full h-[300px] md:h-[400px] lg:h-[500px]">
            {/* Background Image */}
            <Image
                src="/banner.jpg" // Replace with your actual image path
                alt="Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />

            {/* Overlay Text */}
            <div className="absolute text-white text-center">
                <h1 className="font-bold !text-white text-[70px] text-4xl">About Us</h1>
                <div className="flex justify-center items-center mt-2 text-sm">
                    <span className="flex items-center text-[16px]">
                        <FontAwesomeIcon icon={faHouse} className="mr-1 w-4 h-4" />
                        HOME
                    </span>
                    <span className="mx-2 text-yellow-400">/</span>
                    <span className="font-semibold text-yellow-400">ABOUT US</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
