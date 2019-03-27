import React, {Component} from 'react';
import moment from 'moment';

class Skills extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <div className="Skills row py-3" id="skills">
                <div className="col-md-4 my-3">
                    <div className="bg-white rounded shadow-lg h-100">
                        <h5 className="flex-fill text-center opensans-title text-primary p-3">
                            Programming
                        </h5>

                        <div className="col">
                            <div className="my-3">
                                <h6 className="opensans-title">
                                    C# .Net
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    C/C++
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Java
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    PhP
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Web (HTML5, CSS3, JS)
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-3">
                    <div className="bg-white rounded shadow-lg h-100">
                        <h5 className="flex-fill text-center opensans-title text-warning p-3">
                            Languages
                        </h5>

                        <div className="col">
                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Tajik (Native)
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Persian
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Turkish
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    English
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Russian
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Arabic
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 my-3">
                    <div className="bg-white rounded shadow-lg h-100">
                        <h5 className="flex-fill text-center opensans-title text-danger p-3">
                            Databases
                        </h5>

                        <div className="col">
                            <div className="my-3">
                                <h6 className="opensans-title">
                                    MySQL
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    MsSQL
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Mongo DB
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{'width': '55%'}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h6 className="opensans-title">
                                    Oracle DB
                                </h6>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{'width': '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
