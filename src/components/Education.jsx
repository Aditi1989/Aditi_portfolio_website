import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const EducationCard = ({ index, degree, institute, duration, image }) => {
  const cardRef = React.useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <div className="flex flex-col items-center mt-1">
        {image && (
          <img
            src={image}
            alt={degree}
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
        )}
        <p className="text-white font-bold text-[20px]">{degree}</p>
        <p className="mt-2 text-secondary text-[16px]">{institute}</p>
        <p className="mt-4 text-white text-[14px]">{duration}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <div>
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-items-center`}
      >
        {education.map((item, index) => (
          <EducationCard key={item.degree + item.institute} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");
