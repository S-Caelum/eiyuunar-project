import { useEffect, useRef, useState } from "react";
import type { CounterType } from "./stat-counter";
import StatCounter from "./stat-counter";

export type CombinedStatCounterType = {
  leftStat: CounterType;
  rightStat: CounterType;
};

const CombinedStatCounter = ({
  leftStat,
  rightStat,
}: CombinedStatCounterType) => {
  const lStatRef = useRef<HTMLDivElement>(null);
  const rStatRef = useRef<HTMLDivElement>(null);
  const sumStatRef = useRef<HTMLDivElement>(null);
  const distanceRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    x1: 0,
    x2: 0,
    x3: 0,
    y1: 0,
    y2: 0,
    y3: 0,
    distance: 0,
  });

  useEffect(() => {
    const updatePath = () => {
      if (
        lStatRef.current &&
        rStatRef.current &&
        sumStatRef.current &&
        distanceRef.current
      ) {
        const rect1 = lStatRef.current.getBoundingClientRect();
        const rect2 = rStatRef.current.getBoundingClientRect();
        const rect3 = sumStatRef.current.getBoundingClientRect();
        const distanceRect = distanceRef.current?.getBoundingClientRect();

        // Calculate center points (adjust as needed for specific connection points)
        const x1 = rect1.right;
        const y1 = rect1.top + rect1.height / 2;

        const x2 = rect2.right;
        const y2 = rect2.top + rect2.height / 2;

        const x3 = rect3.left;
        const y3 = rect3.top + rect3.height / 2;

        const distance = (x3 + distanceRect.right) / 2;

        setData({
          x1: x1,
          x2: x2,
          x3: x3,
          y1: y1,
          y2: y2,
          y3: y3,
          distance: distance,
        });
      }
    };
    updatePath(); // Initial path drawing
    window.addEventListener("resize", updatePath); // Update on resize

    return () => {
      window.removeEventListener("resize", updatePath); // Cleanup
    };
  }, []);

  return (
    <div className="w-full h-fit flex justify-between items-center gap-8">
      <section ref={distanceRef} className="w-9/12 flex flex-col gap-3">
        <StatCounter
          name={leftStat.name}
          value={leftStat.value}
          ref={lStatRef}
        />
        <StatCounter
          name={rightStat.name}
          value={rightStat.value}
          ref={rStatRef}
        />
      </section>
      <section className="h-20 w-20">
        <div
          ref={sumStatRef}
          className="border w-full text-2xl leading-19 text-center rounded-sm h-full"
        >
          <p className="w-full h-full">{leftStat.value + rightStat.value}</p>
        </div>
      </section>
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
        }}
      >
        <line
          x1={data.x1}
          x2={data.distance}
          y1={data.y1}
          y2={data.y1}
          stroke="white"
          strokeWidth={1}
          fill="none"
        />
        <line
          x1={data.x2}
          x2={data.distance}
          y1={data.y2}
          y2={data.y2}
          stroke="white"
          strokeWidth={1}
          fill="none"
        />
        <line
          x1={data.distance}
          x2={data.distance}
          y1={data.y1}
          y2={data.y2}
          stroke="white"
          strokeWidth={1}
          fill="none"
        />
        <line
          x1={data.distance}
          x2={data.x3}
          y1={data.y3}
          y2={data.y3}
          stroke="white"
          strokeWidth={1}
          fill="none"
        />
      </svg>
    </div>
  );
};

export default CombinedStatCounter;
