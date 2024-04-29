import React from "react";
import Navigation from "./components/navigation";
import MyRoutes from "./Routes";
import "./styles/app.css";

const App = () => {
  return (
    <div className="mt-20"> 
      <Navigation />
      <MyRoutes />
    </div>
  );
};

export default App;
