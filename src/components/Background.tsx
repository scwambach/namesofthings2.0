export const Background = ({ allThings }: { allThings: string[] }) => {
  return (
    <div
      className="left-1/2 opacity-[0.07] pointer-events-none fixed top-1/2  z-[-1] w-screen origin-top scale-150"
      style={{
        transform: "rotate(-10deg) translate(-50%, -50%) scale(3)",
      }}
    >
      {allThings.map((thing, index) => {
        const colors = ["text-red-700", "text-green-900", "text-blue-900"];

        return (
          <span
            className={colors[index % colors.length]}
            style={{
              fontSize: "1rem",
              lineHeight: "1",
            }}
            key={thing}
          >
            {thing},{" "}
          </span>
        );
      })}
    </div>
  );
};