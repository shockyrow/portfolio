import React, {Component} from 'react';
import '../../css/About.css';
import moment from 'moment';

class About extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <div className="card bg-light shadow-sm">
                <div className="card-body">
                    This is about me
                </div>
            </div>
        );
    }
}

export default About;
