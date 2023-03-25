import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>Counter {counter}</h2>
      {/* assuming we want to multiply we will add the number we want to multiply with as a parameter for example we added 5 */}
      {/* we will then pass the number 5 as a parameter num to our index.js inside actions */}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
    </div>
  );
}

export default App;
