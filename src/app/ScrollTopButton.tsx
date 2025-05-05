'use client';

import { ChevronUp } from 'lucide-react';

export default function ScrollTopButton() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed z-50 bottom-5 right-5 w-12 h-12 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 transition"
      aria-label="Scroll to top"
    >
      <ChevronUp className="mx-auto" />
    </button>
  );
}
