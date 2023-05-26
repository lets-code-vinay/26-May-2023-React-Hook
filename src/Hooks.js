import React, { useCallback, useEffect, useMemo, useState } from "react";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [val, setVal] = useState("Use memo call");
  // useEffect structure --
  useEffect(() => {
    setCount(() => count);
    console.log("use effect console");
  }, [count]);

  const handleCount = () => {
    setCount(() => count + 1);
    console.log("chk");
  };

  const handleCountDecrease = () => {
    setCount(() => count - 1);
  };

  // useMemo memoize the value , when value change then its call
  useMemo(() => {
    setCount(() => count);
    console.log("use memo");
  }, [count]);

  // useCallback memoize the function call
  const callBack = useCallback(() => {
    setCount(() => count + 2);
    console.log("use callback");
  }, [count]);

  return (
    <>
      <button onClick={handleCount}>Count increase By 4 number</button>
      <button onClick={handleCountDecrease}>Count decrease By 1 number</button>
      <div>this is hooks div {count}</div>

      <h3> This is Use memo Value {val}</h3>
      <button onClick={callBack}> This is Use callback Value</button>
    </>
  );
};

export default Hooks;
