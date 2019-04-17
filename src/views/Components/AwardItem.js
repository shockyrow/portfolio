import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class AwardItem extends Component {
    render() {
        let trophyClass = this.props.type === "medal" ? "fa-trophy" : "fa-certificate";

        return (
            <Fragment>
                <div className="btn btn-block btn-light border shadow-sm p-3">
                    <h6>
                        <i className={"fa fa-4x px-2 text-white trophy " + trophyClass}/>
                    </h6>

                    <h6 className="pacifico-font text-secondary">
                        {this.props.title}
                    </h6>

                    <h5 className="opensans-title shadowed-text d-flex align-items-center justify-content-center" style={{height: '108px'}}>
                        {this.props.description}
                    </h5>

                    <h6 className="pacifico-font text-secondary">
                        {this.props.year}
                    </h6>

                    <h6 className="pacifico-font text-secondary">
                        {this.props.location}
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
