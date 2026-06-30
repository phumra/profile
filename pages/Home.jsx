import React from "react";
import bg_home from "../public/img/bg_01.png";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        style={{
          backgroundImage: `url('${bg_home}')`,
        }}
        className="relative h-screen w-full flex items-start justify-center bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-46">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="space-y-6 text-center md:text-left order-2 md:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-xs font-medium text-indigo-300 tracking-wide uppercase mx-auto md:mx-0">
                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                Resume
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-300">
                Phumrapee Kaesornpaiboon
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-100 font-normal leading-relaxed max-w-xl mx-auto md:mx-0 bg-black px-4 py-2 rounded-lg">
                Web Developer & Mobile Developer focused on 
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 active:scale-98 text-sm text-center"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/10 font-semibold rounded-full backdrop-blur-md transition-all duration-200 active:scale-98 text-sm text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/*  img */}
            <div className="flex justify-center order-1 md:order-2">
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-xl border-4 border-indigo/20 shadow-2xl shadow-indigo-500/30 backdrop-blur-sm hover:scale-105 transition-transform duration-500"
              >
                <img
                  src="./public/img/profile02.jpg"
                  alt="Phumrapee Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aub">
        fdsfsad <br />
        fdsafd <br />
        fdfasdf <br />
        dfsdf <br />
      </section>
    </div>
  );
};

export default Home;
