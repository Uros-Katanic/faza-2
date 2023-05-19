// import logo from "./logo.svg";
import { useContext } from "react";
import "./App.css";
import { DataContext } from "./Store/Store";

function App() {
  const ctx = useContext(
    DataContext
  )
  const data = ctx.fetchData
  return (
<div>
  
</div>
  )
}

export default App;
