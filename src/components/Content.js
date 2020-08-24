import React, {useState} from "react";
import {Form, Input, Button, Row, Col} from 'antd';


const Demo = () => {
    const [notes, setNotes] = useState([{title: "", text: ""}]);

    const onChange = event => {
        setNotes({...notes, [event.target.name]: event.target.value});
    };
    const onFinish = values => {
        console.log('Success:', values);
        console.log(notes)
        
    };

    return (

        <div>
            <Row style={{background: "white"}}>
                <Col className={"leftColumn"}
                     span={12}>
                    <h3>
                        NOTES
                    </h3>

                </Col>

                <Col className={"rightColumn"} span={12}>
                    <h3>
                        Enter Note
                    </h3>

                    <Form onFinish={onFinish}>

                        <Form.Item
                            type="text"
                            name="title"
                            label="Title">
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            type="text"
                            name="text"
                            label="Text">
                            <Input/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>

    );
};

export default Demo;
