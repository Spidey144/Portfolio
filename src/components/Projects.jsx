import React from 'react';

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-purple-400 text-purple-400">
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

      <p className="text-gray-200 leading-relaxed">{children}</p>
    </li>
  );
}

function CheckCardList({ list }) {
  return (
    <ul className="space-y-2 p-2 ms-4 text-xs">
      {list.map((text, i) => (
        <CheckItem key={i}>{text}</CheckItem>
      ))}
    </ul>
  );
}

const list = [
  'Developed full-stack web application using Django REST Framework and React.js.',
  'Implemented user authentication, registration, login, and secure session handling.',
  'Designed REST APIs to connect frontend and backend components.',
  'Built ticket search, booking, cancellation, and CRUD functionality.',
];

const list2 = [
  'Built a machine-learning web application to classify URLs as phishing or legitimate using URL.',
  'Implemented tokenization, stemming, CountVectorizer, and multiple ML models for URL classification.',
  'Developed Django REST APIs and a React frontend with URL scanning, confidence-based predictions, risk analysis, and scan history.',
  'Integrated MySQL to store URL scan results.',
];

function Projects() {
  return (
    <section id="projects">

      <div className="bg-gray-900 min-h-screen h-290">

        {/* Wave */}
        <div className="bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1438 320"
          >
            <path
              fill="#111827"
              fillOpacity="1"
              d="M0,32L60,74.7C120,117,240,203,360,213.3C480,224,600,160,720,144C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            />
          </svg>

          {/* Heading */}
          <p className="text-center bg-[#111827] text-white text-5xl font-black tracking-tight">
            <span className="text-red-500/70 tracking-tight text-4xl">
              #3
            </span>{' '}
            Projects
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto my-20 grid max-w-5xl grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">

          {/* ================= CARD 1 ================= */}
          <div data-aos="fade-left" data-aos-delay="200">

            <div className="flex h-full flex-col rounded-xl bg-gray-800 ring ring-indigo-500 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-400/30">

              <span className="m-2 inline-flex w-fit items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
                Full Stack Development
              </span>

              <h1 className="ms-3 p-2 text-start text-xl font-semibold">
                Bus Ticket Booking System
              </h1>

              <p className="ms-3 p-2 text-sm">
                A comprehensive, high-fidelity ticket reservation platform
                featuring robust seat layouts, real-time ticket searching,
                booking, cancellation, and clean CRUD flows.
              </p>

              {/* List */}
              <CheckCardList list={list} />

              {/* Badges */}
              <div className="px-4">

                <span className="m-1 inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  React.js
                </span>

                <span className="m-1 inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  Django
                </span>

                <span className="m-1 inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  REST APIs
                </span>

                <span className="m-1 inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  My SQL
                </span>

                <span className="m-1 inline-flex items-center gap-x-1.5 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  TailwindCSS
                </span>

              </div>

              {/* Bottom Section */}
              <div className="mt-auto">

                <hr className="mx-auto my-4 w-[calc(100%-2rem)] text-indigo-400" />

                <div className="flex justify-center gap-4 pb-5">

                  {/* Repository */}
                  <a
                    className="inline-flex w-32 items-center justify-center gap-1 rounded-md bg-indigo-400/10 px-2 py-2 inset-ring inset-ring-indigo-400 transition-all duration-500 ease-in-out hover:scale-90"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>

                    Repository
                  </a>

                  {/* Live Demo */}
                  <a
                    className="inline-flex w-32 items-center justify-center gap-2 rounded-md bg-indigo-600 px-2 py-2 inset-ring inset-ring-indigo-600 transition-all duration-500 ease-in-out hover:scale-90"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
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

                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          </div>


          {/* ================= CARD 2 ================= */}
          <div data-aos="fade-left" data-aos-delay="200">

            <div className="flex h-full flex-col rounded-xl bg-gray-800 ring ring-indigo-500 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-400/30">

              <span className="m-2 inline-flex w-fit items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 inset-ring inset-ring-blue-400/30">
                Machine Learning & Full Stack
              </span>

              <h1 className="ms-3 p-2 text-start text-xl font-semibold">
                PhishGuard AI
              </h1>

              <p className="ms-3 p-2 text-sm">
                An AI-powered web platform designed to analyze URL features
                and classify them as phishing or legitimate using Machine
                Learning algorithms.
              </p>

              {/* List */}
              <CheckCardList list={list2} />

              {/* Badges */}
              <div className="px-4">

                <span className="m-1 inline-flex items-center gap-x-1 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  React.js
                </span>

                <span className="m-1 inline-flex items-center gap-x-1 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  Django REST APIs
                </span>

                <span className="m-1 inline-flex items-center gap-x-1 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  TailwindCSS
                </span>

                <span className="m-1 inline-flex items-center gap-x-1 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  My SQL
                </span>

                <span className="m-1 inline-flex items-center gap-x-1 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  Scikit-learn
                </span>

                <span className="m-1 inline-flex items-center gap-x-1 rounded-lg bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 inset-ring inset-ring-indigo-400/30">
                  <span className="inline-block size-1.5 rounded-full bg-blue-800 dark:bg-blue-400"></span>
                  Machine Learning
                </span>

              </div>

              {/* Bottom Section */}
              <div className="mt-auto">

                <hr className="mx-auto my-4 w-[calc(100%-2rem)] text-indigo-400" />

                <div className="flex justify-center gap-4 pb-5">

                  {/* Repository */}
                  <a
                    className="inline-flex w-32 items-center justify-center gap-1 rounded-md bg-indigo-400/10 px-2 py-2 inset-ring inset-ring-indigo-400 transition-all duration-500 ease-in-out hover:scale-90"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38-.01-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>

                    Repository
                  </a>

                  {/* Live Demo */}
                  <a
                    className="inline-flex w-32 items-center justify-center gap-2 rounded-md bg-indigo-600 px-2 py-2 inset-ring inset-ring-indigo-600 transition-all duration-500 ease-in-out hover:scale-90"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
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

                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;