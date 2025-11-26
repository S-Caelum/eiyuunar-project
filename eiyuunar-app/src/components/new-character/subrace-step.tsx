import { useState } from 'react';

const SubraceStep = () => {
  const races = ['dsa', 'fsa'];
  const [selectedRace, setSelectedRace] = useState(0);

  return (
    <>
      <h2 className='text-lg p-0'>Выберите расу</h2>
      <div className='w-full h-full border rounded-sm overflow-y-scroll'>
        {races.map((race, id) => {
          return (
            <div className='flex flex-col max-h-1/2 overflow-hidden'>
              <div
                onClick={() => setSelectedRace(id)}
                key={id}
                className='flex border p-3.5 px-4 justify-between items-center'>
                <span
                  className={`w-3.5 h-3.5 rounded-full transition-all delay-50 duration-200 ${selectedRace === id ? 'bg-white' : 'border'}`}
                />
                <p>{race}</p>
              </div>{' '}
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${selectedRace === id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <p className='p-4 overflow-hidden text-wrap wrap-break-word'>dasgasgasga</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubraceStep;
