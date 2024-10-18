import { createContext, useState, useContext } from "react";

const DataContext = createContext();

function Sub1() {
    return <Sub2 />;
}

function Sub2() {
    return <Sub3 />;
}

function Sub3() {
    const {name} = useContext(DataContext);
    return <>
        <div>name : {name}</div>
        <Sub4></Sub4>
    </>;
}

function Sub4() {
    return <Sub5 />;
}

function Sub5() {
    return <Sub6 />;
}

function Sub6() {
    const { count } = useContext(DataContext);
    return (
        <>
            <Sub7>
                <div>Count: {count}</div>
            </Sub7>
        </>
    );
}

function Sub7({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}

function App() {
    const [count, setCount] = useState(100);
    const [name, setName] = useState("홍길동");
    return (
        <DataContext.Provider value={{ count, name }}>
            <Sub1 />
        </DataContext.Provider>
    );
}

export default App;
