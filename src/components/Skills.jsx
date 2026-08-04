import React, { useEffect, useState } from "react";

// ======================================================
// SKILL DATA
// ======================================================

const skillGroup = [
  {
    title: "Programming",

    icon: (
      <svg
        className="text-[#005a34]"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />

        <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
      </svg>
    ),

    color: "#005b3d",
    barColor: "from-indigo-500 to-cyan-400",

    skills: [
      ["Python", "85%"],
      ["JavaScript", "85%"],
    ],
  },

  // ======================================================
  // FRONTEND
  // ======================================================

  {
    title: "Frontend",

    icon: (
      <svg
        className="text-[#005a34]"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0m-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
      </svg>
    ),

    color: "#005b3d",
    barColor: "from-indigo-500 to-cyan-400",

    skills: [
      ["React.js", "75%"],
      ["HTML 5 & CSS 3", "85%"],
      ["Bootstrap", "80%"],
      ["Tailwind CSS", "80%"],
    ],
  },

  // ======================================================
  // BACKEND & DATABASE
  // ======================================================

  {
    title: "Backend & Database",

    icon: (
      <svg
        className="text-[#005a34]"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
      </svg>
    ),

    color: "#005b3d",
    barColor: "from-indigo-500 to-cyan-400",

    skills: [
      ["Django", "80%"],
      ["REST APIs", "90%"],
      ["MySQL", "90%"],
    ],
  },

  // ======================================================
  // DEVELOPER TOOLS
  // ======================================================

  {
    title: "Developer Tools",

    icon: (
      <svg
        className="text-[#005a34]"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
      </svg>
    ),

    color: "#005b3d",
    barColor: "from-indigo-500 to-cyan-400",

    skills: [
      ["Git & GitHub", "85%"],
      ["VS Code", "90%"],
      ["Microsoft Office", "75%"],
    ],
  },
];

// ======================================================
// SKILL CARD
// ======================================================

function SkillCards({ group, animated }) {
  return (
    <div
      className="
        w-full
        min-w-0
        rounded-3xl
        border
        border-white/10
        bg-[#f2ecff]
        p-5
        sm:p-6
        transition-all
        duration-500
        ease-in-out
        hover:ring-2
        hover:ring-[#8083ff]
        hover:shadow-lg
        shadow-[#8083ff]
        md:hover:scale-105
      "
    >
      {/* Icon */}
      <div
        className="
          mb-5
          sm:mb-6
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-lg
          border
          border-white/10
          bg-white/5
          text-xl
        "
        style={{ color: group.color }}
      >
        {group.icon}
      </div>

      {/* Title */}
      <h2
        className="
          mb-5
          sm:mb-6
          text-base
          sm:text-lg
          font-bold
          text-[#3a3645]
        "
      >
        {group.title}
      </h2>

      {/* Skills */}
      <div className="space-y-5">
        {group.skills.map(([name, percentage]) => (
          <div key={name}>

            {/* Skill Name + Percentage */}
            <div
              className="
                mb-2
                flex
                items-center
                justify-between
                gap-3
                text-xs
                sm:text-sm
              "
            >
              <span className="font-semibold text-[#3a3645]">
                {name}
              </span>

              <span className="shrink-0 font-semibold text-[#3a3645]">
                {percentage}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ffd9e9]">
              <div
                className={`
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  ${group.barColor}
                  transition-all
                  duration-[1500ms]
                  ease-in-out
                `}
                style={{
                  width: animated ? percentage : "0%",
                }}
              ></div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

// ======================================================
// CIRCULAR PROGRESS
// ======================================================

function CircularProgress({ name, percentage }) {
  const radius = 26;

  const circumference = 2 * Math.PI * radius;

  const progress =
    circumference - (percentage / 100) * circumference;

  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-[#a1efff]
        p-4
        sm:p-5
        text-center
        transition-all
        duration-500
        ease-in-out
        hover:ring-2
        hover:ring-[#8083ff]
        hover:shadow-lg
        shadow-[#8083ff]
        md:hover:scale-105
      "
    >
      {/* Name */}
      <p
        className="
          mb-3
          sm:mb-4
          text-xs
          sm:text-sm
          font-semibold
          text-[#3a3645]
        "
      >
        {name}
      </p>

      {/* Circle */}
      <div className="relative mx-auto h-16 w-16">

        <svg
          className="h-full w-full -rotate-90"
          viewBox="0 0 64 64"
        >
          {/* Background Circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            className="text-gray-300"
          />

          {/* Progress Circle */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="currentColor"
            strokeWidth="5"
            fill="transparent"
            strokeLinecap="round"
            className="text-indigo-500"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
          />
        </svg>

        {/* Percentage */}
        <span
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            text-sm
            font-semibold
            text-[#3a3645]
          "
        >
          {percentage}%
        </span>

      </div>
    </div>
  );
}

// ======================================================
// MAIN SKILLS COMPONENT
// ======================================================

function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="
        min-h-screen
        w-full
        bg-white
        px-4
        py-16
        sm:px-6
        sm:py-20
        md:px-10
        md:py-24
        text-white
        overflow-hidden
      "
    >

      {/* ==================================================
          SECTION HEADER
      ================================================== */}

      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="w-full"
      >
        {/* Skills */}
        <p
          className="
            m-0
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-black
            tracking-tight
            text-black
            hover:scale-105
            transition-transform
            duration-700
          "
        >
          <span
            className="
              text-red-500/70
              text-3xl
              sm:text-4xl
            "
          >
            #2
          </span>{" "}
          Skills
        </p>

        {/* Subtitle */}
        <p
          className="
            mt-4
            sm:mt-5
            text-center
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-black
            tracking-tight
            text-black
            hover:scale-105
            transition-transform
            duration-700
          "
        >
          What I Work With
        </p>
      </div>


      {/* ==================================================
          SKILL GRID
      ================================================== */}

      <div
        data-aos="fade-left"
        data-aos-delay="200"
        className="
          mx-auto
          mt-10
          sm:mt-12
          md:mt-16
          grid
          w-full
          max-w-6xl
          grid-cols-1
          gap-5
          sm:gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "
      >

        {/* Programming */}
        <SkillCards
          group={skillGroup[0]}
          animated={animated}
        />

        {/* Frontend */}
        <SkillCards
          group={skillGroup[1]}
          animated={animated}
        />

        {/* Backend */}
        <SkillCards
          group={skillGroup[2]}
          animated={animated}
        />

        {/* Developer Tools */}
        <SkillCards
          group={skillGroup[3]}
          animated={animated}
        />


        {/* ==================================================
            PROFESSIONAL STRENGTHS
        ================================================== */}

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="
            w-full
            rounded-3xl
            border
            border-white/10
            bg-[#F2ECFF]
            p-5
            sm:p-6
            md:p-7
            lg:col-span-2
          "
        >

          {/* Icon */}
          <div>
            <svg
              className="
                h-8
                w-8
                sm:h-9
                sm:w-9
                text-[#005a34]
              "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12H18L15 21L9 3L6 12H2"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Title */}
          <h2
            className="
              mb-5
              mt-4
              text-base
              sm:text-lg
              font-bold
              text-[#3a3645]
            "
          >
            Professional Strengths
          </h2>

          {/* Circular Progress Grid */}
          <div
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-3
              sm:gap-5
            "
          >

            <CircularProgress
              name="Teamwork"
              percentage={90}
            />

            <CircularProgress
              name="Problem Solving"
              percentage={85}
            />

            <CircularProgress
              name="Quick Learner"
              percentage={95}
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;