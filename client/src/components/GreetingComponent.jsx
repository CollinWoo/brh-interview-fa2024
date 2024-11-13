import { useState } from "react";

function GreetingComponent() {
  const ROUTE_BASE = "http://localhost:5001/api/greet/"
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Fill out this method. On error, the message should be set to 'Error: Could not fetch greeting.'
  const handleFetchGreeting = async () => {};

  return (
    <div>
      <h1>Greeting App</h1>
      <input
        type="text"
        value={}
        onChange={}
        placeholder="Enter your name"
      />
      <button onClick={handleFetchGreeting}>Get Greeting</button>
      <p>{message}</p>
    </div>
  );
}

export default GreetingComponent;
