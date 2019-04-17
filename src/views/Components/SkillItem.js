import React, {Component, Fragment} from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import '../../assets/scss/SkillBlock.scss';
import PropTypes from 'prop-types';

class SkillItem extends Component {
    render() {
        return (
            <Fragment>
                <div className="btn btn-block btn-light border shadow-sm d-flex align-items-center">
                    <div className="p-1" style={{height: '52px', width: '52px'}}>
                        <CircularProgressbar
                            text={this.props.progress}
                            percentage={this.props.progress}
                        />
                    </div>

                    <h6 className="opensans-title shadowed-text col text-left m-0">
                        {this.props.title}
                    </h6>
                </div>
            </Fragment>
        );
    }
}

SkillItem.propTypes = {
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
};

export default SkillItem;
