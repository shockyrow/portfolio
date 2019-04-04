import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="card bg-light shadow">
                <div className="card-body">
                    <a href="#" className="btn btn-light text-primary social-btn">
                        <i className="fa fa-facebook">
                        </i>
                        <div className="px-2">
                            Ibrokhim Shokirov
                        </div>
                    </a>

                    <a href="#" className="btn btn-light text-primary social-btn">
                        <i className="fa fa-2x fa-twitter">
                        </i>
                        <div className="px-2">
                            Ibrokhim Shokirov
                        </div>
                    </a>

                    <a href="#" className="btn btn-light text-danger social-btn">
                        <i className="fa fa-2x fa-youtube-play">
                        </i>
                        <div className="px-2">
                            Ibrokhim Shokirov
                        </div>
                    </a>

                    <a href="https://github.com/lucky-bug" target="_blank" className="btn btn-light text-dark social-btn">
                        <i className="fa fa-2x fa-github">
                        </i>
                        <div className="px-2">
                            lucky-bug
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
