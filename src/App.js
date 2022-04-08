import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

function App() {
  const themes = {
    green: {
      foreground: "#ffffff",
      background: "#008000",
    },
    red: {
      foreground: "#ffffff",
      background: "#FF0000",
    },
  };

  const ThemeContext = React.createContext(themes.green);
  return (
    <>
      <ChildCardComponent />
    </>
  );

  function ChildCardComponent() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Child Card Component</Card.Title>
          </Card.Body>
          <GrandChildButtonComponent />
        </Card>
      </>
    );
  }

  function GrandChildButtonComponent() {
    const theme = useContext(ThemeContext);
    return (
      <>
        <button
          style={{ background: theme.background, color: theme.foreground }}
        >
          Theme Button
        </button>
      </>
    );
  }
}

export default App;
