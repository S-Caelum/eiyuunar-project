export type CounterType = {
  name: string;
  value: number;
};

const StatCounter = ({ name, value }: CounterType) => {
  return (
    <div className="w-full h-fit flex justify-between gap-8 text-md">
      <section className="border flex flex-row gap-3 grow px-5 py-2.5 rounded-sm leading-6">
        <p>{name}</p>
        <hr className="grow mx-2 self-center border rounded-4xl" />
        <p>{value}</p>
      </section>
    </div>
  );
};

export default StatCounter;
