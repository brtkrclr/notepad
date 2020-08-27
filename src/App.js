import React from 'react';
import './App.css';
import Title from "./components/Title";
import {Layout} from "antd";
import Demo from "./components/Demo";

const {Header} = Layout;


function App() {
    return (
        <div className="container">
            <div className="App">
                <Layout>
                    <Header>
                        <Title/>
                    </Header>
                    <Demo/>
                </Layout>
            </div>
        </div>
    );
}

export default App;
