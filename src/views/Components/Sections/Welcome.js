import React, {Component, Fragment} from 'react';
import CV from '../../../assets/other/CV.pdf';
import moment from 'moment';
import ReactTypingEffect from 'react-typing-effect';
import Header from "../Header";

class Welcome extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <Fragment>
                <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
                    <Header/>

                    <div className="my-5 py-5 px-2">
                        <div>
                            <div className="display-4 text-center text-md-left my-2">
                                <span className="badge badge-pill badge-secondary shadow px-3 py-2" style={{borderBottomLeftRadius: '32px'}}>Hello, I am</span>
                            </div>

                            <div className="oleo-script-font display-2 font-weight-bold text-dark shadowed-text">
                                Ibrokhim Shokirov.
                            </div>
                        </div>

                        <h2 className="pacifico-font text-muted shadowed-text">
                            <ReactTypingEffect
                                staticText={"I am a"}
                                text={["Computer Engineer!", "Developer!", "Web Security Analyst!"]}
                                speed={100}
                            />
                        </h2>

                        <div className="text-center">
                            <a href={CV} className="btn btn-lg btn-outline-primary shadow mt-5" download="IbrokhimShokirovCV">
                                <span className="px-1"><i className="fa fa-download"/></span>
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
