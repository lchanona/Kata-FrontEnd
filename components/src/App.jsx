import React from "react";
import Hi from "./components/Hi";

function App() {
  return (
    <>
      <header>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <p>logo</p>
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li>
              {" "}
              <a href="#"> Home </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#"> Service </a>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Hi> </Hi>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi nihil
          quo laborum dignissimos perspiciatis aliquid repudiandae! Distinctio
          ut nesciunt voluptatibus dolorum voluptate, sequi laborum animi amet
          id impedit qui ipsa.
        </p>
      </main>
    </>
  );
}

export default App;
