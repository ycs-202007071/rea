import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App2 from './component1018/App2';
import Footer2 from './component1018/Footer2';
import App3 from './component1018/App3';


function App() {


  return (
    <div className="app">
      <Router>
        <div>
          <ul>
            <li><Link to ="/">page컴포넌트</Link></li>
            <li><Link to="/Page">페이지</Link></li>
            <li><Link to="/Footer2">푸터</Link></li>
            <li><Link to="/App3">App3</Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<App2></App2>}></Route>
          <Route path="/Footer2" element={<Footer2></Footer2>}></Route>
          <Route path="/App3" element={<App3></App3>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;