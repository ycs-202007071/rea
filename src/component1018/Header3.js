import React, { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

function Header() {
    const { mode, light, dark } = useContext(ModeContext);
    const lightstyle = { color: 'black', backgroundColor: 'white' };
    const darkstyle = { color: 'white', backgroundColor: 'black' };
    return (
        <header className="main">
            {mode ? (
                <>
                    <div style = {lightstyle}>
                        <p>context 실습</p>
                        <button onClick={light}>테마변경</button>
                    </div>
                </>
            ) : (
                <>
                    <div style={darkstyle}>
                         <p>context 실습</p>
                        <button onClick={dark}>테마변경</button>
                    </div>
                </>
            )}
        </header>
    );
}

export default Header;