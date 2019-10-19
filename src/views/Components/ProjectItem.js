import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    render() {
        let details = Object.keys(this.props.details).map(
            (item, index) => (
                <h6 className="d-flex" key={"project" + index}>
                    <span className="text-capitalize text-secondary">{item}</span>:
                    <span className="pl-2">{Array.isArray(this.props.details[item]) ? this.props.details[item].join(', ') : this.props.details[item]}</span>
                </h6>
            )
        );

        return (
            <div>
                <h4 className="text-left font-weight-bold shadowed-text">
                    {this.props.title}
                </h4>

                {details}

                <p className="lead">
                    {this.props.description}
                </p>
            </div>
        );
    }
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.object.isRequired,
};

export default ProjectItem;
