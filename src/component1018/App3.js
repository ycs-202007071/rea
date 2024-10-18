import { useReducer, useRef } from "react";

const reducer = (prev, action) => {
    if (action.req == "찬성") {
        return { ...prev, yes : prev.yes + 1};
    } else if (action.req == "반대") {
        return { ...prev, no: prev.no + 1 };
    } else if (action.req == "초기화") {
        return {
            yes: 0,
            no: 0
        };
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, { yes: 0, no: 0 });
    return (
        <div className="app">
            찬성 : {state.yes}
            반대 : {state.no}

            <div>
                <button onClick={() => {
                    dispatch({ req: "찬성" });
                }}>찬성</button>

                <button onClick={() => {
                    dispatch({ req: "반대" });
                }}>반대</button>

                <button onClick={() => {
                    dispatch({ req: "초기화" });
                }}>초기화</button>

            </div>
        </div>
    );
}
export default App;