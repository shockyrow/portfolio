import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
    render() {
        let details = Object.keys(this.props.details).map(
            (item, index) => (
                <small className="d-flex text-secondary">
                    <span className="text-capitalize">{item}</span>:
                    <span className="text-muted pl-2">{Array.isArray(this.props.details[item]) ? this.props.details[item].join(', ') : this.props.details[item]}</span>
                </small>
            )
        );

        return (
            <div>
                <h4 className="opensans-title text-left shadowed-text">
                    {this.props.title}
                </h4>

                <h5>
                    {this.props.description}
                </h5>

                <div className="border-top pt-2">
                    {details}
                </div>
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
