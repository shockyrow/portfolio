import React, {Component, Fragment} from 'react';
import CV from '../../assets/other/CV.pdf';
import moment from 'moment';

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
                            Computer Engineer
                        </h5>

                        <a href={CV} className="btn btn-lg btn-outline-dark shadow mt-5" download="IbrokhimShokirovCV">
                            <span className="pr-3">
                                <i className="fa fa-download">
                                </i>
                            </span>
                            CV / Resume
                        </a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Welcome;
