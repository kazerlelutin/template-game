export const helloState = () => ({
  count: 5,
});

export const helloActions = (state) => ({
  increment: () => {
    console.count("inc");
    state.count += 1;
  },
  decrement: () => (state.count -= 1),
  upScore: (value) => (state.count += value),
});
