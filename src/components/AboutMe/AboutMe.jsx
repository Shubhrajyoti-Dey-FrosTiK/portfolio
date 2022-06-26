import React from "react";
import styles from "./AboutMe.module.css";
import Lottie from "react-lottie";
import AboutMeLotte from "../../assets/AboutMe.json";

function AboutMe() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AboutMeLotte,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-full flex items-center">
      <div
        className={`m-auto w-[85%] h-[80%] flex flex-wrap-reverse justify-center items-center`}
      >
        <div className="md:w-[50%] mr-10">
          <p className={`text-[50px] ${styles.AboutMeHeading}`}>About Me !</p>
          <p className="text-white text-2xl md:text-3xl">Hi everyone 👋 !!</p>
          <p className="text-white text-xl md:text-2xl mt-5">
            I am Shubhrajyoti Dey and am currently pursuing my 3rd year of
            Integrated Dual Degree (IDD) in Mathematics and Computing at Indian
            Institute of Technology (BHU), Varanasi.
          </p>
          <p className="text-white text-xl md:text-2xl mt-5">
            I have been on my Web Development journey from 2020 and this gave me
            the power to think beyond boundaries about how to make scalable web
            interfaces. In this period I have completed several internships and
            personal projects which will linked in the later section
          </p>
        </div>
        <div className="hidden md:block">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
