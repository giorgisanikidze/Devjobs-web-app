import { Home, Detail, Header } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';




function App() {
  const [elementId, setElementId] = useState(null);
  const [day, setDay] = useState(true);
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);





  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []); 



  return (
    <BrowserRouter>
      <Header screenWidth={screenWidth} day={day} setDay={setDay} filterDisplay={filterDisplay}  />

      <Routes>
        <Route path="/" exact element={<Home day={day} screenWidth={screenWidth} setElementId={ setElementId} filterDisplay={filterDisplay} setFilterDisplay={setFilterDisplay} />} />
        <Route path="/detail" element={<Detail day={day} screenWidth={screenWidth} elementId={elementId } />} />  
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
