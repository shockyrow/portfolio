import React, {Component, Fragment} from 'react';
import InfoBlock from "../InfoBlock";
import Data from '../../../assets/json/experiences';

class Experiences extends Component {
    render() {
        let children = Data["children"].map(
            (item, index) => (
                <Fragment>
                    {index !== 0 ? (
                        <div className="dropdown-divider my-3">
                        </div>
                    ) : null}

                    <div>
                        <h6 className="pacifico-font text-secondary">
                            {item["company"]}
                        </h6>

                        <h4 className="opensans-title text-left shadowed-text">
                            {item["title"]}
                        </h4>

                        <h6 className="d-flex opensans-title text-muted small">
                            {item["duration"]}
                        </h6>

                        <h5>
                            {item["description"]}
                        </h5>
                    </div>
                </Fragment>
            )
        );

        return (
            <Fragment>
                <InfoBlock title={Data["title"]} content={(
                    <Fragment>
                        {children}
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Experiences;
