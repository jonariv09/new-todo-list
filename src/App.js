import React from 'react';
import { Row, Col } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TaskList from './Components/TaskList';
import Form from './Components/FormTasks';


function App() {
    return (
        <div>
            <Row>
                <Col xs={3}>
                    <Form />
                </Col>

                <Col xs={9}>
                    <TaskList />
                </Col>
            </Row>
        </div>
    );
}

export default App;
