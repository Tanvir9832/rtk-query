// import { useState } from "react";
import { useGetPostWithIdQuery ,useDeletePostMutation } from "./sevices/post";

const SingleData = () => {
  // const [id, setId] = useState(1);
  // const fun = () => {
  //   setId(Math.floor(Math.random() * 100));
  // };
  // fun();
  const y = useGetPostWithIdQuery(5);
  console.log(y);

  const [deletePost , responseInfo] = useDeletePostMutation();
  console.log(deletePost);
  console.log(responseInfo);
  console.log("SDATA");

  return (
    <div>
      <button onClick={()=>deletePost(2)}>DELETE</button>
    </div>
  );
};

export default SingleData;
