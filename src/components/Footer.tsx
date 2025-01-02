
const Footer = () => {
    return (
      <div className="bg-[#222] text-[#fff] pt-5 pb-5
            text-center">
      <div className="flex flex-col items-center gap-3">
        <div>
          <h2 className="text-[1.8rem] m-0 text-[#9691e7]">Amna Kafeel</h2>
        </div>
        <div id="footerLinks" className="flex gap-[20px]">
          <a
            href="https://github.com/AmnaKafeel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fff] no-underline text-[1.2rem] flex items-center">

            <i className='bx bxl-github mr-1 text-[1.4rem] text-[#fdfcfb] transition-colors duration-300 ease-in-out'></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer">
              
            <i className='bx bxl-linkedin-square mr-1 text-[1.4rem] text-[#406de7] transition-colors duration-300 ease-in-out'></i> LinkedIn
          </a>
        </div>
      </div>
    </div>
    );
  }
  
  export default Footer;