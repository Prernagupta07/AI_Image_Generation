import React from "react";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

const App = () => {
   return (
      <div>
         {/* Navbar */}
         <Navbar />

         {/* Main */}
         <Main />
      </div>
   );
};

export default App;