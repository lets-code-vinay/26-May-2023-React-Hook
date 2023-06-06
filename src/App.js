import "./App.css";
import Hooks from "./Hooks";
import GetApiCall from "./Component/GetApiCall";
import PostApiTest from "./Component/PostApiTest";
import CountingButtonComponent from "./Component/CountingButtonComponent";
import PutAPiTest from "./Component/PutApiTest";
import { TodoComponent } from "./Component/TodoComponent";

function App() {
  return (
    <div className="App">
      {/* <CountingButtonComponent />
      <Hooks />
      <GetApiCall />
      <PostApiTest /> */}
      {/* <PutAPiTest /> */}
      <TodoComponent />
    </div>
  );
}

export default App;
