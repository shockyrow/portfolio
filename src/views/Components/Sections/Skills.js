import React, {Component, Fragment} from 'react';
import SectionItem from "../SectionItem";
import SkillItem from "../SkillItem";
import Data from "../../../assets/json/skills";

class Skills extends Component {
    render() {
        let children = Data["children"].map(
            (item) => (
                <Fragment>
                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <SkillItem
                            title={item['name']}
                            progress={item['progress']}
                        />
                    </div>
                </Fragment>
            )
        );

        return (
            <SectionItem title={Data["title"]} content={(
                <div className="row">
                    {children}
                </div>
            )}/>
        );
    }
}

export default Skills;
