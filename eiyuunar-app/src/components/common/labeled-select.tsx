import { useEffect, useRef, useState } from 'react';

type LabeledSelectProps<T extends { name: string }> = {
  label: string;
  className: string;
  value: T;
  options: Array<T>;
  isLoading: boolean;
  isError: boolean;
  handler: (option: T) => void;
};

const LabeledSelect = <T extends { name: string }>({
  label,
  value,
  options,
  className,
  isLoading,
  isError,
  handler,
}: LabeledSelectProps<T>) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: T) => {
    handler(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <p className='pb-1 text-sm'>{label}</p>
      <div className='w-full flex flex-col' ref={selectRef}>
        <span onClick={() => setIsOpen(true)} className='text-lg p-2 w-full pl-3.5 border rounded-sm'>
          {isLoading ?
            'Загрузка...'
          : isError ?
            'Ошибка'
          : value.name}
        </span>
        {isOpen && (
          <ul className='absolute top-full left-0 z-10 border border-t-0 rounded-b-sm w-full'>
            {isLoading ?
              <li className='w-full border-b bg-black p-1.5 pl-3.5 last:border-b-0 last:rounded-b-sm hover:bg-neutral-700'>
                ...
              </li>
            : isError ?
              <li className='w-full border-b bg-black p-1.5 pl-3.5 last:border-b-0 last:rounded-b-sm hover:bg-neutral-700'>
                ...
              </li>
            : options.map((value, id) => {
                return (
                  <li
                    key={id}
                    className='w-full border-b bg-black p-1.5 pl-3.5 last:border-b-0 last:rounded-b-sm hover:bg-neutral-700'
                    onClick={() => handleSelect(value)}>
                    {'icon' in value && typeof value.icon === 'string' ?
                      <img src={value.icon} />
                    : ''}
                    {value.name}
                  </li>
                );
              })
            }
          </ul>
        )}
      </div>
    </div>
  );
};

export default LabeledSelect;
