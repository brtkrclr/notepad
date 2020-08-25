import React, {useState} from "react";
import {Form, Input, Button, Row, Col, List} from 'antd';


const Demo = () => {

    const [notes, setNotes] = useState([]);
    const [editItem, setEditItem] = useState(null);


    const onFinish = values => {
        setNotes([...notes, values]);
    };

    const findItem = index => {
        var newEditItem = notes[index];
        setEditItem(newEditItem);
    };


    console.log(notes)
    console.log("edit item:",editItem)


    return (

        <div>
            <Row style={{background: "white"}}>
                <Col className={"leftColumn"}
                     span={12}>
                    <h3>
                        NOTES
                    </h3>


                    <ul>
                        {notes.map((note, index) => (
                            <List.Item value={index}>
                                <Button onClick={() => findItem(index)}>Edit</Button>
                                <List.Item.Meta
                                    title={<p>{note.title}</p>}
                                />

                            </List.Item>
                        ))}

                    </ul>


                </Col>
                <Col className={"rightColumn"} span={12}>
                    <h3>
                        Enter Note
                    </h3>


                    <Form onFinish={onFinish}>

                        <Form.Item
                            type="text"
                            name="title"
                            label="Title"
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            type="text"
                            name="text"
                            label="Text"
                        >
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
