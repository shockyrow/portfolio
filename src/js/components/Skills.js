import React, {Component} from 'react';
import '../../css/About.css';
import moment from 'moment';

class Skills extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <div className="Skills d-flex flex-wrap align-items-stretch">
                <div className="col-md">
                    <div className="bg-white rounded shadow-lg h-100">
                        <h1 className="flex-fill text-center pacifico-font text-primary p-3">
                            Programming
                        </h1>

                        <div className="col">
                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    C# .Net
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    C/C++
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Java
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    PhP
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Web (HTML5, CSS3, JS)
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-primary" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md">
                    <div className="bg-white rounded shadow-lg h-100">
                        <h1 className="flex-fill text-center pacifico-font text-warning p-3">
                            Languages
                        </h1>

                        <div className="col">
                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Tajik (Native)
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Persian
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Turkish
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    English
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Russian
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '65%'}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Arabic
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{'width': '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="bg-white rounded shadow-lg h-100">
                        <h1 className="flex-fill text-center pacifico-font text-danger p-3">
                            Skills
                        </h1>

                        <div className="col">
                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Tajik (Native)
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{'width': '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Persian
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <h5 className="font-weight-bold">
                                    Turkish
                                </h5>

                                <div className="progress rounded" style={{'height': '8px'}}>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
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
