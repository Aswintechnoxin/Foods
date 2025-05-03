import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black">
            <Image
                src="/banner.jpg"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                className="opacity-70"
            />
            <div className="absolute text-center text-white">
                <h1 className="text-4xl font-bold text-[70px] !text-white">Blog</h1>
                <div className="flex items-center justify-center mt-2 text-sm">
                    <span className="flex items-center text-[16px]">
                        <FontAwesomeIcon icon={faHouse} className="w-4 h-4 mr-1" />
                        HOME
                    </span>
                    <span className="mx-2 text-yellow-400">/</span>
                    <span className="text-yellow-400 font-semibold">Blog</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
