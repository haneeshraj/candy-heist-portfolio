export const slide = {
  initial: {
    y: "110%",
    opacity: 0,
  },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.42, 0.02, 0, 0.92],
      delay: 0.1 + i * 0.1,
    },
  }),
};

export const wordAnim = {
  initial: {
    y: "100%",
  },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.43, 0.22, 0.05, 0.96],
      delay: 0.1 + i * 0.05,
    },
  }),
};
