
import "./App.css";
import SingleData from "./SingleData";
import { useGetAllPostQuery } from "./sevices/post";
function App() {

    const x = useGetAllPostQuery();

    console.log(x);

  return<div className="App">
    <SingleData />
  </div>
}

export default App;
