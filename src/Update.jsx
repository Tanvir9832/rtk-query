import { useUpdatePostMutation } from "./sevices/post"

const Update = () => {
    const [updateData , responseInfo] = useUpdatePostMutation();
    console.log(responseInfo);
    console.log("UDATA");
    const data = [
        {
            id: 1,
            title: "title",
            content: "content"
        }
    ]
  return (
    <div>
        <button onClick={()=>updateData({uid : 4, ...data})}>UPDATE</button>
    </div>
  )
}

export default Update