import TypewriterPre from '../common/typewriter-pre';
import type { TypewriterProps } from '../../types/common';
import { useState } from 'react';

const AboutScreen = ({ typewriterText }: { typewriterText: Array<string> }) => {
  const [signal, setSignal] = useState(false);
  const typewriterSettings: TypewriterProps = {
    initialText: typewriterText[0],
    speed: 150,
    _delay: 3000,
    blinkSpeed: 999999999,
    cursor: false,
    signal: signal,
    font: 'Sigali',
    className:
      'absolute text-[44px] text-[#21162b]/55 w-4xl h-98 rotate-90 top-75 -left-50 flex leading-8 tracking-[-5px] items-start justify-start -scale-y-100',
  };

  return (
    <section onMouseOver={() => setSignal(true)} className='screen-scroll-element relative w-full'>
      <TypewriterPre {...typewriterSettings} />
      <TypewriterPre
        {...typewriterSettings}
        initialText={typewriterText[1]}
        _delay={5000}
        className='absolute text-[44px] text-[#431e70]/65 w-4xl h-98 rotate-90 top-80 left-285 flex leading-8 tracking-[-5px] items-start justify-start -scale-x-100'
      />
    </section>
  );
};

export default AboutScreen;
