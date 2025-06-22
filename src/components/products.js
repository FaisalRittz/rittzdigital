import "../styles/globals.css";

export default function Products() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <div className="bg-[#fefaf1] rounded-xl border p-6 sm:p-8 md:p-12 flex flex-col gap-10 items-center w-full max-w-[1300px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 w-full">
          {/* Left Image */}
          <div className="relative group flex justify-center">
            <img
              src="/assets/Component 254.png"
              alt="arrow"
              className="w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] md:w-[196px] md:h-[196px] transition-opacity duration-300 group-hover:opacity-0"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="bg-white h-[9rem] w-[9rem] sm:h-[10rem] sm:w-[10rem] md:h-[12rem] md:w-[12rem] text-black text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] font-bold px-6 py-8 rounded-full shadow-lg text-center leading-tight bounce-hover">
                WHAT <br /> WE DO
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="flex flex-col gap-4 text-black text-center lg:text-right w-full">
            <p className="underline-text1 text-base sm:text-lg md:text-2xl font-semibold hover:text-amber-300 relative group inline-block">
              We are your partners. We build <span>unique with you.</span>
              <span className="block h-[2px] bg-amber-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </p>
            <p className="underline-text2 text-base sm:text-lg md:text-2xl font-semibold hover:text-green-300 relative group inline-block">
              We shape new products by combining design, technology{" "}
              <span>, and creativity.</span>
              <span className="block h-[2px] bg-green-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </p>
            <p className="underline-text3 text-base sm:text-lg md:text-2xl font-semibold hover:text-blue-300 relative group inline-block">
              We keep the focus on <span>customer needs.</span>
              <span className="block h-[2px] bg-blue-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </p>
            <p className="underline-text4 text-base sm:text-lg md:text-2xl font-semibold hover:text-orange-500 relative group inline-block">
              Affordable tech, <span>human impact.</span>
              <span className="block h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </p>
            <p className="underline-text5 text-base sm:text-lg md:text-2xl font-semibold hover:text-red-500 relative group inline-block">
              Bold, collaborative, people-foc <span>used innovation.</span>
              <span className="block h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 mt-1"></span>
            </p>
          </div>
        </div>

        {/* Logos Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center w-full">
          {[
            "Group 1000001219",
            "Group 1000001220",
            "Group 1000001207",
            "Group 1000001218",
            "Group 1000001221",
            "Group 1000001223",
          ].map((name, index) => (
            <img
              key={index}
              src={`/assets/${name}.png`}
              alt={name}
              className="w-[80px] sm:w-[100px] transition-transform duration-300 hover:-translate-y-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
