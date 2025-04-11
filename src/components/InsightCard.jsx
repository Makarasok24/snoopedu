const InsightCard = ({
    icon,
    count,
    label,
    className,
    iconClassName,
    countClassName,
    labelClassName,
  }) => (
    <div
      className={`h-[110px] border-primary border-1 hover:shadow-md rounded-xl bg-primary flex flex-col p-2 justify-between ${className}`}
    >
      <div className="flex justify-end">
        <div className={`bg-secondary py-1 px-2 rounded ${iconClassName}`}>
          <span className="text-gray-500">{icon}</span>
        </div>
      </div>
      <div className="p-2 text-white">
        <span className={`font-bold text-2xl ${countClassName}`}>{count}</span>
        <span className={`text-md  ${labelClassName}`}>
          {" "}
          {label}
        </span>
      </div>
    </div>
  );
  
  export default InsightCard;