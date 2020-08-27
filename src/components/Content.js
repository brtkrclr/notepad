import React, {useState} from "react";
import {Form, Input, Button, Row, Col, List} from 'antd';
import {useForm} from "antd/es/form/Form";
import {EditFilled} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const Content = () => {
        const [form] = useForm();
        const [notes, setNotes] = useState([]);
        const [selectedItem, setSelectedItem] = useState([]);

        //submit if the value does not exist, upgrade if the value exist
        const onFinish = (values) => {
            const newNote = notes.findIndex((e) => e.id === values.id);
            if (newNote === -1) {
                setNotes([...notes, {id: Date.now(), title: values.title, text: values.text}]);
                form.resetFields()
            } else {
                notes[newNote] = values
                form.resetFields()
                console.log("updated NOtes:", notes)
                setNotes(notes)
                setSelectedItem(null)
            }
        };
        //finds the clicked item
        const findItem = id => {
            const newSelectedItem = notes.find((note) => note.id === id);
            setSelectedItem(newSelectedItem);
        };
        //show the selected value!
        React.useEffect(() => {
            form.setFieldsValue(selectedItem);
        });

        console.log("selected item:", selectedItem)
        console.log(notes)
        return (
            <div className="enterSpace">
                <Row>
                    <Col className={"leftColumn"}
                         span={12}>
                        <div className="notes1">
                            <h3>
                                Notes
                            </h3>
                            <ul>
                                {notes.map((note) => (
                                    <div className="noteCard">
                                        <List.Item>
                                            <EditFilled onClick={() => findItem(note.id)}></EditFilled>
                                            <List.Item.Meta
                                                title={<p>{note.title}</p>}
                                            />
                                        </List.Item>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col className={"rightColumn"} span={12}>
                        <h3>
                            Enter Note
                        </h3>
                        <Form
                            onFinish={onFinish}
                            form={form}>
                            <Form.Item
                                type="text"
                                name="id"
                                label="ID"
                                hidden={true}
                            >
                            </Form.Item>
                            <Form.Item
                                type="text"
                                name="title"
                                label="Title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Title!',
                                    },
                                ]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item
                                type="text"
                                name="text"
                                label="Text"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Text!',
                                    },
                                ]}>
                                <TextArea/>
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
    }
;

export default Content;
