import Particles from '../common/particles';
import TypewriterPre from '../common/typewriter-pre';
import type { TypewriterProps } from '../../types/common';

const TitleScreen = ({ typewriterText }: { typewriterText: string }) => {
  const typewriterSettings: TypewriterProps = {
    initialText: typewriterText,
    speed: 150,
    _delay: 3000,
    blinkSpeed: 99999999,
    cursor: false,
    signal: true,
    font: 'Sigali',
    className:
      'absolute text-[44px] text-[#21162b]/55 w-4xl h-98 rotate-90 top-75 -left-50 flex leading-8 tracking-[-5px] items-start justify-start -scale-y-100',
  };

  return (
    <section className='screen-scroll-element relative w-full flex flex-col select-none items-center animate-entry'>
      <Particles />
      <h1 className='text-5xl font-[PlexMono] text-[#6d479e] select-none transition-colors duration-300  animate-[entry_5s_ease-in-out]'>
        PROJECT: Eiyuunar
      </h1>
      <hr className='w-3/10 mt-2 animate-stroke select-none text-[#6d479e]' />
      <svg viewBox='0 40 100 100' className='w-lg select-none h-full absolute top-0 right-0'>
        <polygon points='15,5 85,5 50,75' stroke='#361b5766' strokeWidth={0.5} fill='none' />
        <polygon points='47,80 32,50 9,155' stroke='#361b5766' strokeWidth={0.5} fill='none' />
      </svg>
      <span className='stripes-main w-lg select-none h-full absolute top-0 right-0' />
      <TypewriterPre {...typewriterSettings} />
    </section>
  );
};

export default TitleScreen;
