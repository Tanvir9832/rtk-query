
import { useCreatePostMutation } from "./sevices/post"
const CreatePost = () => {

    const x = useCreatePostMutation();
    const [createData , responseInfo] = x;

    console.log(responseInfo);
    console.log("CDATA");

    const data ={

        userId : 101,
        id : 101,
        title : "New Post",

    }
  return (
    <div>
        <button onClick={()=>createData(data)}>Create</button>
    </div>
  )
}

export default CreatePost