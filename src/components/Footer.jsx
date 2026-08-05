import React from "react";
import Projects from "./Projects";
import resume from "../assets/about/Sangareshwaran_Resume.pdf";

const Footer = () => {
  return (
    <footer
      className="
        bg-[#0a0a0a]
        text-[#d4d4d4]
        w-full
        min-h-[50vh]
        px-4
        py-12
        sm:px-6
        sm:py-14
        md:px-12
        md:py-16
        font-mono
        text-[10px]
        sm:text-xs
        tracking-widest
        flex
        flex-col
        justify-between
        overflow-hidden
      "
    >
      {/* ==================================================
          TOP ROW
      ================================================== */}

      <div
        className="
          fadeUp
          grid
          grid-cols-1
          gap-8
          sm:gap-10
          md:grid-cols-3
          md:gap-8
          w-full
          font-medium
        "
      >
        {/* Download CV */}

        <div data-aos="fade-left" className="flex justify-start">
          <a
            className="
              inline-flex
              w-fit
              min-w-[140px]
              items-center
              justify-center
              px-4
              py-2
              sm:px-5
              sm:py-2
              md:px-6
              md:py-2
              text-xs
              sm:text-sm
              md:text-base
              rounded-full
              bg-red-700
              border
              border-white
              text-white
              font-semibold
              hover:bg-black/60
              backdrop-blur-md
              hover:scale-105
              transition-all
              duration-700
              ease-in-out
              whitespace-nowrap
            "
            href={resume}
            download="My-resume.pdf"
          >
            Download CV
          </a>
        </div>

        {/* Fresher / View Work */}

        <div
         data-aos="fade-left"
          className="
            flex
            flex-col
            gap-1
            md:items-center
          "
        >
          <p>Fresher</p>

          <a
            href="#projects"
            className="
              underline
              hover:text-white
              transition-colors
              mt-1
              underline-offset-4
              decoration-1
              w-fit
            "
          >
            View Work
          </a>
        </div>

        {/* Available / Year */}

        <div
        data-aos="fade-left"
          className="
            flex
            flex-col
            gap-1
            md:items-end
          "
        >
          <p>Available</p>

          <p>{new Date().getFullYear()}</p>
        </div>
      </div>


      {/* ==================================================
          MIDDLE HUGE TEXT
      ================================================== */}

      <div
        data-aos="fade-left"
        className="
          fadeUp
          w-full
          flex
          justify-center
          items-center
          py-14
          sm:py-16
          md:py-24
          overflow-hidden
        "
      >
        <h2
         data-aos="fade-left"
          className="
            text-[10vw]
            sm:text-[9vw]
            md:text-[10vw]
            leading-none
            font-sans
            font-bold
            tracking-tighter
            lowercase
            select-none
            text-[#f4f4f4]
            w-full
            text-center
            whitespace-nowrap
          "
        >
          Sangareshwaran
        </h2>
      </div>


      {/* ==================================================
          BOTTOM ROW
      ================================================== */}

      <div
       data-aos="fade-left"
        className="
          grid
          grid-cols-1
          gap-8
          sm:gap-10
          md:grid-cols-3
          md:gap-8
          w-full
          items-end
          font-medium
        "
      >

        {/* Contact */}

        <div
          className="
            flex
            flex-col
            gap-5
            sm:gap-6
          "
        >
          <a
            href="#contact"
            className="
              underline
              hover:text-white
              transition-colors
              underline-offset-4
              decoration-1
              font-bold
              w-fit
            "
          >
            Contact
          </a>

          <p
            className="
              text-white/60
              font-mono
              text-[9px]
              sm:text-[10px]
            "
          >
            &copy; {new Date().getFullYear()} Spidey | Built with React
          </p>
        </div>


        {/* Email */}

        <div
          className="
            flex
            flex-col
            gap-1
            md:items-center
            min-w-0
          "
        >
          <a
            href="mailto:sangarvpy.az@gmail.com"
            className="
              underline
              hover:text-white
              transition-colors
              underline-offset-4
              decoration-1
              lowercase
              break-all
              sm:break-normal
              text-left
              md:text-center
            "
          >
            sangarvpy.az@gmail.com
          </a>
        </div>


        {/* Privacy Policy */}

        <div
          className="
            flex
            flex-col
            gap-1
            md:items-end
          "
        >
          <a
            href="#"
            className="
              underline
              hover:text-white
              transition-colors
              underline-offset-4
              decoration-1
              w-fit
              md:ml-auto
            "
          >
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;