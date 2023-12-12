import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Link,BrowserRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Router from './Router';
import Header from './Component/Header';
import Footer from './Component/footer';

function App() {
  const [selectedButton, setSelectedButton] = useState('홈');

  const setPage = (label) => {
    setSelectedButton(label);
  }

  return (
    <Container className='App'>
      <Row>
        <Col xs={1}></Col>
        <Col>
          <div>
            <Header />
          </div>
          <BrowserRouter>
            <Link to="/moim/home">
              <Button
                variant={selectedButton === '홈' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('홈')}
              >
                홈
              </Button>
            </Link>
            <Link to="/somoim/home">
              <Button
                variant={selectedButton === '소모임' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('소모임')}
              >
                소모임
              </Button>
            </Link>
            <Link to="/temp">
              <Button
                variant={selectedButton === '사진첩' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('사진첩')}
              >
                사진첩
              </Button>
            </Link>
            <Link to="/temp">
              <Button
                variant={selectedButton === '게시판' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('게시판')}
              >
                게시판
              </Button>
            </Link>
            <Link to="/temp">
              <Button
                variant={selectedButton === '후기' ? 'danger' : 'outline-danger'}
                className={`menubar`}
                onClick={() => setPage('후기')}
              >
                후기
              </Button>
            </Link>
            <br/><br/>
            <Router />
          </BrowserRouter>
          <div>
            <Footer/>
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}

export default App;



// import './App.css';
// import Router from './Router';
// import Home from './Component/Moim/Home';
// import Temp from './Component/temp';
// import SomoimHome from './Component/Somoim/SomoimHome';
// import Header from './Component/Header';
// import { BrowserRouter, Link } from 'react-router-dom';
// import { useState } from 'react';
// import ReactDOM from 'react-dom';
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';

// function App() {
//   const [radioValue, setRadioValue] = useState('1');

//   const radios = [
//     { name: '소개', value: '1', v: '/moim/home' },
//     { name: '소모임', value: '2', v: '/somoim/home' },
//     { name: '사진첩', value: '3', v: '/temp' },
//     { name: '게시판', value: '4', v: '/temp' },
//     { name: '후기', value: '5', v: '/temp' },
//   ];
//   const setPage = (v) => {
//     const viewDiv = document.getElementById("view");
//     alert(v);
//     viewDiv.innerHTML = ""; // view div 비우기
//     viewDiv.innerHTML = `<${v}/>`; // 값을 추가
//   }
//   return (
//     <Container>
//       <Row>
//         <Col xs={1}></Col>
//         <Col>
//           <div className='App'>
//             <div>
//               <Header />
//             </div>
//             <BrowserRouter>
//               <ButtonGroup>
//                 {radios.map((radio, idx) => (
//                   <Link
//                     to={`${radio.v.toLowerCase()}`}
//                   >
//                   <ToggleButton
//                     key={idx}
//                     id={`radio-${idx} `}
//                     style={{fontSize : '1.2rem', paddingTop : '12px'}}
//                     className='menubar'
//                     type="radio"
//                     variant={'outline-danger'}
//                     name="radio"
//                     value={radio.value}
//                     checked={radioValue === radio.value}
//                     onChange={(e) => setRadioValue(e.currentTarget.value)}
//                     // onClick={(e) => setPage(radio.v)}
//                   >
//                     {radio.name}
//                   </ToggleButton>
//                   </Link>
//                 ))}
//               </ButtonGroup>
//               <br /><br />
//               <Router />
//             </BrowserRouter>
//             <div id='view'>
//             </div>
//           </div>
//         </Col>
//         <Col xs={1}></Col>
//       </Row>
//     </Container>
//   );
// }
// export default App;
