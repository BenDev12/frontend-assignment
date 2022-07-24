// import "./App.css";
import Header from "./components/Header";
import Packages from "./components/Packages";
import SideBar from "./components/SideBar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <SideBar />
        <Packages />
      </div>
    </div>
  );
}

export default App;
