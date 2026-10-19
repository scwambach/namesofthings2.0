import { accents } from "@styles/palette";

export const Background = ({ allThings }: { allThings: string[] }) => {
  return (
    <div
      className="left-1/2 opacity-[0.09] pointer-events-none fixed z-[-1] w-screen origin-top scale-150 italic"
      style={{
        top: "calc(50% - 50vh)",
        transform: "rotate(-10deg) translate(-50%, -50%) scale(3)",
      }}
    >
      {[...allThings, ...allThings].map((thing, index) => {
        return (
          <span
            style={{
              fontSize: "1rem",
              lineHeight: "1",
              color: accents[index % accents.length],
            }}
            key={thing + index}
          >
            {thing},{" "}
          </span>
        );
      })}
    </div>
  );
};
