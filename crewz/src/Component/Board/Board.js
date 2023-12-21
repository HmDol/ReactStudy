import { Col, Row, Table } from "react-bootstrap";
import BoardAdd from "./BoardAdd";

export default function Board() {
    return (
        <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
                <BoardAdd/>
                <Table border="1" striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{width : '5%'}}>no</th>
                            <th style={{width : '60%'}}>제목</th>
                            <th style={{width : '15%'}}>작성자</th>
                            <th style={{width : '20%'}}>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
            <Col xs={1}></Col>
        </Row>


    );
}