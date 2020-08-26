import React, {useState} from "react";
import {Form, Input, Button, Row, Col, List} from 'antd';
import {useForm} from "antd/es/form/Form";

const Demo = () => {
    const [form] = useForm();
    const [notes, setNotes] = useState([]);
    const [selectedItem, setSelectedItem] = useState();


    const onFinish = values => {
        setNotes([...notes, values]);
    };


    const findItem = index => {
        const newSelectedItem = notes[index];
        setSelectedItem(newSelectedItem);
    };

    const editItem=()=>{


    };

    //show the selected value!
    React.useEffect(() => {
        form.setFieldsValue(selectedItem);
    });

    console.log("selected item:", selectedItem)
    console.log(notes)


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
                            <List.Item>
                                <Button onClick={() => findItem(index)}>Edit</Button>
                                <List.Item.Meta
                                    title={<p>{note.title}</p>}
                                    description={<p>{note.text}</p>}
                                />

                            </List.Item>
                        ))}
                    </ul>

                </Col>
                <Col className={"rightColumn"} span={12}>
                    <h3>
                        Enter Note
                    </h3>


                    <Form
                        onFinish={onFinish}
                        form={form}
                    >

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
