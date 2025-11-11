import type { JSX } from "react";
import { useEffect, useState } from "react";
import GeneralStep from "../components/new-character/general-step";
import StatsStep from "../components/new-character/stats-step";

export default function NewCharacter() {
  const [activeStep, setActiveStep] = useState(0);
  const [prevButton, setPrevButton] = useState("Сброс");
  const [nextButton, setNextButton] = useState("Далее");
  const creationSteps: Array<JSX.Element> = [<GeneralStep />, <StatsStep />];

  useEffect(() => {
    if (activeStep === 0) setPrevButton("Сброс");
    if (activeStep > 0) setPrevButton("Назад");
    if (activeStep + 1 === creationSteps.length) setNextButton("Создать");
    else setNextButton("Далее");
  }, [activeStep]);

  const changeStepHandler = (index: number) => {
    if (index > creationSteps.length) return;
    if (index < 0) return;
    else setActiveStep(index);
  };
  return (
    <div className="screen-scroll-container justify-center items-center flex flex-col font-[PlexMono]">
      <div className="w-3/6 h-5/6 border flex flex-col gap-8 rounded-md">
        <h1 className="py-8 px-9 h-fit text-4xl border">NEW CHARACTER</h1>
        <section className="flex flex-col grow px-8 gap-6 transition-all">
          {creationSteps[activeStep]}
        </section>
        <section className="w-full h-fit flex items-center px-8 pb-8 justify-between">
          <button
            className="w-1/3 h-12 border rounded-sm"
            onClick={() => {
              if (activeStep < 1) console.log("dasda");
              else changeStepHandler(activeStep - 1);
            }}
          >
            {prevButton}
          </button>
          <div className="w-1/3 flex gap-4 justify-center items-center h-12">
            {creationSteps.map((zalypaEbanaya, id) => {
              return (
                <span
                  key={id}
                  className={`${zalypaEbanaya} w-3 h-3 rounded-full bg-neutral-500 ${id === activeStep ? "bg-white/80" : "bg-black"} transition-colors duration-200`}
                />
              );
            })}
          </div>
          <button
            className="w-1/3 h-12 border rounded-sm"
            onClick={() => {
              if (activeStep + 1 < creationSteps.length)
                changeStepHandler(activeStep + 1);
            }}
          >
            {nextButton}
          </button>
        </section>
      </div>
    </div>
  );
}
