import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
    Documents,
} from "./components";
import Evaluatie from "./components/Evaluatie.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <About />
        <Experience />
        <Works />
        <Feedbacks />
       <Documents/>
        <Evaluatie/>
        <Contact/>
      </div>
    </BrowserRouter>
  );
};

export default App;
