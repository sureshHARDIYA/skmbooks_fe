const Spinner = () => {
  return (
    <div
      className="w-1 h-1 rounded-full animate-spin"
      style={{
        color: "#25b09b",
        boxShadow: `
          22px 0px 0 0,
          15.56px 15.56px 0 1px,
          0px 22px 0 2px,
          -15.56px 15.56px 0 3px,
          -22px 0px 0 4px,
          -15.56px -15.56px 0 5px,
          0px -22px 0 6px
        `,
      }}
    />
  );
};

export default Spinner;
