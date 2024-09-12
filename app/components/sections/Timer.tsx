import { useState, useEffect } from 'react';

function Timer() {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, );

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className='text-[4rem] text-purple-400'>
      {formattedTime}
    </div>
  );
}

export default Timer;