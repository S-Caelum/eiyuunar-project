export type CounterType = {
  name: string;
  value: number;
  ref?: React.RefObject<HTMLDivElement | null>;
};

const StatCounter = ({ name, value, ref }: CounterType) => {
  return (
    <div className="w-full h-fit flex justify-between gap-8 text-md">
      <section ref={ref} className="border flex flex-row gap-3 grow px-4 py-4">
        <p>{name}</p>
        <hr className="grow self-center border rounded-4xl" />
        <p>{value}</p>
      </section>
    </div>
  );
};

export default StatCounter;
