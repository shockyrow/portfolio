import React, {Component, Fragment} from 'react';
import CV from '../../../assets/other/CV.pdf';
import moment from 'moment';
import ReactTypingEffect from 'react-typing-effect';

class Welcome extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <Fragment>
                <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="my-5 py-5">
                        <h2 className="display-4 pacifico-font font-weight-bold text-dark shadowed-text">
                            Ibrokhim Shokirov
                        </h2>

                        <h5 className="pacifico-font text-muted shadowed-text">
                            <ReactTypingEffect
                                text={["Computer Engineer", "Web Developer", "Web Security Analyst"]}
                                speed={100}
                            />
                        </h5>

                        <div className="text-center">
                            <a href={CV} className="btn btn-lg btn-outline-dark shadow mt-5" download="IbrokhimShokirovCV">
                                <span className="px-1"><i className="fa fa-download"></i></span>
                                <span className="px-1">CV / Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Welcome;
