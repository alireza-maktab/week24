import React, { useState, useCallback } from "react";
import lodash from "lodash";

function plus(input) {
  return input + 1;
}

export default function Challenge() {
  const [defaultCounter, setDefaultCounter] = useState(0);
  const [debounceCounter, setDebounceCounter] = useState(0);
  const [throttleCounter, setThrottleCounter] = useState(0);

  const simpleHandling = () => {
    setDefaultCounter(plus);
  };

  // eslint-disable-next-line
  const debounceHandling = useCallback(
    lodash.debounce(() => {
      setDebounceCounter((x) => x + 1);
    }, 1000),
    []
  );

  // eslint-disable-next-line
  const throttleHandling = useCallback(
    lodash.throttle(() => {
      setThrottleCounter(plus);
    }, 1000),
    []
  );

  const handleMouseMove = (e) => {
    simpleHandling();
    debounceHandling();
    throttleHandling();
  };

  document.addEventListener("mousemove", handleMouseMove);

  return (
    <>
      <h3>Default: {defaultCounter}</h3>
      <h3>Debounce: {debounceCounter}</h3>
      <h3>Throttle: {throttleCounter}</h3>
    </>
  );
}
