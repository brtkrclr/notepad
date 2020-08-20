import React, {useState} from "react";
import {Row, Col, Button} from 'antd';
import TextArea from "antd/es/input/TextArea";

const Content = () => {
    const [note, setNote] = useState("");
    const [title,setTitle]=useState([]);
    const [list, setList] = useState([]);

    const onNoteChange = (event) => {
        setNote(event.target.value)
    };

    const onTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setList([...list,{title}])

        console.log(note)
         //can be removed if we are going to use a button !
    };
    const editNotes=(event)=>{
        event.preventDefault();
        setTitle([...title,{note}])
    }


    return (
        <div>
            <Row style={{background: "white"}}>
                <Col className={"leftColumn"}
                     span={12}>
                    <h3>
                        NOTES
                    </h3>
                    <ul>
                        {list.map((list) => (
                            <li>{list.title}
                            <button onClick={editNotes} icon={"editIcon"}>  </button>

                            </li>
                        ))}
                    </ul>
                </Col>


                <Col className={"rightColumn"} span={12}>
                    <h3>
                        Enter Note
                    </h3>

                    <form>

                        <input
                            style={{textAlign: "center"}}
                            placeholder={"Title"}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                            onChange={onTitleChange}
                        />
                        <hr/>
                        <TextArea
                            style={{textAlign: "center"}}
                            placeholder={"Enter Your Note!"}
                            onChange={onNoteChange}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        />

                        <hr/>
                        <Button onClick={onFormSubmit}>
                            Add
                        </Button>


                    </form>


                </Col>
            </Row>
        </div>
    );

}

export default Content;
