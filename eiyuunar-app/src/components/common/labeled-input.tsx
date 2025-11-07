type LabeledInputProps = {
  label: string;
  value: string;
  placeholder: string;
  handler: (value: string) => void | undefined;
  className: string;
};

const LabeledInput = ({
  label,
  value,
  handler,
  placeholder,
  className,
}: LabeledInputProps) => {
  return (
    <div className={`${className}`}>
      <p className="pb-1 text-sm">{label}</p>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={
          typeof handler !== "undefined"
            ? (e) => handler(e.target.value)
            : () => console.log("ZNN")
        }
        className="text-lg p-2 w-full pl-3.5 focus:outline-0 border rounded-sm placeholder:text-neutral-500"
      />
    </div>
  );
};

export default LabeledInput;
