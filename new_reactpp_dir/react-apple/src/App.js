import './App.css';
import CounterComp from './components/counterComp.js'
import IntervalCounterComp from './components/intervalCounterComp.js'
function App() {
  return (
    <div className='App'>
      <CounterComp/>
      <br/>
      <br/>
      <IntervalCounterComp/>
    </div>
  );
}
export default App;
