import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="card bg-light shadow">
                <div className="card-body">
                    <a href="#" className="btn btn-light text-primary social-btn">
                        <i className="fa fa-2x fa-facebook-square">
                        </i>
                        <div className="px-2">
                            Facebook
                        </div>
                    </a>

                    <a href="#" className="btn btn-light text-primary social-btn">
                        <i className="fa fa-2x fa-twitter-square">
                        </i>
                        <div className="px-2">
                            Twitter
                        </div>
                    </a>

                    <a href="#" className="btn btn-light text-danger social-btn">
                        <i className="fa fa-2x fa-youtube-square"></i>
                        <div className="px-2">
                            YouTube
                        </div>
                    </a>

                    <a href="https://github.com/lucky-bug" target="_blank" className="btn btn-light text-dark social-btn">
                        <i className="fa fa-2x fa-github-square"></i>
                        <div className="px-2">
                            GitHub
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
