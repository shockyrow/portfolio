import React, {Component} from 'react';
import TheGuy from '../../storage/img/the_man.jpg';
import moment from 'moment';

class About extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <div className="d-flex flex-wrap flex-row-reverse justify-content-center">
                <div className="col-sm-6">
                    <img src={TheGuy} className="w-100"/>
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <div className="display-1">
                        Hello!
                    </div>
                    <h2>
                        IBROKHIM SHOKIROV
                    </h2>
                    <h5>
                        Computer Engineer
                    </h5>
                </div>
            </div>
        );
    }
}

export default About;
