import React, {useState} from 'react';
import './App.css';
import Navbar from './Navbar';
import Jambotron from './Jambotron';
import Work from './Work';
import GetProjects from './GetProjects.js';
import Showcase from './Showcase';

const App = () => {
  const [showcaseProject, setShowcaseProject] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Jambotron />
      <Work projects={GetProjects()} setShowcaseProject={setShowcaseProject} />
      {(showcaseProject !== "") ? <Showcase projects={GetProjects()} showcaseProject={showcaseProject} setShowcaseProject={setShowcaseProject} /> : []}
    </div>
  );
};

export default App;
