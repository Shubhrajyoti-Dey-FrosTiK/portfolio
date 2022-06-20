export const TSPARTICLES_OPTIONS = {
  background: {
    color: {
      value: "#000000",
    },
  },
  canvas: {
    height: "90vh",
  },
  fpsLimit: 200,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.1,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 2,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 8090,
      },
      value: 1800,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
    repulse: {
      distance: 10,
      duration: 1,
      speed: 0.2,
    },
  },
  detectRetina: false,
};
