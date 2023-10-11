import { Code } from "./assets";

import "./App.scss";

function App() {
  return (
    <div className="header">
      <h1 className="header_name">Gabriel Amorim</h1>
      <h2 className="header_role">Senior Software Engineer</h2>
      <div className="about-me">
        <div className="about-me_title">
          <Code size={100} />
          <h1 className="about-me_title__name">About me</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
