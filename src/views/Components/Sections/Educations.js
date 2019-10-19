import React, {Component, Fragment} from 'react';
import SectionItem from "../SectionItem";
import Data from '../../../assets/json/educations';

class Educations extends Component {
    render() {
        let children = Data["children"].map(
            (item, index) => (
                <Fragment key={"education" + index}>
                    {index !== 0 ? (
                        <div className="dropdown-divider my-3">
                        </div>
                    ) : null}

                    <div>
                        <h4 className="text-left shadowed-text">
                            {item["title"]}
                        </h4>

                        <h5 className="text-left shadowed-text">
                            {item["degree"]}
                        </h5>

                        <h6 className="text-left shadowed-text">
                            {item["institution"]}
                        </h6>

                        <div className="small">
                            GPA: {item["GPA"]}
                        </div>

                        <h6 className="d-flex lead small text-secondary">

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

export default Educations;
