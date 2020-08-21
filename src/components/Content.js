import React, {useState} from "react";
import {Form, Input, Button, Row, Col} from 'antd';
import TextArea from "antd/es/input/TextArea";



const Demo = () => {
    const [titles, setTitle] = useState("")
    const [texts, setText] = useState("");
    const [lists, setList] = useState([{id:Date.now(),title:"",text:""}]);


    const onListSubmit = (event) => {
        event.preventDefault();
        setList([...lists,{id: Date.now(), title: titles,text:texts}])
        console.log(lists)
    };

    return (

        <div>
            <Row style={{background: "white"}}>
                <Col className={"leftColumn"}
                     span={12}>
                    <h3>
                        NOTES
                    </h3>

                    <ul>
                        {lists.map((list) => (
                            <li key={list.id}>
                                {list.title}

                            </li>
                        ))}
                    </ul>

                </Col>


                <Col className={"rightColumn"} span={12}>
                    <h3>
                        Enter Note
                    </h3>


                    <Form>
                        <h3>Title</h3>
                        <Form.Item name="title">

                            <Input value={lists.title}
                                   style={{textAlign: "center"}}
                                   placeholder={"Title"}
                                   onChange={(event => setTitle(event.target.value))}
                                   name={"title"}
                            />

                        </Form.Item>

                        <h3>Note</h3>

                        <TextArea name="note">

                            <Input value={lists.text}
                                   style={{textAlign: "center"}}
                                   type="text"
                                   placeholder={"Enter Your Note!"}
                                   onChange={(event => setText(event.target.value))}
                                   name={"note"}
                            />

                        </TextArea>
                        <hr/>
                        <Button
                            onClick={onListSubmit}
                            style={{position: "center"}}
                            type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </div>

    );
};

export default Demo;
