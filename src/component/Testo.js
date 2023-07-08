// import "./App.css";
// import Navbar from "./component/Navbar";
// import Alert from "./component/Alert";
// import TextForm from "./component/TextForm";
// import React, { useState } from "react";

// function App() {
//   const [alert, setAlert] = useState(null);
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type,
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 1700);
//   };

//   const [mode, setMode] = useState("light");
//   const [blueMode, setBlueMode] = useState(false);

//   const toggleMode = () => {
//     if (mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "black";
//       showAlert("Dark mode has been enabled", "success");
//     } else if (mode === "dark") {
//       setMode("blue");
//       document.body.style.backgroundColor = "blue";
//       showAlert("Blue mode has been enabled", "success");
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("Light mode has been enabled", "success");
//     }
//   };

//   const toggleBlueMode = () => {
//     setBlueMode(!blueMode);
//     showAlert("Blue mode has been enabled", "success");
//   };

//   return (
//     <>
//       <Navbar
//         title="TextUtils"
//         mode={mode}
//         toggleMode={toggleMode}
//         toggleBlueMode={toggleBlueMode}
//       />
//       <Alert alert={alert} />
//       <div className="container my-4">
//         <TextForm
//           showAlert={showAlert}
//           heading="Enter the text to analyze below"
//           mode={mode}
//         />
//         {/* <About/> */}
//       </div>
//     </>
//   );
// }

// export default App;
