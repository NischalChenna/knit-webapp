import { useState, useEffect } from "react";
import { publish } from "../../utils/events";
interface CountdownProps {
  countMax: number;
  timertoggler: Boolean;
}

const Countdown = (props: CountdownProps) => {
  const [counter, setCounter] = useState(props.countMax);
  useEffect(() => {
    let TimerInt: any;

    if (counter > 0) {
      TimerInt = setInterval(() => {
        setCounter((time) => time - 1);
      }, 1000);
    }
    if (counter == 0) {
      publish("countdownComplete");
    }
    return () => {
      clearInterval(TimerInt);
    };
  }, [counter]);

  useEffect(() => {
    if (props.timertoggler) setCounter(props.countMax);
  }, [props.timertoggler]);

  return <span>{counter}</span>;
};

export default Countdown;
