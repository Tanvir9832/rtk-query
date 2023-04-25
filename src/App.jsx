
import "./App.css";
import CreatePost from "./CreatePost";
import SingleData from "./SingleData";
import Update from "./Update";
import { useGetAllPostQuery } from "./sevices/post";
function App() {

    const x = useGetAllPostQuery();

    console.log(x);

  return<div className="App">
    <SingleData />
    <CreatePost />
    <Update />
  </div>
}

export default App;
