import SearchBar from "../common/search-bar";

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
      <SearchBar />
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
