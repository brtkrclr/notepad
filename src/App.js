import React from 'react';
import './App.css';
import Title from "./components/Title";
import {Layout} from "antd";
import Content from "./components/Content";

const {Header} = Layout;


function App() {
    return (
        <div className="App">
            <Layout>
                <Header style={{background: "white"}} className="header">
                    <Title/>
                </Header>

                <Content/>


             </Layout>


        </div>
    );
}

export default App;
