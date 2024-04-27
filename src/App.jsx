import React from "react";
import Navigation from "./components/navigation";
import MyRoutes from "./Routes";

const App = () => {
  return (
    <div className="bg-yellow-500">
      <Navigation />
      <MyRoutes />
    </div>
  );
};

export default App;
