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
      <p className="text-[13px]">
        <strong className="uppercase tracking-wider text-xs text-[#555555]">
          {title}:
        </strong>{" "}
        {value}
      </p>
    </div>
  );
};
