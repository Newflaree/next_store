import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';


export const ParticlesBG = () => {
  const particlesInit = useCallback(async (engine: any) => {
      await loadSlim( engine );
    }, []);

  return (
    <Particles
      id="tsparticles"
      init={ particlesInit }
      options={{
        background: {
          color: {
            value: "#fff",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -10
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
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
              distance: 70,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#1FBEE8",
          },
          links: {
            color: "#1FBEE8",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 25,
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
        },
        detectRetina: true,
      }}
    />
  );
}
