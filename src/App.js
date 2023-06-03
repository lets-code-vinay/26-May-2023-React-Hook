import "./App.css";
import Hooks from "./Hooks";
import GetApiCall from "./Component/GetApiCall";
import PostApiTest from "./Component/PostApiTest";
import CountingButtonComponent from "./Component/CountingButtonComponent";

function App() {
  return (
    <div className="App">
      <CountingButtonComponent />
      <Hooks />
      <GetApiCall />
      <PostApiTest />
    </div>
  );
}

export default App;
