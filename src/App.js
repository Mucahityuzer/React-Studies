import { useState } from "react";
import Mycomponent from "./components/Mycomponents";

function App() {
  const[showComponent,setShowComponent]=useState(true)
  return (
    <div className="App">
      <p>App Component</p>
      {showComponent === true && ( <Mycomponent/>
      )}

      <button onClick={()=>setShowComponent(!showComponent)}>Toggle</button>
     
    </div>
  );
}

export default App;
