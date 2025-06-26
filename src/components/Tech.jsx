import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",  
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1, 
        scrollTrigger: {
          trigger: ".tech-icons-wrapper", 
          start: "top 80%", 
          end: "bottom 70%", 
          scrub: true, 
        },
      }
    );
  }, []);

  return (
    <section>
      {/* --- Added heading and subheading --- */}
      <div className="mb-10 text-center">
        <p className="text-[#b39ddb] text-[16px] uppercase tracking-wider font-semibold">
          Tech Stack & Tools
        </p>
        <h2 className="text-white font-black text-[32px] sm:text-[40px]">
          Technologies I Use
        </h2>
        <p className="text-secondary text-[16px] mt-2">
          These are the languages, frameworks, and tools I work with.
        </p>
      </div>
      {/* --- End heading --- */}
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
