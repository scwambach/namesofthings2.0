export const ItemDetail = ({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <p
        className="text-black"
        style={{
          fontSize: "0.8rem",
        }}
      >
        <strong
          className="font-bold"
          style={{
            fontSize: "0.8rem",
          }}
        >
          {title}:
        </strong>{" "}
        {value}
      </p>
    </div>
  );
};
