import { useState } from "react";
function App(){
    const [num,setNum] = useState(1);
    const [input, setInput] = useState(1);
    
    const plusNum = ()=>{
        setNum (num+input);
    }
    const minusNum = ()=>{
        if(num - input <= 0){
            setNum(0);
        }else{
            setNum (num-input);}
    }
    const resetNum = ()=>{
        setNum(0);
    }

    return <>
    <div>현재카운트 : {num}</div>
    <input value={input} onChange={(e)=>setInput(Number(e.target.value))}></input>
    <button onClick={plusNum}>증가</button>
    <button onClick={minusNum}>감소</button>
    <button onClick={resetNum}>초기화</button>
    </>
}
export default App;