const ResourceCounter = ({
  icon,
  className,
  value,
}: {
  icon: string;
  className: string;
  value: number;
}) => {
  return (
    <div className={className}>
      <img className="py-1" src={icon} />
      <p className="">
        {value}/{value}
      </p>
    </div>
  );
};

export default ResourceCounter;
