import React from "react";
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
        </Card>
      </>
    );
  }
}

export default App;
