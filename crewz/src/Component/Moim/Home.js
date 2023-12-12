import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';
import "./moimcss.css";

const Textarea = styled.textarea`
  width: 100%;
  height : 500px;
  font-size : 1rem;
  border:none; 
  outline:none;

`;

export default function Home() {
    return (
        <div>
            <div class="img_box">
                <Carousel class="carousel" data-bs-theme="dark">
                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src="https://picsum.photos/700/350"
                            alt="First slide"
                        />
                        
                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img

                            className="d-block"
                            src="https://picsum.photos/700/350"
                            alt="Second slide"
                        />
                        
                    </Carousel.Item>

                    <Carousel.Item className='carousel_item'>
                        <img
                            className="d-block"
                            src="https://picsum.photos/700/350"
                            alt="Third slide"
                        />
                        
                    </Carousel.Item>
                </Carousel>
                <br />
            </div>
            <snap style={{ fontSize: '35px' }}>RooTrip </snap><Badge bg="primary">여행</Badge>
            <h5>여행객들은 여행객끼리 통한다! 여행객들 여기 다 모여라!</h5><br/><br/>
            <Textarea id="content">
                {`안녕하세요 이건 테스트 케이스 입니다.안녕하세요 
이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.
안녕하세요 이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 
입니다.안녕하세요 이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.
안녕하세요 이건 테스트 케이스 입니다.안녕하세요 
이건 테스트 케이스 입니다.안녕하세요 
이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.
안녕하세요 이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.안녕하세요
이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.
안녕하세요 이건 테스트 케이스 입니다.안녕하세요 이건 테스트 케이스 입니다.안녕하세요 `}
                
           
            </Textarea>
            
        </div>

    );
}

