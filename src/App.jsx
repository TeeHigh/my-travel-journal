import React, { useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="page">
      <Header/>
      <Main isModalOpen={isModalOpen} />
    </div>
  );
}

export default App;
