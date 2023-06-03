import React, { useEffect, useState } from "react";
import axios from "axios";

const PostApiTest = () => {
  // https://dummyjson.com/posts/add

  const [postApiData, setPostApiData] = useState([]);
  useEffect(() => {
    const payload = {
      userId: 5,
      title: "I love my country",
    };
    axios
      .post("https://dummyjson.com/posts/add", payload)
      .then((res) => {
        setPostApiData(res?.data);
        console.log("res", res?.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  console.log("postApiData", postApiData);
  return (
    <>
      <h3>This is post api component</h3>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">ID : {postApiData?.id}</h5>
          <h3>User Id: {postApiData?.userId}</h3>
          <p className="card-text">Title: {postApiData?.title}</p>
        </div>
      </div>
    </>
  );
};

export default PostApiTest;
