import "../styles/globals.css";

export default function Products() {
  return (
    <>
      <div className="p-20">
        <div className="bg-[#fefaf1] rounded-xl border p-6 md:p-12">
          <div className=" underline-text flex justify-between gap-8">
            <div className="relative group flex-shrink-0 flex">
              <div className="relative">
                <img
                  src="/assets/Component 254.png"
                  alt="arrow"
                  className="w-[196px] h-[196px] transition-opacity duration-300 group-hover:opacity-0"
                />

                <div
                  className="absolute top-[6rem] left-[7rem] transform -translate-x-1/2 -translate-y-1/2 
                    flex items-center justify-center opacity-0 pointer-events-none 
                    group-hover:opacity-100 group-hover:pointer-events-auto"
                >
                  <div className="bg-white h-[12rem] w-[12rem] text-black text-[2rem] font-bold px-10 py-14 rounded-full shadow-lg text-center leading-tight bounce-hover">
                    WHAT <br /> WE DO
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-black">
              <p className="underline-text1 text-xl md:text-2xl font-semibold text-right hover:text-amber-300">
                We are your partners. We build <span>unique with you.</span>
              </p>
              <p className="underline-text2 text-xl md:text-2xl font-semibold text-right hover:text-green-300">
                We shape new products by combining design, technology{" "}
                <span>, and creativity.</span>
              </p>
              <p className="underline-text3 text-xl md:text-2xl font-semibold text-right hover:text-blue-300">
                We keep the focus on <span>customer needs.</span>
              </p>
              <p className="underline-text4 text-xl md:text-2xl font-semibold text-right hover:text-orange-500">
                Affordable tech, <span>human impact.</span>
              </p>
              <p className="underline-text5 text-xl md:text-2xl font-semibold text-right hover:text-red-500">
                Bold, collaborative, people-foc <span>used innovation.</span>
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
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
                className="transition-transform duration-300 hover:-translate-y-3"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
