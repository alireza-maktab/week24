import React, { useState, useCallback } from "react";

export default function DT() {
  const [defaultText, setDefaultText] = useState("");
  const [debounceText, setDebounceText] = useState("");
  const [throttleText, setThrottleText] = useState("");

  const simpleHandling = setDefaultText;

  // eslint-disable-next-line
  const debounceHandling = useCallback(
    debounce((text) => {
      setDebounceText(text);
    }, 1000),
    []
  );

  // eslint-disable-next-line
  const throttleHandling = useCallback(
    throttle((text) => {
      setThrottleText(text);
    }, 1000),
    []
  );

  const handleChangeInput = (e) => {
    const text = e.target.value;
    simpleHandling(text);
    debounceHandling(text);
    throttleHandling(text);
  };

  return (
    <>
      <input autoComplete="off" name="search" onChange={handleChangeInput} />
      <h3>Default: {defaultText}</h3>
      <h3>Debounce: {debounceText}</h3>
      <h3>Throttle: {throttleText}</h3>
    </>
  );
}


function debounce(cb, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  }
}

function throttle(cb, delay) {
  let shouldWait = false;
  let waitingArgs

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  }
}
