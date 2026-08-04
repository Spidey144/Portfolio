import React from 'react';
import stackImage from '../assets/about/photo.png';
import reactImage from '../assets/about/react.png';
import djangoImage from '../assets/about/django.png';
import Mysqlimage from '../assets/about/Mysql.png';

const About = () => {
  return (
    <section
      id="about"
      className="
        bg-[#ff2a2a]
        pt-16 pb-32
        px-4
        sm:px-6
        md:px-12
        w-full
        relative
        overflow-hidden
        font-sans
      "
    >

      {/* Heading */}
      <div data-aos="fade-left" className="w-full">
        <div
          className="
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            text-black
            mb-4
            antialiased
            hover:scale-105
            transition-all
            duration-700
          "
        >
          <span className="text-white tracking-tight">#1</span>{" "}
          About Me
        </div>
      </div>

      {/* Main Container */}
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          gap-10
          md:gap-16
          items-center
          md:items-start
        "
      >

        {/* ================= LEFT SIDE ================= */}
        <div
          className="
            flex
            flex-col
            items-center
            w-full
            md:w-[350px]
            md:shrink-0
            mt-8
            md:mt-0
          "
        >

          <div
            data-aos="drop-bounce"
            className="relative flex justify-center w-full"
          >

            {/* Lanyard string */}
            <div
              className="
                absolute
                -top-24
                sm:-top-28
                md:-top-32
                left-1/2
                w-2
                sm:w-3
                h-32
                sm:h-36
                md:h-40
                bg-black
                transform
                -translate-x-1/2
                shadow-inner
                z-0
              "
            ></div>

            {/* Lanyard clip */}
            <div
              className="
                absolute
                -top-5
                md:-top-6
                left-1/2
                w-5
                md:w-6
                h-10
                md:h-12
                bg-gray-300
                rounded
                border
                border-gray-400
                transform
                -translate-x-1/2
                z-10
                shadow-[0_2px_10px_rgba(0,0,0,0.3)]
              "
            ></div>

            {/* Badge */}
            <div
              className="
                bg-gray-900
                w-[240px]
                sm:w-[260px]
                md:w-full
                max-w-[280px]
                rounded-2xl
                p-3
                shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                relative
                z-20
                -rotate-3
                hover:rotate-0
                transition-transform
                duration-500
              "
            >

              {/* Cutout Hole */}
              <div
                className="
                  absolute
                  -top-3
                  left-1/2
                  w-14
                  sm:w-16
                  h-6
                  bg-gray-900
                  rounded-t-xl
                  transform
                  -translate-x-1/2
                  flex
                  justify-center
                  items-center
                "
              >
                <div className="w-7 sm:w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>

              {/* Image */}
              <div
                className="
                  w-full
                  aspect-[3/4]
                  overflow-hidden
                  rounded-xl
                  bg-gray-800
                "
              >
                <img
                  src={stackImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            w-full
            md:flex-1
            mt-6
            md:mt-10
          "
        >

          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="
              text-white
              relative
              z-20
              p-2
              sm:p-3
              md:p-2
              text-center
              md:text-left
            "
          >

            {/* Hello */}
            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-black
                text-black
                mb-4
                hover:scale-105
                transition-transform
                duration-700
              "
            >
              Hello!
            </h2>

            {/* Description */}
            <p
              className="
                text-base
                sm:text-lg
                font-bold
                mb-8
                md:mb-12
                leading-relaxed
                max-w-3xl
                text-red-50
                hover:scale-[1.02]
                transition-transform
                duration-700
              "
            >
              Hi, my name is{" "}
              <span
                className="
                  text-black
                  text-lg
                  sm:text-xl
                  font-black
                  mx-1
                  tracking-wide
                  uppercase
                "
              >
                Sangareshwaran
              </span>
              , a passionate Full Stack Developer eager to start my career
              in software development. I enjoy building responsive,
              user-friendly web applications and continuously expanding my
              knowledge of modern technologies. As a fresher, I have
              hands-on experience developing full-stack projects using
              React, Django, Tailwind CSS, MySQL, and Git.
            </p>


            {/* ================= SKILLS ================= */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                md:justify-start
                items-center
                gap-6
                sm:gap-8
                md:gap-10
                mt-6
                md:mt-8
              "
            >

              {/* React */}
              <img
                data-aos="zoom-in"
                data-aos-delay="300"
                src={reactImage}
                alt="React"
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  md:w-24
                  md:h-24
                  object-contain
                  hover:scale-110
                  duration-700
                  transition-transform
                  cursor-pointer
                  drop-shadow-2xl
                "
              />

              {/* Django */}
              <img
                data-aos="zoom-in"
                data-aos-delay="450"
                src={djangoImage}
                alt="Django"
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  md:w-24
                  md:h-24
                  object-contain
                  hover:scale-110
                  duration-700
                  transition-transform
                  cursor-pointer
                  drop-shadow-2xl
                "
              />

              {/* MySQL */}
              <img
                data-aos="zoom-in"
                data-aos-delay="600"
                src={Mysqlimage}
                alt="MySQL"
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  md:w-24
                  md:h-24
                  object-contain
                  hover:scale-110
                  duration-700
                  transition-transform
                  cursor-pointer
                  drop-shadow-2xl
                "
              />

            </div>

          </div>
        </div>
      </div>


      {/* ================= TORN PAPER ================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          pointer-events-none
          z-30
          translate-y-1
        "
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>


      {/* ================= DECORATIVE STAR ================= */}
      <div
        className="
          absolute
          top-8
          right-4
          sm:right-10
          md:right-20
          text-black
          opacity-30
          animate-pulse
        "
      >
        <svg
          className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div
        className="
          absolute
          bottom-24
          left-2
          sm:left-10
          md:left-20
          text-black
          opacity-30
          animate-pulse
        "
        style={{ animationDelay: '1s' }}
      >
        <svg
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

    </section>
  );
};

export default About;