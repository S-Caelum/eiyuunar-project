import StatCounter from '../character/stat-counter';
import CombinedStatCounter from '../character/combined-stat-counter';
import { useEffect, useState } from 'react';
import { useNewCharacterStore, type ObjectKeys, type NewCharacterStore } from '../../stores/new-character-store';

const StatsStep = () => {
  const BASE_POINTS = 16;
  const update = useNewCharacterStore((state) => state.changeNested);
  const { constitution, endurance, speed, reaction, academics, wisdom } = useNewCharacterStore((state) => state.stats);
  const [points, setPoints] = useState(4);
  const [sum, setSum] = useState(12);

  useEffect(() => {
    setSum(constitution + endurance + speed + reaction + academics + wisdom);
  }, [constitution, endurance, speed, reaction, academics, wisdom]);

  useEffect(() => {
    setPoints(BASE_POINTS - sum);
  }, [sum]);

  const handler = <K extends ObjectKeys<NewCharacterStore>, T extends keyof NewCharacterStore[K]>(
    key: K,
    nest: T,
    value: NewCharacterStore[K][T],
  ) => {
    update(key, nest, value);
  };

  return (
    <>
      <div className='flex justify-center items-center w-full h-fit'>
        <p className='w-fit border px-12 py-3 rounded-sm'>Доступно очков характеристик: {points}</p>
      </div>
      <div className='w-full flex flex-row h-fit pt-4 gap-12'>
        <div className='flex flex-col h-fit grow gap-6'>
          <CombinedStatCounter
            leftStat={{
              text: 'Выносливость',
              value: endurance,
              handler: (e) => handler('stats', 'endurance', e),
            }}
            rightStat={{
              text: 'Телосложение',
              value: constitution,
              handler: (e) => handler('stats', 'constitution', e),
            }}
            mode='EDIT'
          />
          <CombinedStatCounter
            leftStat={{
              text: 'Скорость',
              value: speed,
              handler: (e) => handler('stats', 'speed', e),
            }}
            rightStat={{
              text: 'Реакция',
              value: reaction,
              handler: (e) => handler('stats', 'reaction', e),
            }}
            mode='EDIT'
          />
          <CombinedStatCounter
            leftStat={{
              text: 'Академика',
              value: academics,
              handler: (e) => handler('stats', 'academics', e),
            }}
            rightStat={{
              text: 'Мудрость',
              value: wisdom,
              handler: (e) => handler('stats', 'wisdom', e),
            }}
            mode='EDIT'
          />
        </div>
        <div className='flex flex-col h-fit w-5/12 gap-5'>
          <StatCounter name='Харизма' value={2} />
          <StatCounter name='Харизма' value={2} />
          <StatCounter name='Харизма' value={2} />
          <StatCounter name='Харизма' value={2} />
          <StatCounter name='Харизма' value={2} />
          <StatCounter name='Харизма' value={2} />
        </div>
      </div>
    </>
  );
};

export default StatsStep;
