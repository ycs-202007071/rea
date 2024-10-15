import { useState } from "react";

function App(){
    var state = useState(999);
    var _count = state[0];
    var _countFunc = state[1];


    return<>
    {_count}
    <button onClick={()=>{
        _countFunc(_count + 10);
        console.log(_count);
    }}>클릭</button>
    </>
}
export default App;
