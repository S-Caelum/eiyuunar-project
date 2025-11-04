import LabeledInput from "../components/common/labeled-input";
import LabeledSelect from "../components/common/labeled-select";

export default function NewCharacter() {
  const genders = ["Male", "Female", "Genderless"];
  return (
    <div className="screen-scroll-container justify-center items-center flex flex-col font-[PlexMono]">
      <div className="w-3/6 h-5/6 border flex flex-col gap-6 rounded-md">
        <h1 className="py-8 px-9 h-fit text-4xl border">NEW CHARACTER</h1>
        <section className="flex flex-col px-8">
          <div className="flex gap-12">
            <LabeledInput
              label="Имя персонажа"
              value=""
              placeholder="Сакаи Сора"
              className="grow"
            />
            <LabeledInput
              label="Прозвище персонажа"
              value=""
              placeholder="Серое Божество"
              className="grow"
            />
          </div>
          <div className="flex gap-8">
            <LabeledSelect label="Пол" options={genders} className="grow" />
          </div>
        </section>
      </div>
    </div>
  );
}
