import './App.css';
import Router from './Router';
import Header from './Component/Header';
import Home from './Component/Moim/Home';
import Temp from './Component/temp';
import SomoimHome from './Component/Somoim/SomoimHome';
import { BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function App() {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '소개', value: '1', v: 'Home' },
    { name: '소모임', value: '2', v: 'SomoimHome' },
    { name: '사진첩', value: '3', v: 'Temp' },
    { name: '게시판', value: '4', v: 'Temp' },
    { name: '후기', value: '5', v: 'Temp' },
  ];

  const setPage = (v) => {
    // view div를 비우고 값을 추가합니다.
    const viewDiv = document.getElementById("view");
    alert(v);
    viewDiv.innerHTML = ""; // view div 비우기
    viewDiv.innerHTML = `<${v}/>`; // 값을 추가

  }
  return (
    <Container>
      <Row>
        <Col xs={1}></Col>
        <Col>
          <div className='App'>
            <div>
              <Header />
            </div>


            <BrowserRouter>
              <ButtonGroup>
                {radios.map((radio, idx) => (
                  // <Link
                  //   to={`${radio.v.toLowerCase()}`}
                  // >
                  <ToggleButton
                    key={idx}
                    id={`radio-${idx} `}
                    className='menubar'
                    type="radio"
                    variant={'outline-danger'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    onClick={(e) => setPage(radio.v)}
                  >
                    {radio.name}
                  </ToggleButton>
                  // </Link>
                ))}
              </ButtonGroup>
              <br /><br />
              {/* <Router /> */}
            </BrowserRouter>


            <div id='view'>
                <Home/>
            </div>
          </div>
        </Col>
        <Col xs={1}></Col>
      </Row>
    </Container>
  );
}

export default App;
