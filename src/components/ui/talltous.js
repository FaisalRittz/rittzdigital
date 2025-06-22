export default function Talltous() {
  return (
   <>
   <div className="fixed inset-0 bg-black bg-opacity-0.5 flex items-center justify-center z-50">
  <div className="bg-white rounded-[40px] w-full max-w-5xl p-8 md:p-12  relative">
      <h2 className="text-2xl font-semibold mb-6 text-black">Talk To Us</h2> 
    <button className="absolute top-8 right-14 text-black  flex items-center justify-center">
      <img src="/assets/x-square.svg" />
    </button>
    <div className="flex flex-col md:flex-row justify-between">

    <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 text-black">
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border border-gray-400 p-3 rounded-md outline-none" />
        <input type="email" placeholder="Email" className="w-full border border-gray-400 p-3 rounded-md outline-none" />
        <input type="text" placeholder="Company" className="w-full border border-gray-400 p-3 rounded-md outline-none" />
        <textarea placeholder="Message" rows="1" className="w-full border border-gray-400 p-3 rounded-md outline-none resize-none"></textarea>

        <div className="flex items-center gap-2 mt-4 text-[16px]">
          <span className="text-black font-medium">Get In Touch</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </form>
    </div>

    <div className="w-full md:w-1/2 space-y-6">
      <div className="flex items-start gap-3">
          <img src="/assets/Group 1000001212.svg" />
        <p className="text-[16px] text-gray-700 leading-[40px]">
          11/32 A3, Cenotaph Road, Teynampet,<br />
          Chennai - 600018<br />
          51, Lower Simcoe St Toronto ON M5J 3A6
        </p>
      </div>

      <div className="flex items-center gap-3">
          <img src="/assets/Group 1000001213.svg" />
        <p className="text-[16px] text-gray-700">info@rittzdigital.com</p>
      </div>

      <div className="flex items-center gap-3">
          <img src="/assets/Group 1000001209.svg" />
        <p className="text-[16px] text-gray-700">+91 7418–333–093</p>
      </div>
    </div>
    </div>
  </div>
</div>

   </>)}