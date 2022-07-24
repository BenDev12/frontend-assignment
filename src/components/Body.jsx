import React, { useState } from "react";
// import Footer from "./Footer";
import Home from "./Home";
import Packages from "./Packages";

function Body() {
  const [count, setCount] = useState(0);
  // setting the initial display to Home
  const [display, setDisplay] = useState(<Home />);

  function handleClick(e) {
    const num = e.target.value;
    if (num === 0) {
      setCount(0);
    } else {
      num === 1 && setCount(count + 1);
      // to make the count not to go beyond 1
      count >= 1 && setCount(1);
    }
    setDisplay(() => {
      return count === 0 ? <Home /> : <Packages />;
    });
  }
  const homeStyle = { borderRight: count === 0 && "5px solid #272360" };
  const packageStyle = { borderRight: count === 1 && "5px solid #272360" };
  return (
    <div className="body">
      <ul className="sidebar">
        <li style={homeStyle} onClick={handleClick} value="0">
          Home
        </li>
        <li style={packageStyle} onClick={handleClick} value="1">
          Packages
        </li>
      </ul>
      {display}

      {/* <Footer /> */}
    </div>
  );
}

export default Body;
