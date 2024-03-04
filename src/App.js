import logo from './logo.svg';
import './App.css';
import { HelloComponent } from './components/HelloComponent';
import { NameComponent } from './components/NameComponent';
import { NameFunctionalComponent } from './components/NameFunctionalComponent';
import { IncrementDecrementComponent } from './components/IncrementDecrementComponent';
import { NameChangeFunctionalComponent } from './components/NameChangeFunctionalComponent';
import TickerComponent from './components/TickerComponent';

import CountComponent from './components/CountComponent';
import ExpensiveComponent from './components/ExpensiveComponent';
function App() {
  return (
    <div className="App">

      <CountComponent />
      <br/>
      <ExpensiveComponent />

    {/* <IncDecComponent />
    <hr/>
     <h1>Welcome to React Training at Dunhumbhy</h1>
     <hr />
     <HelloComponent />
     <hr />
     <TickerComponent />
     <hr/>
     <NameComponent name="Thomas" 
     message="We are learning React"/>
     <hr/>
     <NameComponent name="Elizabeth" 
     message="JS is fun"/>
     <hr/>
     <NameFunctionalComponent name="Leo" 
     message="React is Awesome"/>

     <hr/>
     <IncrementDecrementComponent />
     <hr/>
     <NameChangeFunctionalComponent /> */}


    </div>
  );
}

export default App;
