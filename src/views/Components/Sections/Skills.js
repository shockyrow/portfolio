import React, {Component, Fragment} from 'react';
import InfoBlock from "../InfoBlock";
import SkillBlock from "../SkillBlock";
import Data from "../../../assets/json/skills";

class Skills extends Component {
    render() {
        let children = Data["children"].map(
            (item) => (
                <Fragment>
                    <div className="col-sm-6 col-md-4 col-lg-3 my-2">
                        <SkillBlock title={item['name']} progress={item['progress']}/>
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
