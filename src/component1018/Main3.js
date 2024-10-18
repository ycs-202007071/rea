import React, { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

function Main() {
    const { mode , light, dark } = useContext(ModeContext);
    const lightstyle = { color: 'black', backgroundColor: 'white' };
    const darkstyle = { color: 'white', backgroundColor: 'black' };
    return (
        <Main className="main">
            {mode ? (
                <>
                    <div style = {lightstyle}>
                        <p>현재 색상 모드 : {}</p>
                    </div>
                </>
            ) : (
                <>
                    <div style={darkstyle}>
                         <p>현재 색상 모드 : {}</p>
                    </div>
                </>
            )}
        </Main>
    );
}

export default Main;