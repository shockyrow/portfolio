import React, {Component, Fragment} from 'react';
import InfoBlock from "../InfoBlock";
import Data from '../../../assets/json/accomplishments';

class Accomplishments extends Component {
    render() {
        let children = Data["children"].map(
            (item, index) => {
                let trophyClass = item["type"] === "medal" ? "fa-trophy" : "fa-certificate gold-trophy";

                switch (item["title"]) {
                    case "1st Place":
                        trophyClass += " gold-trophy";
                        break;
                    case "2nd Place":
                        trophyClass += " silver-trophy";
                        break;
                    case "3rd Place":
                        trophyClass += " bronze-trophy";
                        break;
                    default:
                        trophyClass += "";
                        break;
                }

                return (
                    <div className="col-md-6 col-lg-4 my-2">
                        <div className="btn btn-block btn-light border shadow-sm p-3">
                            <h6>
                                <i className={"fa fa-4x px-2 " + trophyClass}/>
                            </h6>

                            <h6 className="pacifico-font">
                                {item["title"]}
                            </h6>

                            <h5 className="opensans-title shadowed-text d-flex align-items-center justify-content-center" style={{height: '108px'}}>
                                {item["description"]}
                            </h5>

                            <h6 className="text-secondary">
                                {item["year"]}
                            </h6>

                            <h6 className="text-secondary">
                                {item["location"]}
                            </h6>
                        </div>
                    </div>
                )
            }
        );

        return (
            <Fragment>
                <InfoBlock title={Data["title"]} content={(
                    <div className="d-flex flex-wrap align-items-stretch">
                        {children}
                    </div>
                )}/>
            </Fragment>
        );
    }
}

export default Accomplishments;
