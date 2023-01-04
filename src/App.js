import "./App.css";
import Form from "./components/Form/Form";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

function App() {
  const [showPage, setShowPage] = useState(0);
  useEffect(() => {
    setShowPage(1);
  }, []);
  return (
    <div style={{ opacity: 1 , scale: `${showPage}`, transition: "0.3s"}} className="App">
      <ToastContainer />
      <h2 style={{ color: "#4f46e5" }}>ثبت نام</h2>
      <Form />
    </div>
  );
}

export default App;
