import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./MainBlock/Main";
import SkillsBlock from "./skillsBlock/SkillsBlock";
import MyProjectsBlock from "./MyProjectsBlock/MyProjectsBlock";
import RemoteWork from "./RemoteWork/RemoteWork";
import ContactBlock from "./ContactBlock/ContactBlock";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <SkillsBlock/>
            <MyProjectsBlock/>
            <RemoteWork/>
            <ContactBlock/>
            <Footer/>
        </div>

    );
}

export default App;
