import React, {Component, Fragment} from 'react';
import SectionItem from "../SectionItem";
import Data from '../../../assets/json/awards';
import AwardItem from "../AwardItem";

class Awards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'showMore': false,
        };

        this.toggleShow = this.toggleShow.bind(this);
    }

    render() {
        let children = Data["children"].slice(0, this.state.showMore ? Data['children'].length : Data['visible']).map(
            (item, index) => {
                return (
                    <div className="col-md-6 col-lg-4 my-2" key={"award" + index}>
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
                    <Fragment>
                        <div className="row d-flex flex-wrap align-items-stretch justify-content-center">
                            {children}
                            <div className="col-md-6 col-lg-4 my-2">
                                <div className="h-100 w-100 d-flex align-items-center justify-content-center">
                                    <button onClick={this.toggleShow} className="btn btn-lg btn-light border shadow-sm p-3">
                                        <h6 className="shadowed-text col text-center m-0">
                                            {this.state.showMore ? "Show less" : "Show more"}
                                        </h6>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }

    toggleShow() {
        this.setState({
            'showMore': this.state.showMore ^ true,
        })
    }
}

export default Awards;
