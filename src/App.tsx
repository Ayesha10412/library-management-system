import { Outlet } from "react-router";
import { Navbar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App;
