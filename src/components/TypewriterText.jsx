import { useEffect, useState } from 'react';

export default function TypewriterText({ text, speed = 70 }) {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    setVisibleText('');

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
      }
    }, speed);

    return () => window.clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="typewriter-text" aria-label={text}>
      <span aria-hidden="true">{visibleText}</span>
    </span>
  );
}
