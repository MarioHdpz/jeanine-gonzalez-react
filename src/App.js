import React, { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Header from "./components/Header";
import Events from "./components/Events";
import Profile from "./components/Profile";
import Form from "./components/Form";
import getJson from "./lib/getJson";

import "./scss/App.scss";

function App() {
  const [formKey, setformKey] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getJson();
      const events = data.rows.slice(1);
      const eventsWithKey = events.map((data) => ({
        key: `${data.date}T${data.hour}`,
        ...data,
      }));
      setEvents(eventsWithKey);
    }
    fetchData();
  }, []);

  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="App">
      <>
        <Header onAction={() => scrollTo("events")} />
        <Profile />
        <Element name="events">
          {!formKey ? (
            <Events
              events={events}
              onReservation={(index) => setformKey(index)}
            />
          ) : (
            <Form
              onCancel={() => setformKey(null)}
              event={events.find((data) => data.key === formKey)}
            />
          )}
        </Element>
      </>
    </div>
  );
}

export default App;
