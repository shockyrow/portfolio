import React, {Component, Fragment} from 'react';
import SectionItem from "../SectionItem";
import Data from '../../../assets/json/projects';
import ProjectItem from "../ProjectItem";

class Projects extends Component {
    render() {
        let children = Data["children"].map(
            (item, index) => (
                <Fragment key={"project" + index}>
                    {index !== 0 ? (
                        <div className="dropdown-divider my-3">
                        </div>
                    ) : null}

                    <ProjectItem title={item["title"]} description={item["description"]} details={item["details"]}/>
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

export default Projects;
