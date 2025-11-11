import StatCounter from '../character/stat-counter';
import CombinedStatCounter from '../character/combined-stat-counter';
import { useNewCharacterStore } from '../../stores/new-character-store';

const StatsStep = () => {
  const update = useNewCharacterStore((state) => state.changeNested);
  const { constitution, endurance, speed, reaction, academics, wisdom } = useNewCharacterStore((state) => state.stats);
  return (
    <>
      <div className='flex justify-center items-center w-full h-fit'>
        <p className='w-fit border px-12 py-3 rounded-sm'>Доступно очков характеристик: 16</p>
      </div>
      <div className='w-full flex flex-row h-fit pt-4 gap-12'>
        <div className='flex flex-col h-fit grow gap-6'>
          <CombinedStatCounter
            leftStat={{
              text: 'Выносливость',
              value: endurance,
              handler: (e) => update('stats', 'endurance', Number(e)),
            }}
            rightStat={{
              text: 'Телосложение',
              value: constitution,
              handler: (e) => update('stats', 'constitution', Number(e)),
            }}
            mode="EDIT"
          />
          <CombinedStatCounter
            leftStat={{
              text: 'Скорость',
              value: speed,
              handler: (e) => update('stats', 'speed', Number(e)),
            }}
            rightStat={{
              text: 'Реакция',
              value: reaction,
              handler: (e) => update('stats', 'reaction', Number(e)),
            }}
            mode='EDIT'
          />
          <CombinedStatCounter
            leftStat={{
              text: 'Академика',
              value: academics,
              handler: (e) => update('stats', 'academics', Number(e)),
            }}
            rightStat={{
              text: 'Мудрость',
              value: wisdom,
              handler: (e) => update('stats', 'wisdom', Number(e)),
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
