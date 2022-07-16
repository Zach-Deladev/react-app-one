import logo from "./logo.svg";
import "./App.css";
import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";
import StatefulGreetingWithCallback from "./components/StatefulGreetingWithCallback";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import EventBinding from "./components/EventBinding";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";

import MethodsAsPropsParent from "./components/MethosAsPropsParent";
import NestingComponents from "./components/NestingComponents";

function App() {
  return (
    <div className="App">
      <MethodsAsPropsParent />
      <NestingComponents />
      <ConditionalRenderingClass />
      <EventBinding />
      <EventsClass />
      <EventsFunctional />
      <StatefulGreetingWithPrevState />
      <StatefulGreetingWithCallback />
      <StatefulGreeting greeting="I'm a stateful class component!" />
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" />
    </div>
  );
}

export default App;
