import React from "react";
import { Element, scroller } from 'react-scroll'
import Header from "./components/Header";
import Events from "./components/Events";
import Profile from "./components/Profile";
import "./scss/App.scss";

function App() {
  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  };

  return (
    <div className="App">
      <Header onAction={() => scrollTo("events")} />
      <Profile />
      <Element name="events">
        <Events />
      </Element>
    </div>
  );
}

export default App;
