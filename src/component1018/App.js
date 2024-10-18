import React, { createContext, useReducer, useState } from 'react';
import Header from './Header3';
import Main from './Main3';
import Footer from './Footer3';

const ModeContext = createContext();

function App() {
    const [mode, setMode] = useState("light");

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}
export default React;