import React, { Component } from 'react';
import Logo from '../../assets/img/is_logo_inverted.png';

export const HOME_LINK = "home";
export const ABOUT_LINK = "about";
export const EDUCATIONS_LINK = "educations";
export const EXPERIENCES_LINK = "experiences";
export const LANGUAGES_LINK = "languages";
export const SKILLS_LINK = "skills";
export const PROJECTS_LINK = "projects";
export const AWARDS_LINK = "awards";
export const CONTACT_LINK = "contact";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg rounded"  style={{position: 'relative', zIndex: 10}}>
                <a className="navbar-brand" href={"#" + HOME_LINK}>
                    <img src={Logo} width="30" height="30" className="p-1" alt=""/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href={"#" + ABOUT_LINK}>
                                About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={"#" + EDUCATIONS_LINK}>
                                Educations
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={"#" + EXPERIENCES_LINK}>
                                Experiences
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={"#" + LANGUAGES_LINK}>
                                Languages
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={"#" + SKILLS_LINK}>
                                Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={"#" + PROJECTS_LINK}>
                                Projects
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href={"#" + AWARDS_LINK}>
                                Awards
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
