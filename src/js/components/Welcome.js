import React, {Component, Fragment} from 'react';
import TheGuy from '../../storage/img/the_man.jpg';
import CV from '../../storage/other/CV.pdf';
import moment from 'moment';

class Welcome extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <Fragment>
                <div className="d-flex flex-wrap flex-row-reverse justify-content-center">
                    <div className="col-sm-6">
                        <img src={TheGuy} className="w-100" alt="Ibrokhim Shokirov"/>
                    </div>

                    <div className="col d-flex flex-column justify-content-center align-items-center text-center mt-3">
                        <h2 className="display-4 pacifico-font font-weight-bold text-warning">
                            Ibrokhim Shokirov
                        </h2>

                        <h5 className="pacifico-font text-muted">
                            Computer Engineer
                        </h5>

                        <a href={CV} className="btn btn-secondary text-light shadow my-3" download="IbrokhimShokirovCV">
                            <span className="pr-3">
                                <i className="fa fa-download">
                                </i>
                            </span>
                            Download Resume
                        </a>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Welcome;
