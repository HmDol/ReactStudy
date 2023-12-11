import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  height : 200px;
  font-size : 1rem;
  border:none; 
  outline:none;

`;

export default function Home() {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/200/100"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src="https://picsum.photos/200/100"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/200/100"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            
            <snap style={{fontSize:'35px'}}>RooTrip </snap><Badge bg="primary">여행</Badge>
          
            
            

            <h4>여행객들은 여행객끼리 통한다! 여행객들 여기 다 모여라!</h4>
            <Textarea id="content">
                {`
                at FlowParserMixin.parseMaybeAssignAllowIn 
                (C:\\Users\\vtwin\\vs-workspace\\crewz\\node_modules\\@babel\\parser\\lib\\index.js:10567:17)
                at FlowParserMixin.parseParenAndDistinguishExpression 
                (C:\\Users\\vtwin\\vs-workspace\\crewz\\node_modules\\@babel\\parser\\lib\\index.js:11499:28)
                at FlowParserMixin.parseParenAndDistinguishExpression 
                (C:\\Users\\vtwin\\vs-workspace\\crewz\\node_modules\\@babel\\parser\\lib\\index.js:5799:18)
                `}
            </Textarea>
            <br /><br /><br /><br /><br /><br /><br />
        </div>

    );
}

