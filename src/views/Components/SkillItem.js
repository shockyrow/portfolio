import React, {Component, Fragment} from 'react';
import '../../assets/scss/SkillBlock.scss';
import PropTypes from 'prop-types';

class SkillItem extends Component {
    render() {
        return (
            <Fragment>
                <div className="btn btn-block btn-light border shadow-sm d-flex align-items-center py-3">
                    <h6 className="shadowed-text text-left m-0">
                        {this.props.title}
                    </h6>
                    <h6 className="small ml-auto m-0">
                        {this.props.level}
                    </h6>
                </div>
            </Fragment>
        );
    }
}

SkillItem.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
};

export default SkillItem;
