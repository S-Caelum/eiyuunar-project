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
  const containerRef = useRef<HTMLDivElement>(null);
  const lStatRef = useRef<HTMLDivElement>(null);
  const rStatRef = useRef<HTMLDivElement>(null);
  const sumStatRef = useRef<HTMLDivElement>(null);

  const [lines, setLines] = useState<Array<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }> | null>(null);

  useEffect(() => {
    const updateLines = () => {
      if (
        !containerRef.current ||
        !lStatRef.current ||
        !rStatRef.current ||
        !sumStatRef.current
      ) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const lRect = lStatRef.current.getBoundingClientRect();
      const rRect = rStatRef.current.getBoundingClientRect();
      const sumRect = sumStatRef.current.getBoundingClientRect();

      // Пересчитываем координаты относительно контейнера
      const lCenterX = lRect.left - containerRect.left + lRect.width;
      const lCenterY = lRect.top - containerRect.top + lRect.height / 2;

      const rCenterX = rRect.left - containerRect.left + rRect.width;
      const rCenterY = rRect.top - containerRect.top + rRect.height / 2;

      const sumCenterX = sumRect.left - containerRect.left;
      const sumCenterY = sumRect.top - containerRect.top + sumRect.height / 2;

      // Средняя точка для соединения
      const midX = (Math.max(lCenterX, rCenterX) + sumCenterX) / 2;

      // Создаем линии для древовидной структуры
      const newLines = [
        // От левого счетчика до средней вертикали
        { x1: lCenterX, y1: lCenterY, x2: midX, y2: lCenterY },
        // От правого счетчика до средней вертикали
        { x1: rCenterX, y1: rCenterY, x2: midX, y2: rCenterY },
        // Вертикальная соединительная линия
        { x1: midX, y1: lCenterY, x2: midX, y2: rCenterY },
        // От средней точки до суммарного счетчика
        { x1: midX, y1: sumCenterY, x2: sumCenterX, y2: sumCenterY },
      ];

      setLines(newLines);
    };

    // Задержка для гарантии отрисовки DOM
    const timeoutId = setTimeout(updateLines, 0);

    const observer = new ResizeObserver(updateLines);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", updateLines);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("resize", updateLines);
    };
  }, [leftStat.value, rightStat.value]); // Обновляем при изменении значений
  return (
    <div
      ref={containerRef}
      className="w-full h-fit flex justify-between items-center gap-4 relative"
    >
      <section className="w-9/12 flex flex-col gap-3">
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
      <section className="h-16 w-16">
        <div
          ref={sumStatRef}
          className="border w-full text-xl leading-16 text-center rounded-sm h-full"
        >
          <p className="w-full h-full">{leftStat.value + rightStat.value}</p>
        </div>
      </section>
      {/* SVG с линиями - теперь относительно контейнера */}
      {lines && (
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        >
          {lines.map((line, index) => (
            <line
              strokeDasharray={100}
              strokeDashoffset={100}
              className="animate-draw"
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="white"
              strokeWidth={1}
              fill="none"
            />
          ))}
        </svg>
      )}
    </div>
  );
};

export default CombinedStatCounter;
