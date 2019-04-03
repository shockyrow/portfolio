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
                        <div>
                            <h6 className="pacifico-font">
                                Bachelor of Science Degree
                                <span className="text-muted pl-2">2014 - 2018</span>
                            </h6>
                            <h4 className="opensans-title text-left shadowed-text">
                                Computer Engineering at Gazi University
                            </h4>
                            <h6 className="d-flex opensans-title">
                                <div>
                                    GPA:
                                    <span className="text-muted pl-2">2.85/4</span>
                                </div>
                            </h6>
                            <h5>
                                My university life had little less social activities so I had more time to develop
                                myself.
                            </h5>
                        </div>

                        <div className="dropdown-divider my-3">
                        </div>

                        <div>
                            <h6 className="pacifico-font">
                                High School
                                <span className="text-muted pl-2">2008 - 2013</span>
                            </h6>
                            <h4 className="opensans-title text-left shadowed-text">
                                Lyceum for Gifted Students in Dushanbe
                            </h4>
                            <h6 className="d-flex opensans-title m-0">
                                <div>
                                    GPA:
                                    <span className="text-muted pl-2">5.0/5</span>
                                </div>
                            </h6>
                            <h5 className="pacifico-font text-muted">

                            </h5>
                            <h5>
                                My high school life was full of social and educational activities. Some of my
                                achievements from these activities are listed in the achievement section below.
                            </h5>
                        </div>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Educations;
