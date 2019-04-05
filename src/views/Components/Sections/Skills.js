import React, {Component, Fragment} from 'react';
import InfoBlock from "../InfoBlock";
import Data from "../../../assets/json/skills";

class Skills extends Component {
    render() {
        let children = Data["children"].map(
            (item) => (
                <Fragment>
                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <div className="btn btn-block btn-light border shadow-sm p-2">
                            <h6 className="opensans-title">
                                {item["name"]}
                            </h6>

                            <div className="progress rounded" style={{height: '14px', boxShadow: 'inset 0 0 2px 0 silver'}}>
                                <div className="progress-bar rounded" role="progressbar" style={{width: item["progress"] + '%'}}
                                     aria-valuenow={item["progress"]} aria-valuemin="0" aria-valuemax="100">
                                    <small className="font-weight-bold">{item["progress"] + '%'}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        );

        return (
            <InfoBlock title={Data["title"]} content={(
                <div className="row">
                    {children}
                </div>
            )}/>
        );
    }
}

export default Skills;
