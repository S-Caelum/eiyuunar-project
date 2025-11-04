import useCharacter from "../../stores/character-store";

export type CounterType = {
  name: string;
  value: number;
  modifiable: boolean;
  ref?: React.RefObject<HTMLDivElement | null>;
};

const StatCounter = ({ name, value, ref, modifiable }: CounterType) => {
  const mode = useCharacter((state) => state.modifiable);
  return (
    <div className="w-full h-fit flex justify-between gap-8 text-md">
      <section
        ref={ref}
        className="border flex flex-row gap-3 grow px-3.5 py-2.5 rounded-sm leading-6"
      >
        <p>{name}</p>
        <hr className="grow ml-3 self-center border rounded-4xl" />
        <input
          type="number"
          value={value}
          className={`w-8 text-center focus:outline-0 ${mode === true && modifiable === true ? "shadow-[0_1px_0_white]" : "shadow-none"} transition-all duration-300 delay-100`}
          disabled={mode === true && modifiable === true ? false : true}
        />
      </section>
    </div>
  );
};

export default StatCounter;
