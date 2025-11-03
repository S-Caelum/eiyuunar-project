type ParameterValue = {
  icon: string | undefined;
  value: number;
};

type ParameterType = {
  name: string | undefined;
  values: Array<ParameterValue>;
};

const Parameter = ({ name, values }: ParameterType) => {
  return (
    <div className="h-full w-fit border rounded-sm grid grid-rows-2 px-3 gap-1">
      <p className="row-auto text-md leading-12 text-center">
        {typeof name !== "undefined" ? name : "COCITE"}{" "}
      </p>
      <div className="flex gap-2 justify-center row-auto">
        {values.map(({ icon, value }, id) => {
          return (
            <div key={id} className="flex gap-2">
              {icon !== "" ? <img src={icon} /> : <p>IC</p>}
              <p className="leading-6"> — </p>
              <p>{value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Parameter;
