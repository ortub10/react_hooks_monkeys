import "./App.css";
import AppToast from "./components/appToast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer theme="colored" position="top-left" />
      <AppToast />
    </div>
  );
}

export default App;
