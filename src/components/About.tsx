import Image from "next/image";

const About = () => {
  return (
    <div className="py-12 px-5 flex justify-center items-center overflow-hidden">
      <div className="bg-gray-300 shadow-lg rounded-lg p-6 sm:p-10 max-w-7xl flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex justify-center items-center w-full md:w-[30%]">
          <Image
            src={"/profilebg.png"}
            alt="Amna Here"
            width={500}
            height={900}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"/>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl text-gray-800 mb-3 font-extrabold ">About Me</h2>
          <h1 className="text-2xl sm:text-3xl text-teal-900 mb-3">
            Me <span className="text-teal-700 animate-pulse ">Amna Kafeel</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
          "I specialize in building modern, responsive websites and web applications using HTML, CSS, and TypeScript, with a focus on performance and user experience."

"With in-depth knowledge of Tailwind CSS, I create fast and scalable UIs, ensuring design consistency and high-quality front-end code."

"My expertise in Next.js allows me to build server-side rendered, SEO-friendly web applications that deliver high performance and enhanced user engagement."

"By combining HTML, CSS, TypeScript, and Tailwind CSS, I craft sleek and maintainable user interfaces while keeping accessibility and responsiveness at the forefront."

"I focus on delivering scalable, high-performance web solutions using Next.js, TypeScript, and Tailwind CSS, making sure to build applications that are both visually appealing and technically efficient."

"Through my expertise in TypeScript and Next.js, I develop robust and dynamic web applications, while using Tailwind CSS for clean, responsive, and customizable design solutions."

"I use HTML, CSS, Tailwind CSS, and TypeScript to create interactive, fast, and responsive web interfaces, ensuring the applications I build are both scalable and maintainable."

"Combining the power of Next.js with TypeScript and Tailwind CSS, I build dynamic, and highly performant web applications that prioritize both user experience and technical excellence."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;