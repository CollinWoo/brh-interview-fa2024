import { useState } from "react";

function GreetingComponent() {
  const BASE_URL = "http://localhost:5001/"
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Fill out this method. On error, should return an error message'
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
