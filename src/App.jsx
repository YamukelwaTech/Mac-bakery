import React from "react";
import Navigation from "./components/navigation";
import MyRoutes from "./Routes";
import "./styles/app.css";

const App = () => {
  return (
    <>
      <Navigation />
      <MyRoutes />
    </>
  );
};

export default App;
