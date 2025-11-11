import { useEffect, useRef, useState } from 'react';

type Stat = {
  text: string;
  value: number;
  handler: (e: number) => void;
};

type CombinedStatCounterProps = {
  leftStat: Stat;
  rightStat: Stat;
  mode: 'VIEW' | 'EDIT';
};

const CombinedStatCounter = ({ leftStat, rightStat, mode }: CombinedStatCounterProps) => {
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
      if (!containerRef.current || !lStatRef.current || !rStatRef.current || !sumStatRef.current) {
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

    window.addEventListener('resize', updateLines);

    const safel = leftStat.value ?? 0;
    const safer = rightStat.value ?? 0;
    setSum(Number(safel) + Number(safer));

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener('resize', updateLines);
    };
  }, [leftStat.value, rightStat.value]); // Обновляем при изменении значений

  const [sum, setSum] = useState(leftStat.value + rightStat.value);
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    handler: (val: number) => void,
  ) => {
    const v = e.target.value;
    if (!isNaN(Number(v)) && typeof v !== 'undefined') {
      handler(Number(v));
    }
  };

  return (
    <div
      ref={containerRef}
      className='w-full h-fit flex justify-between items-center gap-4 relative'>
      <section className='w-9/12 flex flex-col gap-3'>
        <div className='w-full h-fit flex flex-col justify-between gap-4 text-md'>
          <section
            ref={lStatRef}
            className='border flex flex-row gap-3 grow pl-4 px-3.5 py-2.5 rounded-sm leading-6'>
            <p>{leftStat.text}</p>
            <hr className='grow ml-1 self-center border rounded-sm' />
            <input
              type='text'
              value={leftStat.value}
              onChange={(e) => changeHandler(e, leftStat.handler)}
              className={`w-8 text-center focus:outline-0 ${mode === 'EDIT' ? 'shadow-[0_1px_0_white]' : 'shadow-none'} transition-all duration-300 delay-100`}
              disabled={mode === 'EDIT' ? false : true}
            />
          </section>

          <section
            ref={rStatRef}
            className='border flex flex-row gap-3 grow pl-4 px-3.5 py-2.5 rounded-sm leading-6'>
            <p>{rightStat.text}</p>
            <hr className='grow ml-1 self-center border rounded-sm' />
            <input
              type='text'
              value={rightStat.value}
              onChange={(e) => changeHandler(e, rightStat.handler)}
              className={`w-8 text-center focus:outline-0 ${mode === 'EDIT' ? 'shadow-[0_1px_0_white]' : 'shadow-none'} transition-all duration-300 delay-100`}
              disabled={mode === 'EDIT' ? false : true}
            />
          </section>
        </div>
      </section>
      <section className='h-14 w-14'>
        <div
          ref={sumStatRef}
          className='border w-full text-xl leading-14 text-center rounded-sm h-full'>
          <p className='w-full h-full'>{sum}</p>
        </div>
      </section>
      {/* SVG с линиями - теперь относительно контейнера */}
      {lines && (
        <svg
          className='absolute top-0 left-0 w-full h-full pointer-events-none'
          style={{ zIndex: 0 }}>
          {lines.map((line, index) => (
            <line
              strokeDasharray={100}
              strokeDashoffset={100}
              className='animate-draw'
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke='white'
              strokeWidth={1}
              fill='none'
            />
          ))}
        </svg>
      )}
    </div>
  );
};

export default CombinedStatCounter;
