import React, {Component} from 'react';
import moment from 'moment';
import InfoBlock from "./InfoBlock";

class Skills extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        return (
            <InfoBlock title={"Skills"} content={(
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <h6 className="opensans-title">
                            C# .Net
                        </h6>

                        <div className="progress rounded" style={{'height': '8px'}}>
                            <div className="progress-bar" role="progressbar" style={{'width': '75%'}} aria-valuenow="75"
                                 aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <h6 className="opensans-title">
                            C/C++
                        </h6>

                        <div className="progress rounded" style={{'height': '8px'}}>
                            <div className="progress-bar" role="progressbar" style={{'width': '90%'}} aria-valuenow="90"
                                 aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <h6 className="opensans-title">
                            Java
                        </h6>

                        <div className="progress rounded" style={{'height': '8px'}}>
                            <div className="progress-bar" role="progressbar" style={{'width': '85%'}} aria-valuenow="85"
                                 aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <h6 className="opensans-title">
                            PhP
                        </h6>

                        <div className="progress rounded" style={{'height': '8px'}}>
                            <div className="progress-bar" role="progressbar" style={{'width': '90%'}} aria-valuenow="90"
                                 aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <h6 className="opensans-title">
                            Web (HTML5, CSS3, JS)
                        </h6>

                        <div className="progress rounded" style={{'height': '8px'}}>
                            <div className="progress-bar" role="progressbar" style={{'width': '95%'}} aria-valuenow="95"
                                 aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <h6 className="opensans-title">
                            Git
                        </h6>

                        <div className="progress rounded" style={{'height': '8px'}}>
                            <div className="progress-bar" role="progressbar" style={{'width': '95%'}} aria-valuenow="95"
                                 aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            )}/>
        );
    }
}

export default Skills;
