import React ,{useState}from "react";
import "./style.css";
import Child from './child';


function App() {
  const [element,setElement] = useState([{id:1,value:1},{id:2,value:2},{id:3,value:3},{id:4,value:4},{id:5,value:5}]);

  const upDateState = ()=>{
    let newArray = [...element];
    newArray[4].value = 6;
    setElement(newArray);
  }

  return (
    <div>
      {element && element.map((ele,index)=>{
        return(
          <Child key ={ele.id} value={ele.value}/>
        )
      })}
      <button onClick={upDateState}>Click Me</button>
    </div>
  );
}

export default App;