import React, {useState} from "react";
import {Row, Col, Button} from 'antd';
import TextArea from "antd/es/input/TextArea";

const Content = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);


    const onInputChange = (event) => {
        setText(event.target.value)

    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(text)
        setList([...list, {text}])
        //can be removed if we are going to use a button !
    };

    return (
        <div>
            <Row style={{background: "white"}}>
                <Col className={"left column"}
                     span={12}>
                    <h3>
                        NOTES
                    </h3>
                    <ul>
                        {list.map((list) => (
                            <li>{list.text}</li>
                        ))}
                    </ul>
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
                /><hr/>
                <Button onClick={onFormSubmit}>
                    Add
                </Button>


            </Col>
        </Row>
</div>
);

}

export default Content;
