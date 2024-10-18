import React, { useContext } from 'react';
import { ModeContext } from '../context/ModeContext';

function Footer() {
    const { mode } = useContext(ModeContext);
    const lightstyle = { color: 'black', backgroundColor: 'white' };
    const darkstyle = { color: 'white', backgroundColor: 'black' };
    return (
        <Footer className="main">
            {mode ? (
                <>
                    <div style = {lightstyle}>
                        <p>푸터~~~~</p>
                    </div>
                </>
            ) : (
                <>
                    <div style={darkstyle}>
                         <p>푸터~~~~</p>
                    </div>
                </>
            )}
        </Footer>
    );
}

export default Footer;