import React, {Component, Fragment} from 'react';
import moment from 'moment';
import InfoBlock from "./InfoBlock";

class Experiences extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <Fragment>
                <InfoBlock title={"Experiences"} content={(
                    <Fragment>
                        <div id="experienceCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div>
                                        <h6 className="pacifico-font">
                                            C# Developer
                                        </h6>
                                        <h4 className="opensans-title text-left shadowed-text">
                                            İM PARK EĞİTİM BİLİŞİM LTD. ŞTİ.
                                        </h4>
                                        <h6 className="d-flex opensans-title text-muted m-0">
                                            JANUARY 2016 - MAY 2016
                                        </h6>
                                        <h5 className="pacifico-font text-muted">

                                        </h5>
                                        <h5>
                                            Started as an intern and later was offered a part-time job. I was one of the
                                            developers of the educational web project that aimed to teach foreigners
                                            Turkish language. I was programming with C# using MVC framework. I only left
                                            this job because I needed to focus on my education.
                                        </h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <h6 className="pacifico-font">
                                            Java Developer
                                        </h6>
                                        <h4 className="opensans-title text-left shadowed-text">
                                            PTT GENEL MÜDÜRLÜĞÜ
                                        </h4>
                                        <h6 className="d-flex opensans-title text-muted m-0">
                                            SUMMER 2016
                                        </h6>
                                        <h5>
                                            I did an internship at PTT’s Project Management Department as a Java
                                            Developer. Here I created a desktop application which was able to manage all
                                            the projects that company had. The application was based on basic management
                                            applications.
                                        </h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <h6 className="pacifico-font">
                                            Security Analyst / Secure Developer
                                        </h6>
                                        <h4 className="opensans-title text-left shadowed-text">
                                            BEAM TEKNOLOJİ A. Ş.
                                        </h4>
                                        <h6 className="d-flex opensans-title text-muted m-0">
                                            2017 - 2018
                                        </h6>
                                        <h5>
                                            Started as an intern and later was offered a part-time job. Had vocation for
                                            about 3 months because of my thesis. Last 5 months I was working full-time.
                                            I was responsible for development and maintenance of the phishing project
                                            that company owned. As a secure developer I had to consider security issues
                                            that the application could go through and fix them before the deployment of
                                            the application and also add features to the existing application. As a Web
                                            Security Analyst I have had 3 projects to test for security vulnerabilities
                                            and report them with solutions. These projects belonged to some of the
                                            biggest companies in Turkey.
                                        </h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <h6 className="pacifico-font">
                                            PhP Developer
                                        </h6>
                                        <h4 className="opensans-title text-left shadowed-text">
                                            Paysera
                                        </h4>
                                        <h6 className="d-flex opensans-title text-muted m-0">
                                            2018 - Now
                                        </h6>
                                        <h5>
                                            Responsible for implementing gateways for company partners. Implementation
                                            not only must be according to the company's code style, but also should
                                            secure and safe. These gateways are implemented inside the main project at
                                            first and later when ready are separated into libraries. These libraries
                                            also contain their own unit and functional tests.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <ol className="carousel-indicators position-static mb-0">
                                <li data-target="#experienceCarousel" data-slide-to="0"
                                    className="custom-indicator active"></li>
                                <li data-target="#experienceCarousel" data-slide-to="1"
                                    className="custom-indicator"></li>
                                <li data-target="#experienceCarousel" data-slide-to="2"
                                    className="custom-indicator"></li>
                            </ol>
                        </div>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Experiences;
