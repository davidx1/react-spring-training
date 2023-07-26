import { useState } from "react";
import { Example as CSSTransitionExample } from "./examples/1_transition";
import { Example as CssAnimationExample } from "./examples/2_animation";
import { Example as SpringExample } from "./examples/3_spring";
import { Example as InteractiveExample } from "./examples/4_interaction";
import { Example as ChainExample } from "./examples/5_chain";
import { Example as CustomExample } from "./examples/6_custom";

function App() {
  const [page, setPage] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={() => setPage(0)}>CSSTransitionExample</button>
      <button onClick={() => setPage(1)}>CssAnimationExample</button>
      <button onClick={() => setPage(2)}>SpringExample</button>
      <button onClick={() => setPage(3)}>InteractiveExample</button>
      <button onClick={() => setPage(4)}>ChainExample</button>
      <button onClick={() => setPage(5)}>CustomExample</button>
      <div style={{ padding: "24px 0" }}>
        {page === 0 && <CSSTransitionExample />}
        {page === 1 && <CssAnimationExample />}
        {page === 2 && <SpringExample />}
        {page === 3 && <InteractiveExample />}
        {page === 4 && <ChainExample />}
        {page === 5 && <CustomExample />}
      </div>
    </>
  );
}

export default App;
