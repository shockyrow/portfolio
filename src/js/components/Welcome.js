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

                    <div className="col d-flex flex-column justify-content-center align-items-center text-center">
                        <div className="display-4 oleo-script-font font-weight-bold text-primary">
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

                <div className="card shadow-lg border-0">
                    <div className="card-body text-justify">
                        <h5>
                            I am a {this.age} years old Computer Engineer from Tajikistan. Currently living in
                            Ankara/Turkey. I was programming since 2008. I started programming with C/C++.
                        </h5>

                        <h5 className="m-0">
                            I am a {this.age} years old Computer Engineer from Tajikistan. Currently living in
                            Ankara/Turkey. I was programming since 2008. I started programming with C/C++.
                        </h5>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Welcome;
