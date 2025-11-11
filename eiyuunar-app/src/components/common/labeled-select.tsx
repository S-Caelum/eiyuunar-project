import { useEffect, useRef, useState } from "react";

type LabeledSelectOption = {
  value: object;
  label: string;
};

type LabeledSelectProps = {
  label: string;
  options: Array<LabeledSelectOption>;
  value: string;
  className: string;
};

const test: Array<LabeledSelectOption> = [
  {
    value: {
      id: "sanofjkbaspfbaioj12312bb",
      name: "Мужской",
    },
    label: "Мужской",
  },
  {
    value: {
      id: "dasgasgasgfasgasbob12ob31o2b51",
      name: "Женский",
    },
    label: "Женский",
  },
];

const LabeledSelect = ({ label, value, className }: LabeledSelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [val, setVal] = useState<string>("Мужской");

  const handleSelect = (label: string, value: object) => {
    setOpen(false);
    setVal(label);
    console.log(value);
  };

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

  return (
    <div className={`relative ${className}`}>
      <p className="pb-1 text-sm">{label}</p>
      <div className="w-full flex flex-col" ref={selectRef}>
        <span
          onClick={() => setOpen(true)}
          className="text-lg p-2 w-full pl-3.5 border rounded-sm"
        >
          {val}
        </span>
        {open && (
          <ul className="absolute top-full left-0 z-10 border border-t-0 rounded-b-sm w-full">
            {test.map(({ label, value }, id) => {
              return (
                <li
                  key={id}
                  className="w-full border-b bg-black p-1.5 pl-3.5 last:border-b-0 last:rounded-b-sm hover:bg-neutral-700"
                  onClick={() => handleSelect(label, value)}
                >
                  {label}
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
