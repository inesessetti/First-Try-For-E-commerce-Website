import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './MainRouter/MainRouter';
import FooterPage from './Footer/footer';
import './App.css';
function App(){
return(
  <div className="BackG">
  <MainRouter/>
  <FooterPage/>
  </div>
  );
};
export default App;
