import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      setenabledisable("enable");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "textManipulator - lightmode";
    } else {
      setmode("dark");
      setenabledisable("disable");
      document.body.style.backgroundColor = "#000000";
      showAlert("Dark mode has been enabled", "success");
      document.title = "textManipulator - darkmode";
    }
  };

  const [enabledisable, setenabledisable] = useState("enable");

  return (
    // <Router>
      <div>
        <Navbar
          aboutText="hello"
          mode={mode}
          togglemode={togglemode}
          eds={enabledisable}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About />} /> */}
            {/* <Route */}
              {/* exact */}
              {/* path="/" */}
              {/* element={<TextForm showAlert={showAlert} mode={mode} />} */}
            {/* /> */}
          {/* </Routes> */}
          <TextForm showAlert={showAlert} mode={mode} />
        </div>
      </div>
    // </Router>
  );
}

export default App;
