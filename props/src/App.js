import "./App.css";
import AppParent from "./components/appParent";

//communication between a parent component and a child component

function App() {
  return (
    <div className="container">
      <AppParent />
    </div>
  );
}

export default App;
