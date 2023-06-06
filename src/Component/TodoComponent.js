import React, { useState } from "react";

export const TodoComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [cartData, setCartData] = useState([]);
  const handleInput = (e) => {
    console.log("e", e);
    setInputValue(e.target.value);
  };
  const handleAdd = () => {
    // to push value in the react state array--
    setCartData((cartData) => [...cartData, inputValue]);
    setInputValue("");
  };
  console.log("cartData", cartData);

  const handleDelete = (index) => {
    cartData.splice(index, 1);
    setCartData((cartData) => [...cartData, inputValue]);
    console.log("er", cartData);
  };
  return (
    <>
      <div style={{ textAlign: "center", margin: "4% 0 2% 0" }}>
        <input
          type="text"
          placeholder="type something"
          value={inputValue}
          onChange={handleInput}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        <ul>
          {cartData?.map((item, i) => {
            console.log("ite", item);
            return (
              item && (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "1%",
                  }}
                >
                  <li>{item}</li>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                </div>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
};
