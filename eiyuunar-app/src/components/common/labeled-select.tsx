import { useEffect, useRef, useState } from "react";

type LabeledSelectOption = {
  value: object;
  label: string;
  description: string | undefined;
};

type LabeledSelectProps = {
  label: string;
  options: Array<LabeledSelectOption>;
  value: string;
  className: string;
  placeholder: string;
};

const lol = ["Dasda", "dasdas", "dsadas", "gasgas"];

const LabeledSelect = ({
  label,
  className,
  placeholder,
}: LabeledSelectProps) => {
  const selectRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleFocus = () => {
    setOpen(true);
  };
  const handleSelect = (value: string) => {
    console.log(`Selected ${value}`);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <p className="pb-1 text-sm">{label}</p>
      <div className="w-full flex flex-col" ref={selectRef}>
        <input
          type="text"
          placeholder={placeholder}
          onFocus={handleFocus}
          className="text-lg p-2 w-full pl-3.5 focus:outline-none border rounded-sm placeholder:text-neutral-500"
        />
        {open && (
          <ul className="absolute top-full left-0 z-10 border border-t-0 w-full">
            {lol.map((val, id) => {
              return (
                <li
                  key={id}
                  className="w-full border-b p-1.5 pl-3.5 last:border-b-0 hover:bg-neutral-700"
                  onClick={() => handleSelect(val)}
                >
                  {val}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LabeledSelect;
