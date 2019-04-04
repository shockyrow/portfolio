import React, {Component} from 'react';
import Header from "../Components/Header";
import Welcome from "../Components/Sections/Welcome";
import About from "../Components/Sections/About";
import Skills from "../Components/Sections/Skills";
import Footer from "../Components/Footer";
import Educations from "../Components/Sections/Educations";
import Experiences from "../Components/Sections/Experiences";
import Languages from "../Components/Sections/Languages";
import {
    ABOUT_LINK,
    EDUCATIONS_LINK,
    HOME_LINK,
    EXPERIENCES_LINK,
    LANGUAGES_LINK,
    SKILLS_LINK,
    PROJECTS_LINK,
    ACCOMPLISHMENTS_LINK,
    CONTACT_LINK
} from "../Components/Navbar";

class App extends Component {
    render() {
        return (
            <div className="App" id={HOME_LINK}>
                <Header/>

                <div className="container">
                    <Welcome/>
                    <div className="pb-3 pt-4" id={ABOUT_LINK}>
                        <About/>
                    </div>
                    <div className="pb-3 pt-4" id={EDUCATIONS_LINK}>
                        <Educations/>
                    </div>
                    <div className="pb-3 pt-4" id={EXPERIENCES_LINK}>
                        <Experiences/>
                    </div>
                    <div className="pb-3 pt-4" id={LANGUAGES_LINK}>
                        <Languages/>
                    </div>
                    <div className="pb-3 pt-4" id={SKILLS_LINK}>
                        <Skills/>
                    </div>
                    <div className="pb-3 pt-4" id={PROJECTS_LINK}>
                        <Educations/>
                    </div>
                    <div className="pb-3 pt-4" id={ACCOMPLISHMENTS_LINK}>
                        <Educations/>
                    </div>
                    <div className="pb-3 pt-4" id={CONTACT_LINK}>
                        <Educations/>
                    </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default App;
