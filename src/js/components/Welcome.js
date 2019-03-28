import React, {Component, Fragment} from 'react';
import TheGuy from '../../storage/img/me.jpeg';
import CV from '../../storage/other/CV.pdf';
import moment from 'moment';

class Welcome extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <Fragment>
                <div className="d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="col-8 col-md-4 pt-5">
                            <img src={TheGuy} className="img-fluid rounded-circle shadow-lg" alt="Ibrokhim Shokirov"/>
                        </div>
                    </div>

                    <div className="d-flex flex-column justify-content-center align-items-center text-center mt-5">
                        <h2 className="display-4 pacifico-font font-weight-bold text-primary">
                            Ibrokhim Shokirov
                        </h2>

                        <h5 className="pacifico-font">
                            Computer Engineer
                        </h5>

                        <a href={CV} className="btn btn-lg bg-light shadow my-5" download="IbrokhimShokirovCV">
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
