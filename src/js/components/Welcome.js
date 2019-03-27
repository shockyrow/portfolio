import React, {Component} from 'react';
import TheGuy from '../../storage/img/the_man.jpg';
import CV from '../../storage/other/CV.pdf';
import moment from 'moment';

class Welcome extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <div className="d-flex flex-wrap flex-row-reverse justify-content-center">
                <div className="col-sm-6">
                    <img src={TheGuy} className="w-100" alt="Ibrokhim Shokirov"/>
                </div>

                <div className="col d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="display-4 oleo-script-font font-weight-bold">
                        Ibrokhim Shokirov
                    </div>

                    <h4 className="pacifico-font text-warning">
                        Computer Engineer
                    </h4>

                    <a href={CV} className="btn btn-lg btn-dark my-3" download="IbrokhimShokirovCV">
                        Download CV
                    </a>
                </div>
            </div>
        );
    }
}

export default Welcome;
