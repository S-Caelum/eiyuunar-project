import ResourceCounter from "../components/character/resource-counter";
import Health from "../../public/icons/hp.svg";
import Mana from "../../public/icons/mp.svg";

import CombinedStatCounter from "../components/character/combined-stat-counter";
import type { CombinedStatCounterType } from "../components/character/combined-stat-counter";
import Parameter from "../components/character/parameter";

const shit: CombinedStatCounterType = {
  leftStat: { name: "Телосложение", value: 2 },
  rightStat: { name: "Выносливость", value: 2 },
};

export default function Character() {
  return (
    <div className="screen-scroll-container flex flex-col font-[PlexMono]">
      <div className="screen-scroll-element flex flex-col gap-4">
        <section className="h-24 border rounded-md flex p-2 gap-3.5 items-center">
          <div className="w-20 h-20 bg-amber-50 rounded-sm"></div>
          <div className="grid grid-rows-2 h-full w-fit max-w-1/2">
            <p className="w-full text-xl leading-8">Nameless Hero</p>
            <div className="flex gap-3.5 w-full">
              <ResourceCounter
                value={2800}
                className="w-fit flex justify-center border px-3 leading-9 text-md gap-2 text-red-400 rounded-sm"
              />{" "}
              <ResourceCounter
                value={2800}
                className="w-fit flex justify-center border px-3 leading-9 text-md gap-2 text-teal-400 rounded-sm"
              />
            </div>
          </div>
          <div className="w-fit gap-3.5 flex h-full ml-1">
            <Parameter name="Защита" values={[{ value: 3 }, { value: 3 }]} />
            <Parameter name="Защита" values={[{ value: 3 }, { value: 3 }]} />
            <Parameter name="Защита" values={[{ value: 3 }, { value: 12 }]} />
            <Parameter name="Защита" values={[{ value: 3 }, { value: 3 }]} />
            <Parameter name="Защита" values={[{ value: 3 }, { value: 3 }]} />
          </div>
        </section>
        <div className="grow rounded-md flex flex-col 2xl:flex-row gap-4">
          <div className="h-full w-full 2xl:w-1/2 flex flex-row gap-4">
            <section className="w-1/2 p-4 border flex flex-col gap-4 rounded-md">
              <CombinedStatCounter
                leftStat={shit.leftStat}
                rightStat={shit.rightStat}
              />
              <CombinedStatCounter
                leftStat={shit.leftStat}
                rightStat={shit.rightStat}
              />
              <CombinedStatCounter
                leftStat={shit.leftStat}
                rightStat={shit.rightStat}
              />
            </section>
            <section className="w-1/2 border rounded-md"></section>
          </div>
          <section className="w-full 2xl:w-1/2 border" />
        </div>
      </div>
    </div>
  );
}
