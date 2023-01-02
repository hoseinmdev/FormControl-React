import "./App.css";
import Form from "./components/Form/Form";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <h2 style={{ color: "#4f46e5" }}>ثبت نام</h2>
      <Form />
    </div>
  );
}

export default App;
