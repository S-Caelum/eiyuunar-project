type skill = {
  type: "Martial" | "Magic";
  name: string;
};

const someSkills: Array<skill> = [
  { type: "Martial", name: "Секущий выпад" },
  { type: "Martial", name: "Ебучий ирод" },
  { type: "Martial", name: "Блядский хуй" },
  { type: "Magic", name: "Ебическая ракета" },
  { type: "Magic", name: "Ядерный пиздёж" },
  { type: "Magic", name: "Сучий бубнёж" },
];

const CharacterAbilities = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex h-16 gap-3 border-b px-3 py-2">
        <input className="pl-3 grow border h-full bg-[#202020] focus:outline-0" />
        <select className="w-1/4 h-full border" />
        <button className="px-4 border"> D </button>
      </div>
      {someSkills.map(({ name }, id) => {
        return (
          <div className="w-full h-fit border-b px-6 py-4" key={id}>
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default CharacterAbilities;
