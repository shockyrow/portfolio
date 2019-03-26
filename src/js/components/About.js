import React, {Component} from 'react';
import TheGuy from '../../storage/img/the_man.jpg';
import '../../css/About.css';
import moment from 'moment';

class About extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <div className="d-flex flex-wrap flex-row-reverse justify-content-center">
                <div className="col-sm-6">
                    <img src={TheGuy} className="w-100"/>
                </div>

                <div className="col d-flex flex-column justify-content-center align-items-center text-center">
                    <div className="display-4 corben-font font-weight-bold">
                        IBROKHIM SHOKIROV
                    </div>

                    <h4 className="pacifico-font text-warning my-3">
                        Computer Engineer
                    </h4>

                    <button className="btn btn-lg btn-dark my-2">
                        Download CV
                    </button>
                </div>
            </div>
        );
    }
}

export default About;
