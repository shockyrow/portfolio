import React, {Component, Fragment} from 'react';
import moment from 'moment';
import InfoBlock from "./InfoBlock";

class Educations extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <Fragment>
                <InfoBlock title={"Educations"} content={(
                    <Fragment>
                        <div id="educationCarousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div>
                                        <h6 className="pacifico-font">
                                            High School
                                        </h6>
                                        <h4 className="opensans-title text-left shadowed-text">
                                            Lyceum for Gifted Students in Dushanbe
                                        </h4>
                                        <h6 className="d-flex opensans-title m-0">
                                            <div>
                                                GPA:
                                                <div className="text-muted">5.0/5</div>
                                            </div>

                                            <div className="px-2">
                                                Duration:
                                                <div className="text-muted">2008 - 2013</div>
                                            </div>
                                        </h6>
                                        <h5 className="pacifico-font text-muted">

                                        </h5>
                                        <h5>
                                            My high school life was full of social and educational activities. Some of my
                                            achievements from these activities are listed in the achievement section below.
                                        </h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div>
                                        <h6 className="pacifico-font">
                                            Bachelor’s Degree
                                        </h6>
                                        <h4 className="opensans-title text-left shadowed-text">
                                            Computer Engineering at Gazi University
                                        </h4>
                                        <h6 className="d-flex opensans-title">
                                            <div>
                                                GPA:
                                                <div className="text-muted">2.85/4</div>
                                            </div>

                                            <div className="px-2">
                                                Duration:
                                                <div className="text-muted">2014 - 2018</div>
                                            </div>
                                        </h6>
                                        <h5>
                                            My university life had little less social activities so I had more time to develop
                                            myself.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <ol className="carousel-indicators position-static mb-0">
                                <li data-target="#educationCarousel" data-slide-to="0" className="custom-indicator active"></li>
                                <li data-target="#educationCarousel" data-slide-to="1" className="custom-indicator"></li>
                            </ol>
                        </div>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Educations;
