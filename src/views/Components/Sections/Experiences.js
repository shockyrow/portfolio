import React, {Component, Fragment} from 'react';
import SectionItem from "../SectionItem";
import Data from '../../../assets/json/experiences';

class Experiences extends Component {
    render() {
        let children = Data["children"].map(
            (item, index) => (
                <Fragment key={"experience" + index}>
                    {index !== 0 ? (
                        <div className="dropdown-divider my-3">
                        </div>
                    ) : null}

                    <div>
                        <h4 className="text-justify shadowed-text">
                            {item["title"]}
                        </h4>

                        <h6 className="text-justify">
                            {item["company"]}
                        </h6>

                        <h6 className="d-flex lead text-muted small">
                            {item["duration"]}
                        </h6>

                        <p className="lead">
                            {item["description"]}
                        </p>
                    </div>
                </Fragment>
            )
        );

        return (
            <Fragment>
                <SectionItem title={Data["title"]} content={(
                    <Fragment>
                        {children}
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Experiences;
