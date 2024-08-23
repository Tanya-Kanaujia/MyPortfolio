import React from "react";
import "./App.css";
import Index from "./Index/Index"
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Index />
      </Router>
    </>
  )
}
export default App;

