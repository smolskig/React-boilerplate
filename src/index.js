import React from "react";
import ReactDOM from "react-dom";
import Button from './components/Button'
const App = () => {
  return <div>
      <h1>This is my React app!</h1>
      <Button>batatinha</Button>
  </div>;
};

ReactDOM.render(<App/>, document.getElementById('app'))
