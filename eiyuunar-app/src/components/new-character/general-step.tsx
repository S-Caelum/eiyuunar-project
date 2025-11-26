import { useQuery } from '@tanstack/react-query';
import { useNewCharacterStore } from '../../stores/new-character-store';
import LabeledInput from '../common/labeled-input';
import LabeledSelect from '../common/labeled-select';
import type { Gender } from '../../types/character';

const getGenders = async (): Promise<Array<Gender>> => {
  const genders = await fetch('http://localhost:3000/api/gender', {
    method: 'GET',
  });
  const data = genders.json();
  return data;
};

const GeneralStep = () => {
  const { name, alias, gender, birthday, description } = useNewCharacterStore();
  const update = useNewCharacterStore((state) => state.changeParam);

  const genders = useQuery({
    queryKey: ['gender'],
    staleTime: 1000 * 60 * 60 * 24 * 14,
    queryFn: async () => await getGenders(),
  });

  return (
    <>
      <div className='flex gap-8'>
        <LabeledInput
          label='Имя персонажа'
          value={name}
          placeholder='Давид Градинарь'
          className='grow'
          handler={(value) => update('name', value)}
        />
        <LabeledInput
          label='Титул персонажа'
          value={alias}
          placeholder='Гроза фонарей'
          className='grow'
          handler={(value) => update('alias', value)}
        />
      </div>
      <div className='flex gap-8'>
        <LabeledSelect<Gender>
          label='Пол'
          className='w-full'
          value={gender}
          options={genders.data!}
          isLoading={genders.isLoading}
          isError={genders.isError}
          handler={(option) => update('gender', option)}
        />
        <LabeledInput
          label='Дата рождения'
          value={birthday}
          placeholder='В неурожайный год'
          className='w-full'
          handler={(value) => update('birthday', value)}
        />
      </div>
      <div className='grow h-full flex flex-col'>
        <p className='pb-1 text-sm'>Описание персонажа</p>
        <textarea
          className='grow h-full border placeholder:text-neutral-500 rounded-sm px-4 py-3 focus:outline-0'
          placeholder='Наплачь своего говна от души'
          value={description}
          onChange={(e) => update('description', e.target.value)}
          autoComplete='off'
        />
      </div>
    </>
  );
};

export default GeneralStep;
