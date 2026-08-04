import React from "react";

import ACTE from "../assets/about/ACTE.jpg";
import MO from "../assets/about/MO.jpg";
import AI from "../assets/about/AI.jpg";
import Python from "../assets/about/Python.jpg";

// ======================================================
// EDUCATION DATA
// ======================================================

const info = [
  {
    title: "B.Tech in Information Technology",
    college: "Ganesh College of Engineering, Salem",
    score: "CGPA: 7.3",
    year: "2022 – 2026",
  },

  {
    title: "Higher Secondary Certificate (HSC)",
    college: "Government Boys Higher Secondary School, Salem",
    score: "SCORE: 69%",
    year: "2022",
  },

  {
    title: "Secondary School Leaving Certificate (SSLC)",
    college: "Government Boys Higher Secondary School, Salem",
    score: "SCORE: 79%",
    year: "2020",
  },
];

// ======================================================
// TIMELINE DOT
// ======================================================

function TimelineDot() {
  return (
    <div
      className="
        absolute
        left-0
        top-6
        z-10
        flex
        h-5
        w-5
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border-2
        border-sky-400
        bg-slate-950
        transition-transform
        duration-300
        hover:scale-110

        md:left-1/2
        md:top-1/2
        md:-translate-y-1/2
      "
    >
      <div className="h-2 w-2 rounded-full bg-sky-400" />
    </div>
  );
}

// ======================================================
// ACADEMIC TIMELINE
// ======================================================

function Academic({ list }) {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">

      <div className="relative mx-auto max-w-5xl">

        {/* Timeline Line */}
        <div
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-0.5
            bg-sky-500/40

            md:left-1/2
            md:-translate-x-1/2
          "
        />

        {/* Timeline Items */}
        <div className="space-y-10 md:space-y-16">

          {list.map((item, index) => {

            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="
                  relative
                  min-h-[130px]
                  pl-7

                  md:min-h-[170px]
                  md:pl-0
                "
              >

                {/* Timeline Dot */}
                <TimelineDot />

                {/* Academic Card */}
                <div
                  className={`
                    w-full
                    rounded-xl
                    border
                    border-slate-800
                    bg-slate-900/70
                    p-4
                    shadow-md
                    shadow-indigo-600/10
                    transition-all
                    duration-300

                    md:w-[calc(50%-2rem)]
                    md:p-5
                    md:hover:scale-[1.02]
                    md:hover:ring-1
                    md:hover:ring-indigo-800

                    ${
                      isEven
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }
                  `}
                >

                  {/* Title + Year */}
                  <div
                    className="
                      flex
                      flex-col
                      gap-2
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >

                    <h3
                      className="
                        text-base
                        font-bold
                        leading-snug
                        text-white
                        sm:text-lg
                      "
                    >
                      {item.title}
                    </h3>

                    <span
                      className="
                        w-fit
                        shrink-0
                        rounded-md
                        bg-sky-500/20
                        px-2
                        py-1
                        text-[10px]
                        font-medium
                        text-sky-300
                        sm:text-xs
                      "
                    >
                      {item.year}
                    </span>

                  </div>

                  {/* College */}
                  <p
                    className="
                      mt-3
                      text-xs
                      font-medium
                      leading-relaxed
                      text-sky-400
                      sm:text-sm
                    "
                  >
                    {item.college}
                  </p>

                  {/* Score */}
                  <p
                    className="
                      mt-1
                      text-[11px]
                      text-slate-400
                      sm:text-xs
                    "
                  >
                    {item.score}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

// ======================================================
// CALENDAR ICON
// ======================================================

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="shrink-0 text-slate-400"
    >

      <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />

      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />

    </svg>
  );
}

// ======================================================
// ACHIEVEMENT ITEM
// ======================================================

function Achievement({
  title,
  organization,
  date,
  image,
}) {
  return (

    /*
      IMPORTANT:
      Do NOT use "fadeUp" on this parent.

      Your fadeUp animation uses:
      animation-timeline: view();

      Because Box 4 is lower on the page,
      it becomes partially transparent.
    */

    <div
      data-aos="fade-left"
      className="feaw-full">

      {/* Text */}
      <div>

        <h2
          className="
            text-base
            font-bold
            leading-snug
            text-white
            sm:text-lg
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1
            text-xs
            font-semibold
            tracking-wide
            text-slate-400
            sm:text-sm
          "
        >
          {organization}
        </p>

        {/* Date */}
        <div className="mt-2 flex items-center gap-1">

          <CalendarIcon />

          <p
            className="
              text-[10px]
              tracking-wide
              text-slate-400
              sm:text-xs
            "
          >
            {date}
          </p>

        </div>

      </div>

      {/* Certificate Image */}
      <div
        className="
          mt-5
          w-full
          overflow-hidden
          rounded-xl
          ring-2
          ring-indigo-800
          shadow-lg
          shadow-indigo-600/20
          transition-all
          duration-500

          md:hover:scale-[1.03]
          md:hover:shadow-indigo-600/40
        "
      >

        <img
          src={image}
          alt={title}
          className="
            block
            h-auto
            w-full
            object-contain
          "
        />

      </div>

    </div>
  );
}

// ======================================================
// EDUCATION COMPONENT
// ======================================================

function Education() {
  return (

    <section
      id="education"
      className="
        min-h-screen
        w-full
        overflow-hidden
        bg-[#111827]
        px-0
        py-12
        text-white

        sm:py-16
        md:py-20
      "
    >

      {/* ==================================================
          MAIN HEADING
      ================================================== */}

      <div
        data-aos="fade-left"
        className="
          px-4
          text-center
          sm:px-6
        "
      >

        <p
          className="
            text-3xl
            font-black
            tracking-tight
            text-white

            sm:text-4xl
            md:text-5xl
          "
        >

          <span
            className="
              text-3xl
              tracking-tight
              text-red-500/70
              sm:text-4xl
            "
          >
            #4
          </span>

          {" "}Education

        </p>

      </div>


      {/* ==================================================
          ACADEMIC HISTORY
      ================================================== */}

      <div
        data-aos="fade-left"
        className="
          mx-auto
          mt-14
          w-full
          max-w-6xl

          sm:mt-16
          md:mt-20
        "
      >

        {/* Section Heading */}

        <div
          data-aos="fade-left"
          className="
            mb-10
            flex
            items-center
            gap-3
            px-5

            sm:px-8
            md:px-10
          "
        >

          {/* Education Icon */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            fill="currentColor"
            viewBox="0 0 16 16"
            className="
              shrink-0
              text-sky-400

              sm:h-10
              sm:w-10
            "
          >

            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z" />

            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z" />

          </svg>


          <h1
            className="
              text-xl
              font-bold
              sm:text-2xl
              md:text-3xl
            "
          >
            Academic History
          </h1>

        </div>


        {/* Timeline */}

        <Academic list={info} />

      </div>


      {/* ==================================================
          ACHIEVEMENTS
      ================================================== */}

      <div
        className="
          mx-auto
          mt-20
          w-full
          max-w-6xl

          sm:mt-24
          md:mt-28
        "
      >

        {/* Section Heading */}

        <div
          data-aos="fade-left"
          className="
            mb-10
            flex
            items-center
            gap-3
            px-5

            sm:px-8
            md:px-10
          "
        >

          {/* Achievement Icon */}

          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="
              shrink-0
              text-yellow-400

              sm:h-10
              sm:w-10
            "
          >

            <path
              d="M7.96668 14.7219L7 22L11.5884 19.247C11.7381 19.1572 11.8129 19.1123 11.8928 19.0947C11.9634 19.0792 12.0366 19.0792 12.1072 19.0947C12.1871 19.1123 12.2619 19.1572 12.4116 19.247L17 22L16.0343 14.7212M19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

          </svg>


          <h1
            className="
              text-xl
              font-bold
              sm:text-2xl
              md:text-3xl
            "
          >
            Achievements
          </h1>

        </div>


        {/* ==================================================
            ACHIEVEMENT GRID
        ================================================== */}

        <div
        
          className="
            grid
            grid-cols-1
            gap-12
            px-5

            sm:px-8

            md:grid-cols-2
            md:gap-x-10
            md:gap-y-16
            md:px-10

            lg:grid-cols-3
            lg:gap-x-10
            lg:gap-y-16

            items-start
          "
        >

          {/* ==================================================
              BOX 1
          ================================================== */}

          <div className="w-full">

            <Achievement 
              title="Python Full Stack Certification"
              organization="ACTE Technologies, Chennai"
              date="Completed May 2026"
              image={ACTE}
            />

          </div>


          {/* ==================================================
              BOX 2
          ================================================== */}

          <div className="w-full">

            <Achievement
              title="Microsoft Office Essentials"
              organization="Naan Mudhalvan Program"
              date="Completed May 2025"
              image={MO}
            />

          </div>


          {/* ==================================================
              BOX 3
          ================================================== */}

          <div className="w-full">

            <Achievement
              title="AI Fluency Training on All About AI"
              organization="Naan Mudhalvan Program"
              date="Completed December 2023"
              image={AI}
            />

          </div>


          {/* ==================================================
              BOX 4
          ================================================== */}

          <div
            className="
              w-full

              md:col-start-2

              lg:col-start-1
            "
          >

            <Achievement
              title="Python Programming"
              organization="Yard Stick Academy"
              date="One Week"
              image={Python}
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;