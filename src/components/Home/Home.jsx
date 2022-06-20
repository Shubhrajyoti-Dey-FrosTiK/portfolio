import React, { useCallback, useState, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { TSPARTICLES_OPTIONS } from "../../tsparticles.options";
// import AnimatedText, { MovingComponent } from "react-animated-text-content";
import Gradient from "rgt";
import styles from "./Home.module.css";
import FadeIn from "react-fade-in";
import Face from "../../assets/face.jpg";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home(props) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          THREE: THREE,
          color: "rgb(0, 223, 216)",
          backgroundColor: 0x0,
          spacing: 20.0,
        })
      );
    }
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy();
    // };
  }, [vantaEffect]);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <CustomCursor
        targets={[".link", "a", ".ProfileButton", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={90}
        fill="#FFF"
        smoothness={{
          movement: 1,
          scale: 1,
          opacity: 0,
        }}
        hoverOpacity={0}
        targetOpacity={0}
        hoverScale={0}
      />
      <div
        ref={myRef}
        className={`text-white absolute z-10 w-[100vw] h-[100vh] text-center ${styles.Home}`}
      >
        <FadeIn transitionDuration={800}>
          <div className={styles.FaceContainer1}>
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "50%",
                padding: "10px",
                height: "100%",
              }}
            >
              <div className={styles.FaceContainer2}>
                <div
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                >
                  <img className={styles.FaceImg} src={Face} />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn transitionDuration={800}>
          <p style={{ fontWeight: "100", letterSpacing: "2px" }}>
            👋 Hi everyone, I am{" "}
          </p>
          <h1 className={styles.NameText}>Shubhrajyoti Dey</h1>
          <div>
            <h2 className={styles.Designation}>
              <Typewriter
                loop={0}
                delaySpeed={2000}
                words={[
                  "FRONTEND DEVELOPER",
                  "BACKEND DEVELOPER",
                  "FULL STACK DEVELOPER",
                  "SOFTWARE DEVELOPER",
                  "AUTOMATION",
                ]}
                cursorStyle="_"
              />
            </h2>
          </div>
          <div className={`${styles.ProfileButton} ProfileButton`}>
            <a>GO TO PROFILE</a>
          </div>
        </FadeIn>
      </div>
      <div className="h-[100vh]">
        {/* <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={TSPARTICLES_OPTIONS}
        /> */}
      </div>
    </>
  );
}
