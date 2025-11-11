import { useNewCharacterStore } from "../../stores/new-character-store";
import LabeledInput from "../common/labeled-input";
import LabeledSelect from "../common/labeled-select";

const GeneralStep = () => {
  const { name, alias, race, gender, birthday, description } =
    useNewCharacterStore();
  const changeHandler = useNewCharacterStore((state) => state.changeParam);
  return (
    <>
      <div className="flex gap-8">
        <LabeledInput
          label="Имя персонажа"
          value={name}
          placeholder="Давид Градинарь"
          className="grow"
          handler={(value) => changeHandler("name", value)}
        />
        <LabeledInput
          label="Титул персонажа"
          value={alias}
          placeholder="Гроза фонарей"
          className="grow"
          handler={(value) => changeHandler("alias", value)}
        />
      </div>
      <div className="flex gap-8">
        <LabeledSelect label="Пол" className="w-full" />
        <LabeledSelect label="Раcа" className="w-full" />
        <LabeledInput
          label="Дата рождения"
          value={birthday}
          placeholder="В неурожайный год"
          className="w-full"
          handler={(value) => changeHandler("birthday", value)}
        />
      </div>
      <div className="grow h-full flex flex-col">
        <p className="pb-1 text-sm">Описание персонажа</p>
        <textarea
          className="grow h-full border placeholder:text-neutral-500 rounded-sm px-4 py-3 focus:outline-0"
          placeholder="Наплачь своего говна от души"
          value={description}
          onChange={(e) => changeHandler("description", e.target.value)}
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default GeneralStep;
