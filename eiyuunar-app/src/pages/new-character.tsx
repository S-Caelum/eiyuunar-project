import LabeledInput from "../components/common/labeled-input";
import LabeledComboBox from "../components/common/labeled-combobox";
import { useNewCharacterStore } from "../stores/new-character-store";

export default function NewCharacter() {
  const { name, alias, race, gender, birthday, description } =
    useNewCharacterStore();
  const changehandler = useNewCharacterStore((state) => state.changeParam);
  return (
    <div className="screen-scroll-container justify-center items-center flex flex-col font-[PlexMono]">
      <div className="w-3/6 h-5/6 border flex flex-col gap-6 rounded-md">
        <h1 className="py-8 px-9 h-fit text-4xl border">NEW CHARACTER</h1>
        <section className="flex flex-col grow px-8 pb-8 gap-6">
          <div className="flex gap-8">
            <LabeledInput
              label="Имя персонажа"
              value={name}
              placeholder="Давид Градинарь"
              className="grow"
              handler={(value) => changehandler("name", value)}
            />
            <LabeledInput
              label="Титул персонажа"
              value={alias}
              placeholder="Гроза фонарей"
              className="grow"
              handler={(value) => changehandler("alias", value)}
            />
          </div>
          <div className="flex gap-8">
            <LabeledComboBox
              label="Пол"
              placeholder="Мужской"
              className="grow"
            />
            <LabeledComboBox
              label="Раcа"
              placeholder="Чёрт ебаный"
              className="grow"
            />
            <LabeledInput
              label="Дата рождения"
              value={birthday}
              placeholder="В неурожайный год"
              className="grow"
            />
          </div>
          <div className="grow h-full flex flex-col">
            <p className="pb-1 text-sm">Описание персонажа</p>
            <textarea
              className="grow h-full border placeholder:text-neutral-500 rounded-sm px-4 py-3 focus:outline-0"
              placeholder="Наплачь своего говна от души"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
