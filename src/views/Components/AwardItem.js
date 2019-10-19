import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class AwardItem extends Component {
    render() {
        return (
            <Fragment>
                <div className="btn btn-block btn-light border shadow-sm p-3 award-bg">
                    <p className="text-right">
                        {this.props.title}
                    </p>

                    <h5 className="lead shadowed-text d-flex align-items-center justify-content-end text-right pl-5" style={{height: '108px'}}>
                        {this.props.description}
                    </h5>

                    <h6 className="lead small text-secondary text-right mb-0">
                        {this.props.location}
                    </h6>

                    <h6 className="lead small text-secondary text-right">
                        {this.props.year}
                    </h6>
                </div>
            </Fragment>
        );
    }
}

AwardItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default AwardItem;
