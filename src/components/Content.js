import React, {useState} from "react";
import {Row, Col, Button} from 'antd';
import TextArea from "antd/es/input/TextArea";

const Content = () => {
    const [text, setText] = useState([""]);
    const onInputChange = (event) => {
        setText(event.target.value)

    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(text);
    };
    return (
        <div>
            <Row style={{background: "white"}}>
                <Col className={"left column"}
                    span={12}>
                    <h3>
                        NOTES
                      {console.log({text})}
                      <div onSubmit={onFormSubmit}></div>
                    </h3>

                </Col>

                    <Col
                        span={12}>
                        <h3>
                            Enter Note
                        </h3>
                        <TextArea
                            style={{textAlign: "center"}}
                            placeholder={"Enter Your Note!"}
                            onChange={onInputChange}
                        />
                        <hr/>
                        <Button onClick={(event) => {
                            setText(event.target.value)
                        }}>Add</Button>
                    </Col>
            </Row>
        </div>
    );

}

export default Content;