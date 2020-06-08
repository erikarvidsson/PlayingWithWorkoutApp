import React from "react";
import { TimerProvider } from "./provider/TimerProvider";
import AppView from "./src/index";

const App = () => {
  return (
    <TimerProvider>
      <AppView />
    </TimerProvider>
  );
};

export default App;
