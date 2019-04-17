import React, {Component, Fragment} from 'react';
import SectionItem from "../SectionItem";
import Data from '../../../assets/json/accomplishments';
import AwardItem from "../AwardItem";

class Accomplishments extends Component {
    render() {
        let children = Data["children"].map(
            (item, index) => {
                let trophyClass = item["type"] === "medal" ? "fa-trophy" : "fa-certificate";

                return (
                    <div className="col-md-6 col-lg-4 my-2">
                        <AwardItem
                            title={item["title"]}
                            description={item["description"]}
                            year={item["year"]}
                            location={item["location"]}
                            type={item["type"]}
                        />
                    </div>
                )
            }
        );

        return (
            <Fragment>
                <SectionItem title={Data["title"]} content={(
                    <div className="row d-flex flex-wrap align-items-stretch">
                        {children}
                    </div>
                )}/>
            </Fragment>
        );
    }
}

export default Accomplishments;
