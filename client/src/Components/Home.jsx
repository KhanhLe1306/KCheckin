import React from "react";
import Nav from "./Nav";
import Brand from "./Brand"
import Form from "./Form";

const Home = () => {
    return <div className="h-screen bg-blue-300">
        <Nav />
        <Brand />
        <Form />
    </div>;
};

export default Home;
