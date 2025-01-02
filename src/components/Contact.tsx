
import Image from "next/image";
import "boxicons/css/boxicons.min.css";
const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-screen md:mb-1 py-10">
      <div className="w-[80%] md:w-1/2 h-auto md:h-[80vh] flex justify-center items-center mb-5 md:mb-0">
        <Image
          src="/coments.jpg"
          alt="picture"
          width={350}
          height={350}
          className="w-full max-w-[400px] rounded-lg shadow-md"/>
      </div>

      <div className="w-[90%] md:w-1/2 h-auto md:h-[80vh] flex justify-center items-center mb-5 md:mb-0 md:mr-6">
        <form className="flex flex-col w-full p-6 md:p-12 bg-gradient-to-r from-[#254580] to-[#5d5cad] rounded-lg shadow-lg">
          <h1 className="text-center text-3xl font-semibold text-[#F4E1D2] mb-8">
            Write your review <i className="bx bxs-pencil"></i>
          </h1>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-4 text-[#222] border-2 border-[#DDD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#333b63] hover:bg-[#e5e3f3] transition duration-300"/>
          </div>

          <div className="mb-6">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 text-[#222] border-2 border-[#DDD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#675eb3] hover:bg-[#e5e3f3] transition duration-300"/>
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Message"
              required
              className="w-full p-4 text-[#222] border-2 border-[#DDD] rounded-md resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#bebfee] hover:bg-[#e5e3f3] transition duration-300"/>
          </div>

          <button
            type="submit"
            className="bg-[#221b61] text-white py-3 px-6 rounded-md hover:bg-[#5a6ccf] transition duration-300 font-semibold">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;