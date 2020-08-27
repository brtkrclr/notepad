import React from 'react';
import './App.css';
import Title from "./components/Title";
import {Layout} from "antd";
import Content from "./components/Content";

const {Header} = Layout;


function App() {
    return (
        <div className="container">
            <div className="App">
                <Layout>
                    <Header>
                        <Title/>
                    </Header>
                    <Content/>
                </Layout>
            </div>
        </div>
    );
}

export default App;
