import { useState } from "react";

const Counter = () => {
    const [height,setheight] =  useState(300);
    const [width,setwidth] = useState(300);
    function rowinc(){
        setheight(height + 10);
    }
    function rowdec(){
        setheight(height - 10);
    }
    function colinc(){
        setwidth(width + 10);
    }
    function coldec(){
        setwidth(width - 10);
    }
    return (
        <div style={{border:"2px solid black",height:"600px",width:"600px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <img src="src\assets\hero.png" alt="reactimage" style={{height:`${height}px`,width:`${width}px`}}/>
            </div>
            <br />
            <br />
            <div style={{display:"flex",justifyContent:"center",gap:"30px"}}>
            <button onClick={rowinc}>Row +</button>
            <button onClick={rowdec}>Row -</button>
            </div>
            <br />
            <div style={{display:"flex",gap:"30px",justifyContent:"center"}}>
            <button onClick={colinc}>Column +</button>
            <button onClick={coldec}>Column -</button>
            </div>
        </div>
  )
}

export default Counter