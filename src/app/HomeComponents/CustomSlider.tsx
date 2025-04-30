'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  '/asset/pexels-catscoming-955137.jpg',
  '/asset/pexels-chanwalrus-958545.jpg',
  '/asset/pexels-dana-tentis-118658-262959.jpg',
  '/asset/pexels-alexy-almond-3756498.jpg',
  '/asset/pexels-chanwalrus-958545.jpg',
];

const contentData = [
  {
    title: 'Delicious Caters',
    description: 'Experience the best flavors from our gourmet catering service.',
  },
  {
    title: 'Fine Dining Experience',
    description: 'Enjoy a luxury meal crafted by top chefs.',
  },
  {
    title: 'Healthy & Organic',
    description: 'Fresh, organic, and delicious meals tailored to your needs.',
  },
  {
    title: 'Sweet Treats',
    description: 'Indulge in our hand-crafted desserts and sweets.',
  },
  {
    title: 'Fine Dining Experience',
    description: 'Enjoy a luxury meal crafted by top chefs.',
  },
];

export default function CustomSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);


  const startAutoSlide = () => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 13000);
    setAutoSlideInterval(interval);
  };

  const resetAutoSlide = () => {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
    startAutoSlide();

    return () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
    };
  }, []);

  useEffect(() => {
    AOS.refresh(); 
  }, [currentIndex]);

  return (
    <div className="w-full py-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Previous image thumbnail */}
        <div className="lg:col-span-2 hidden lg:block mt-[350px]">
          {currentIndex > 0 && (
            <Image
              src={images[(currentIndex - 1 + images.length) % images.length]}
              alt="Previous"
              width={100}
              height={150}
              className="rounded-md shadow-md border-8 border-white object-cover lg:w-[150px] lg:h-[100px]"
            />
          )}
        </div>

        {/* Center: Main image */}
        <div
          className="lg:col-span-4 border-8 border-white justify-self-center "
          key={currentIndex} // Force re-render
          data-aos="zoom-in"
        >
          <Image
            src={images[currentIndex]}
            alt="Main"
            width={350}
            height={550}
            className="w-[350px] h-[520px] object-cover shadow-md"
          />
        </div>

        {/* Right: Text + Controls + Thumbnails */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="text-3xl font-bold text-red-600">{contentData[currentIndex].title}</h3>
            <p className="text-gray-600 text-lg">{contentData[currentIndex].description}</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                resetAutoSlide();
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Prev
            </button>
            <button
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                resetAutoSlide();
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Next
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2 lg:mt-[160px]">
            {images.slice(currentIndex + 1).map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                width={100}
                height={100}
                className="w-[150px] h-[100px] rounded-md border-8 border-white cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md object-cover"
                onClick={() => {
                  setCurrentIndex(currentIndex + 1 + i);
                  resetAutoSlide();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
