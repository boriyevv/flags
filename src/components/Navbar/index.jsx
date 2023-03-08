import { useState, useEffect } from "react";
import "./navbar.scss";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
    
  }, [theme]);

  return (
    <header className={`py-4 position-fixed top-0 w-100 shadow ${theme} `}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <span className="fw-bold fs-5">Where in the world?</span>

          <div className="d-flex align-items-center ">
            <select className="form-select select-them" onChange={toggleTheme} >
              <option value="SunMode">Light Mode</option>
              <option value="DarkMode">Dark Mode</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
