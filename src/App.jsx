import "./App.css";
import container from "./styles/Container.module.css";
import ChatApp from "./components/ChatApp";

function App() {
  return (
    <div className="App">
      <div className={container.container}>
        <ChatApp/>
      </div>
    </div>
  );
}

export default App;
