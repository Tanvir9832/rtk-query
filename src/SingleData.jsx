import { useState } from "react";
import { useGetPostWithIdQuery ,useDeletePostMutation } from "./sevices/post";

const SingleData = () => {
//   const [id, setId] = useState(1);
//   const fun = () => {
//     setId(Math.floor(Math.random() * 100));
//   };

//   const y = useGetPostWithIdQuery(id);
//   console.log(y);

  const [deletePost , responseInfo] = useDeletePostMutation();
  console.log(deletePost);
  console.log(responseInfo);

  return (
    <div>
      <button onClick={()=>deletePost(2)}>DELETE</button>
    </div>
  );
};

export default SingleData;
