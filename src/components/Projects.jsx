import React from "react";

// ======================================================
// CHECK ITEM
// ======================================================

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">

      {/* Check Icon */}
      <span
        className="
          mt-1
          flex
          h-4
          w-4
          shrink-0
          items-center
          justify-center
          rounded-full
          border-2
          border-purple-400
          text-purple-400
        "
      >
        <svg
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </span>

      {/* Text */}
      <p
        className="
          text-xs
          sm:text-sm
          leading-relaxed
          text-gray-200
        "
      >
        {children}
      </p>

    </li>
  );
}


// ======================================================
// CHECK LIST
// ======================================================

function CheckCardList({ list }) {
  return (
    <ul
      className="
        space-y-3
        px-4
        sm:px-5
        py-2
      "
    >
      {list.map((text, i) => (
        <CheckItem key={i}>
          {text}
        </CheckItem>
      ))}
    </ul>
  );
}


// ======================================================
// PROJECT DATA
// ======================================================

const list2= [
  "Developed full-stack web application using Django REST Framework and React.js.",
  "Implemented user authentication, registration, login, and secure session handling.",
  "Designed REST APIs to connect frontend and backend components.",
  "Built ticket search, booking, cancellation, and CRUD functionality.",
];

const list3 = [
  "Built a machine-learning web application to classify URLs as phishing or legitimate using URL features.",
  "Implemented tokenization, stemming, CountVectorizer, and multiple ML models for URL classification.",
  "Developed Django REST APIs and a React frontend with URL scanning, confidence-based predictions, risk analysis, and scan history.",
  "Integrated MySQL to store URL scan results.",
];

const list1 = [
  "Storefront & UI: Built a responsive, mobile-first storefront using React and Tailwind CSS with dynamic carousels and client-side validation.",
  "State & Features: Managed cart persistence, custom combo builders, and distance-based delivery fees using React Context API.",
  "Order Automation: Integrated Telegram Bot API for instant, serverless dispatch of COD order details and customer locations.",
  "Optimization & CI/CD: Automated WebP image optimization via Cloudinary and set up continuous deployment on Vercel with a custom domain.",
];


// ======================================================
// TECHNOLOGY BADGE
// ======================================================

function TechBadge({ children }) {
  return (
    <span
      className="
        m-1
        inline-flex
        items-center
        gap-x-1.5
        rounded-lg
        bg-indigo-400/10
        px-2
        py-1
        text-[10px]
        sm:text-xs
        font-medium
        text-indigo-400
        ring-1
        ring-inset
        ring-indigo-400/30
      "
    >
      <span
        className="
          inline-block
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          bg-blue-400
        "
      />

      {children}
    </span>
  );
}


// ======================================================
// GITHUB ICON
// ======================================================

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="shrink-0"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}


// ======================================================
// LIVE DEMO ICON
// ======================================================

function LiveIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
      />

      <path
        fillRule="evenodd"
        d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
      />
    </svg>
  );
}


// ======================================================
// PROJECT CARD
// ======================================================

function ProjectCard({
  category,
  title,
  description,
  features,
  technologies,
  repoLink = "#",
  demoLink = "#",
}) {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="200"
      className="h-full"
    >

      <div
        className="
          flex
          h-full
          min-w-0
          flex-col
          overflow-hidden
          rounded-2xl
          bg-gray-800
          ring-1
          ring-indigo-500
          transition-all
          duration-300
          ease-in-out
          hover:shadow-lg
          hover:shadow-indigo-400/30
          md:hover:scale-[1.02]
        "
      >

        {/* ==============================================
            CATEGORY
        ============================================== */}

        <div className="px-4 pt-4 sm:px-5 sm:pt-5">

          <span
            className="
              inline-flex
              max-w-full
              items-center
              rounded-md
              bg-blue-400/10
              px-2
              py-1
              text-[10px]
              sm:text-xs
              font-medium
              text-blue-400
              ring-1
              ring-inset
              ring-blue-400/30
            "
          >
            {category}
          </span>

        </div>


        {/* ==============================================
            TITLE
        ============================================== */}

        <h1
          className="
            px-4
            pt-4
            text-lg
            sm:px-5
            sm:text-xl
            font-semibold
            leading-tight
            text-white
          "
        >
          {title}
        </h1>


        {/* ==============================================
            DESCRIPTION
        ============================================== */}

        <p
          className="
            px-4
            pt-3
            text-xs
            sm:px-5
            sm:text-sm
            leading-relaxed
            text-gray-300
          "
        >
          {description}
        </p>


        {/* ==============================================
            FEATURES
        ============================================== */}

        <div className="mt-3">

          <CheckCardList list={features} />

        </div>


        {/* ==============================================
            TECHNOLOGIES
        ============================================== */}

        <div className="px-4 pt-2 sm:px-5">

          {technologies.map((technology, index) => (
            <TechBadge key={index}>
              {technology}
            </TechBadge>
          ))}

        </div>


        {/* ==============================================
            BOTTOM BUTTONS
        ============================================== */}

        <div className="mt-auto">

          <hr
            className="
              mx-auto
              my-5
              w-[calc(100%-2rem)]
              border-0
              border-t
              border-indigo-400/50
            "
          />

          <div
            className="
              flex
              flex-col
              gap-3
              px-4
              pb-5
              sm:flex-row
              sm:justify-center
              sm:gap-4
            "
          >

            {/* Repository */}
            <a
              className="
                inline-flex
                min-h-10
                w-full
                items-center
                justify-center
                gap-2
                rounded-md
                bg-indigo-400/10
                px-3
                py-2
                text-xs
                sm:w-32
                sm:text-sm
                ring-1
                ring-inset
                ring-indigo-400
                transition-all
                duration-300
                hover:bg-indigo-400/20
                md:hover:scale-95
              "
              href={repoLink}
              target={repoLink !== "#" ? "_blank" : undefined}
              rel={repoLink !== "#" ? "noopener noreferrer" : undefined}
            >
              <GithubIcon />

              Repository
            </a>


            {/* Live Demo */}
            <a
              className="
                inline-flex
                min-h-10
                w-full
                items-center
                justify-center
                gap-2
                rounded-md
                bg-indigo-600
                px-3
                py-2
                text-xs
                sm:w-32
                sm:text-sm
                ring-1
                ring-inset
                ring-indigo-600
                transition-all
                duration-300
                hover:bg-indigo-500
                md:hover:scale-95
              "
              href={demoLink}
              target={demoLink !== "#" ? "_blank" : undefined}
              rel={demoLink !== "#" ? "noopener noreferrer" : undefined}
            >
              <LiveIcon />

              Live Demo
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}


// ======================================================
// MAIN PROJECTS COMPONENT
// ======================================================

function Projects() {
  return (
    <section
      id="projects"
      className="
        w-full
        overflow-hidden
        bg-gray-900
      "
    >

      {/* ==================================================
          WAVE
      ================================================== */}

      <div className="bg-white">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1438 220"
          className="
            block
            h-24
            w-full
            sm:h-32
            md:h-40
          "
          preserveAspectRatio="none"
        >
          <path
            fill="#111827"
            fillOpacity="1"
            d="M0,32L60,74.7C120,117,240,203,360,213.3C480,224,600,160,720,144C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>


        {/* ==================================================
            HEADING
        ================================================== */}

        <div
          className="
            bg-gray-900
            px-4
            pb-2
            sm:px-6
          "
        >

          <p
            data-aos="fade-left"
            className="
              m-0
              text-center
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-white
            "
          >
            <span
              className="
                text-3xl
                sm:text-4xl
                text-red-500/70
              "
            >
              #3
            </span>{" "}
            Projects
          </p>

        </div>

      </div>


      {/* ==================================================
          PROJECT CARDS
      ================================================== */}

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-6xl
          grid-cols-1
          gap-6
          px-4
          py-12
          sm:px-6
          sm:py-16
          md:grid-cols-2
          md:gap-7
          md:px-8
          lg:grid-cols-3
          lg:px-10
        "
      >

        {/* ==================================================
            PROJECT 1
            ================================================== */}

        <ProjectCard
          category="Frontend / Serverless Web App"
          title="OneGallery – Hyperlocal E-Commerce Platform"
          description="
           A mobile-first e-commerce app built with React and Tailwind CSS, featuring cart persistence and real-time order dispatch via Telegram Bot API.
          "
          features={list1}
          technologies={[
            "React.js",
            "Tailwind CSS",
            "Telegram Bot API",
            "Cloudinary",
            "Vercel",
          ]}
          repoLink="https://github.com/Spidey144/Onegallery.git"
          demoLink="https://www.onegallery.in/"
        />

        {/* ==================================================
            PROJECT 2
        ================================================== */}

        <ProjectCard
          category="Full Stack Development"
          title="Bus Ticket Booking System"
          description="
            A comprehensive, high-fidelity ticket reservation platform
            featuring robust seat layouts, real-time ticket searching,
            booking, cancellation, and clean CRUD flows.
          "
          features={list2}
          technologies={[
            "React.js",
            "Django",
            "REST APIs",
            "MySQL",
            "TailwindCSS",
          ]}
          repoLink="https://github.com/Spidey144/Instabus.git"
        />





        {/* ==================================================
            PROJECT 3
        ================================================== */}

        <ProjectCard
          category="Machine Learning & Full Stack"
          title="PhishGuard AI"
          description="
            An AI-powered web platform designed to analyze URL features
            and classify them as phishing or legitimate using Machine
            Learning algorithms.
          "
          features={list3}
          technologies={[
            "React.js",
            "Django REST APIs",
            "TailwindCSS",
            "MySQL",
            "Scikit-learn",
            "Machine Learning",
          ]}
        />


      </div>

    </section>
  );
}

export default Projects;