import Image from 'next/image';
export default function ExpertInstruction() {
  return (
    <section className="bg-[url('/home/divider-bg-1-1.jpg')] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Expert <span className="text-yellow-400">instruction</span>
          </h2>
          <p className="text-lg mb-8">
            Why Minerva Institute Stands Out:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-lg">
            {[
              "Hand-Picked Authors",
              "Innovative Learning",
              "Easy To Follow Curriculum",
              "Skilled Faculty",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">➜</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
            <span className="bg-blue-800 p-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            View Course
          </button>
        </div>

        <div className="flex-1 relative flex justify-center items-center">
          <div className="absolute vs-circless"></div>
          <Image
            src="/home/banner.webp"
            alt="Doctor"
            className="max-w-xs md:max-w-sm z-10"
            width={300} 
            height={500} 
            style={{ height: "auto", width: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
