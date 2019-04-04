import React, {Component, Fragment} from 'react';
import InfoBlock from "./InfoBlock";
import Data from '../../assets/json/experiences';

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
                        <h6 className="pacifico-font">
                            {item["company"]}
                        </h6>
                        <h4 className="opensans-title text-left shadowed-text">
                            {item["title"]}
                        </h4>
                        <h6 className="d-flex opensans-title text-muted">
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
                        <div>
                            <h6 className="pacifico-font">
                                Paysera
                            </h6>
                            <h4 className="opensans-title text-left shadowed-text">
                                PhP Developer
                            </h4>
                            <h6 className="d-flex opensans-title text-muted">
                                2018 - Now
                            </h6>
                            <h5>
                                Description and responsibilities here!
                            </h5>
                        </div>

                        <div className="dropdown-divider my-3">
                        </div>

                        <div>
                            <h6 className="pacifico-font">
                                BEAM Teknoloji A. Ş.
                            </h6>
                            <h4 className="opensans-title text-left shadowed-text">
                                Web Security Analyst & Secure Developer
                            </h4>
                            <h6 className="d-flex opensans-title text-muted">
                                2017 - 2018
                            </h6>
                            <h5>
                                Description and responsibilities here!
                            </h5>
                        </div>

                        <div className="dropdown-divider my-3">
                        </div>

                        <div>
                            <h6 className="pacifico-font">
                                PTT Genel Müdürlüğü
                            </h6>
                            <h4 className="opensans-title text-left shadowed-text">
                                Java Developer
                            </h4>
                            <h6 className="d-flex opensans-title text-muted">
                                SUMMER 2016
                            </h6>
                            <h5>
                                Description and responsibilities here!
                            </h5>
                        </div>

                        <div className="dropdown-divider my-3">
                        </div>

                        <div>
                            <h6 className="pacifico-font">
                                İm Park Eğitim Bilişim Ltd. Şti.
                            </h6>
                            <h4 className="opensans-title text-left shadowed-text">
                                C# Developer
                            </h4>
                            <h6 className="d-flex opensans-title text-muted">
                                JANUARY 2016 - MAY 2016
                            </h6>
                            <h5>
                                Description and responsibilities here!
                            </h5>
                        </div>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Experiences;
