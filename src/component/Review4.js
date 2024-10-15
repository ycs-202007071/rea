import { useState } from "react";


function App(){
    const [text, setText] = useState("");
    const printText = (e)=>{
        setText(e.target.value);

    }
return<>
        <input onChange={printText} value={text}></input>
        <div>{text}</div>
    </>
}
export default App;

