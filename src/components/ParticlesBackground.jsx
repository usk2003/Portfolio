import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },  // ⭐ cursor connects to dots
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.5 },
            },
          },
        },
        particles: {
          number: { value: 80 },
          color: { value: "#c9c9c9" },
          links: {
            enable: true,
            distance: 150,
            color: "#aaaaaa",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" },
          },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
