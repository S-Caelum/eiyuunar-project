type LabeledInputProps = {
  label: string;
  value: string;
  placeholder: string;
  handler: () => void | undefined;
  className: string;
};

const LabeledInput = ({
  label,
  value,
  handler,
  className,
}: LabeledInputProps) => {
  return (
    <div className={`${className}`}>
      <p className="pb-1 text-sm">{label}</p>
      <input
        type="text"
        placeholder="Nameless Hero"
        value={value}
        onChange={
          typeof handler !== "undefined"
            ? () => handler()
            : () => console.log("ZNN")
        }
        className="text-lg p-2 w-full pl-3.5 focus:outline-0 border rounded-sm placeholder:text-neutral-500"
      />
    </div>
  );
};

export default LabeledInput;
