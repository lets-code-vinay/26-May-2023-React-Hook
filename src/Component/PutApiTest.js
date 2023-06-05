import axios from "axios";
import React, { useEffect, useState } from "react";

const PutAPiTest = () => {
  const [apiRes, setAPiRes] = useState([]);
  const [updateApiData, setUpdateApiData] = useState({});

  // get api ---
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        setAPiRes(res?.data?.posts);
        // console.log("res", res?.data?.posts);
      })
      .catch((err) => console.log("error", err));
  }, []);

  // update api ----
  const updateTitle = (id) => {
    // console.log("id", id);
    axios
      .put(`https://dummyjson.com/posts/${id}`, {
        title: "I think I should shift to the moon",
      })
      .then((res) => {
        setUpdateApiData(res?.data);
        // console.log("res", res?.data);
      })
      .catch((error) => console.log("err", error));
  };

  // delete api ---
  const deleteCard = (id) => {
    console.log("id", id);
    axios
      .delete(`https://dummyjson.com/posts/${id}`)
      .then((res) => {
        // setUpdateApiData(res?.data);
        console.log("res delete", res);
      })
      .catch((error) => console.log("err", error));
  };

  //   console.log("apiRes", apiRes);
  //   console.log("updateApiData", updateApiData);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {apiRes?.map((item, i) => {
          //   console.log("item", item, i);
          return (
            <div
              className="card"
              style={{ width: "18rem", margin: "2%" }}
              onClick={() => deleteCard(item?.id)}
              key={i}
            >
              <div className="card-body">
                <h5
                  className="card-title"
                  onClick={() => updateTitle(item?.id)}
                >
                  {item?.title}
                </h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text">{item?.body}</p>
                {item?.tags?.map((item, i) => {
                  return (
                    <div key={i}>
                      <span>Tags:</span>
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PutAPiTest;
