const ResourceCounter = ({
  icon,
  className,
  value,
}: {
  icon: string | undefined;
  className: string;
  value: number | undefined;
}) => {
  return (
    <div className={className}>
      {typeof icon !== "undefined" ? <img alt="RS:" src={icon} /> : <>RS:</>}
      {typeof value !== "undefined" ? (
        <p className="font-light w-full">
          {value}/{value}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ResourceCounter;
