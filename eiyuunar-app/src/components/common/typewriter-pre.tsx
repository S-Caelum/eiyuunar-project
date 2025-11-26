import { useEffect, useRef, useState } from 'react';
import type { TypewriterProps } from '../../types/common';

const TypewriterPre = ({
  initialText,
  signal,
  speed,
  _delay,
  blinkSpeed,
  className,
  font,
  cursor,
}: TypewriterProps) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [fired, SetFired] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(_delay);

  useEffect(() => {
    if (signal === false) return;
    const delay = setTimeout(() => {
      if (index < initialText.length) {
        timeoutRef.current = setTimeout(() => {
          setText((prev) => prev + initialText[index]);
          setIndex((prev) => prev + 1);
        }, speed);
        SetFired(true);
      } else if (!completed) {
        setCompleted(true);
      }
      if (!fired) setTypeSpeed(0);
    }, typeSpeed);

    return () => {
      clearTimeout(delay);
      clearTimeout(timeoutRef.current);
    };
  }, [index, completed, initialText, speed, fired, typeSpeed, signal]);

  useEffect(() => {
    if (!cursorRef.current && !cursor) return;
    const interval = setInterval(() => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
      }
    }, blinkSpeed);

    return () => clearInterval(interval);
  }, [cursor, blinkSpeed]);

  return (
    <div className={`${className}`}>
      <pre unselectable='on' className={`select-none font-[${font}]`}>
        {text}
        {!completed && cursor && (
          <span ref={cursorRef} className='transition-opacity duration-100 ease-in'>
            |
          </span>
        )}
      </pre>
    </div>
  );
};

export default TypewriterPre;
