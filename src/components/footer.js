export default function Footer() {
  return (
   <>
    <footer className="bg-[#fff5ee] text-gray-800 py-12 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <img src="/assets/rittz_logo.png" alt="Logo" className="w-25 h-10" />
      </div>

      <div className="flex space-x-6 mb-6">
        <a href="#" className="hover:text-orange-500">Home</a>
        <a href="#" className="hover:text-orange-500">Services</a>
        <a href="#" className="hover:text-orange-500">About</a>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex items-start space-x-2">
          <img src="/assets/mail.svg" alt="Email" className="w-5 h-5 mt-1 bg-amber-500 rounded-2xl p-1" />
          <p>info@rittzdigital.com</p>
        </div>
        <div className="flex items-start space-x-2">
          <img src="/assets/map-pin.svg" alt="Location" className="w-5 h-5 mt-1  bg-amber-500 rounded-2xl p-1" />
          <p>11/32 A3, Cenotaph Road, Teynampet,<br/>Chennai - 600018</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="font-semibold mb-2">Stay Connected</p>
        <div className="flex space-x-4 text-sm">
          <a href="#" className="hover:text-orange-500">Facebook</a>
          <a href="#" className="hover:text-orange-500">Instagram</a>
          <a href="#" className="hover:text-orange-500">Twitter</a>
          <a href="#" className="hover:text-orange-500">LinkedIn</a>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-lg font-semibold mb-6">Subscribe to our newsletter</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border border-gray-300 p-3 rounded" />
        <input type="email" placeholder="Email" className="w-full border border-gray-300 p-3 rounded" />
        <button type="submit" className="mt-4 w-full px-6 py-2 cursor-pointer text-sm border border-gray-400 text-black relative overflow-hidden group">
            <span
              className="absolute bottom-0 left-0 w-0 h-0 bg-black rounded-full transition-all duration-400 ease-out group-hover:w-[80rem] group-hover:h-[60rem]"
              style={{ transform: "translate(-50%, 50%)" }}
            ></span>
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">
              Subscribe
            </span>
          </button>
      </form>
       <div className="mt-10 border-t border-gray-300 pt-4 text-sm text-center">
    © 2025 Rittz Digital. All Rights Reserved.
  </div>
    </div>
  </div>
</footer>
   </>
   )}