import React, {useState} from "react";
import {Form, Input, Button, Row, Col} from 'antd';
import TextArea from "antd/es/input/TextArea";


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

                        <Input
                            type="text"
                            name="title"
                            label="Title"
                            value={notes.title}
                            onChange={onChange}/>

                        <Input
                            type="text"
                            name="text"
                            label="Text"
                            value={notes.text}
                            onChange={onChange}/>

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
