import React from "react";

function About() {
  return (
    <section className="flex flex-col p-14 w-6/12 bg-white rounded-2xl gap-y-4 h-5/6 overflow-y-scroll no-scrollbar">
      <div>
        <div className="text-3xl font-semibold">About Me</div>
        <div></div>
      </div>
      <div className="text-base">
        II'm a passionate developer driven by the challenge of crafting elegant
        solutions to complex problems. My diverse skillset, encompassing
        languages like C++ and JavaScript, frameworks like React.js and Node.js,
        and databases (MongoDB & SQL), allows me to tackle projects from
        conception to deployment. I leverage containerization with Docker for
        efficient scaling and DevOps tools (Git, GitHub, GitLab) for seamless
        collaboration. Adept in both Windows and Linux environments, I'm a
        versatile developer eager to contribute to innovative and impactful
        projects.
      </div>
      <div>
        <div className="text-2xl font-semibold"> What I do!</div>
      </div>
      <div className="grid grid-cols-2 gap-2 justify-center items-center">
        <div className=" bg-orange-200 rounded-2xl p-5">
          <div>
            <div></div>
            <div className="font-semibold">Web Development</div>
          </div>
          <div className="text-sm">
            Elevating your online presence, I specialize in crafting dynamic and
            responsive websites using leading web frameworks like Django and
            Flask. From sleek user interfaces to robust backend systems, I bring
            your digital vision to life with expertise in technologies such as
            Django Rest Framework, FastAPI, and Flask Restx.
          </div>
        </div>
        <div className=" bg-blue-200 rounded-2xl p-5">
          <div className=" ">
            <div className="">{/* <Gear fill="" /> */}</div>
            <div className=" font-semibold">Automation</div>
          </div>
          <div className="text-sm">
            Streamlining operations with a touch of magic, I leverage automation
            to eliminate repetitive tasks, optimize data pipelines, and
            orchestrate complex workflows. From backend processes to intricate
            task management, my automation solutions enhance efficiency,
            allowing you to focus on strategic priorities.
          </div>
        </div>
        <div className=" bg-blue-200 rounded-2xl p-5">
          <div className="">
            <div className=""></div>
            <div className="font-semibold">Scripting</div>
          </div>
          <div className="text-sm">
            Tailoring scripting solutions to your needs, I harness the
            flexibility of Python to create powerful, customized tools. Whether
            it's quick data manipulations, intricate system configurations, or
            automating routine tasks, my scripts are designed for efficiency and
            enhanced productivity.
          </div>
        </div>

        <div className=" bg-orange-200 rounded-2xl p-5">
          <div className=" ">
            <div className=""></div>
            <div className=" font-semibold">Web Scraping</div>
          </div>
          <div className="text-sm">
            Unleashing the power of web scraping, I extract valuable data from
            online sources to fuel your decision-making processes. Specializing
            in precision scraping techniques, I navigate the web's vast
            landscape to provide accurate and actionable insights, from
            competitor analysis to market research.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
