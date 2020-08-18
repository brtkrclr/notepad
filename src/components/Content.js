import React from "react";
import {Row, Col, Button, Input} from 'antd';

const Content = () => {
    return (
        <div>
            <Row style={{background: "white"}}>
                <Col span={12}>
                    <h3>
                        Notes //MAKE A LIST with TITLES
                    </h3>

                </Col>
                <Col span={12}>
                    <Input />
                    <hr/>
                    <Button>Button</Button>
                </Col>
            </Row>
        </div>

    );
}

export default Content;