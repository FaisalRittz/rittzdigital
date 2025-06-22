export default function Gotidea() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-white">
                <div className="text-center md:text-left">
                    <h2 className="text-[64px] font-light text-gray-700 leading-snug">
                        <span className="text-green-600 font-bold">G</span>ot an idea in mind?<br />
                        Let’s make it real.
                    </h2>
                </div>

                <div className="mt-6 md:mt-0">
                    <button className="mt-4 w-[457px] px-6 py-2 cursor-pointer text-sm border border-gray-400 text-black relative overflow-hidden group">
                        <span
                        className="absolute bottom-0 left-0 w-0 h-0 bg-black rounded-full transition-all duration-400 ease-out group-hover:w-[60rem] group-hover:h-[60rem]"
                        style={{ transform: "translate(-50%, 50%)" }}
                        ></span>
                        <span className="relative z-10 transition-all duration-300 group-hover:text-white">
                            Say Hello
                        </span>
                    </button>
                </div>
            </div>

        </>)
}