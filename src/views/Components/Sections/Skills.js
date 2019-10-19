import React, {Component, Fragment} from 'react';
import SectionItem from "../SectionItem";
import SkillItem from "../SkillItem";
import Data from "../../../assets/json/skills";

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'showMore': false,
        };

        this.toggleShow = this.toggleShow.bind(this);
    }

    render() {
        let children = Data["children"].slice(0, this.state.showMore ? Data['children'].length : Data['visible']).map(
            (item, index) => (
                <Fragment key={"skill" + index}>
                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <SkillItem
                            title={item['name']}
                            level={item['level']}
                        />
                    </div>
                </Fragment>
            )
        );

        return (
            <SectionItem title={Data["title"]} content={(
                <div className="row d-flex">
                    {children}
                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <button onClick={this.toggleShow} className="btn btn-block btn-light border shadow-sm w-100 h-100">
                            <h6 className="shadowed-text m-0 py-2">
                                {this.state.showMore ? "Show less" : "Show more"}
                            </h6>
                        </button>
                    </div>
                </div>
            )}/>
        );
    }

    toggleShow() {
        this.setState({
            'showMore': this.state.showMore ^ true,
        })
    }
}

export default Skills;
