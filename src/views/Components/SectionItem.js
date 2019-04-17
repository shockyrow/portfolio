import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SectionItem extends Component {
    render() {
        return (
            <div className="card border-white shadow-lg">
                <div className="card-body text-justify">
                    <div className="py-2">
                        <h5 className="opensans-title bg-light border border-light text-dark shadow rounded py-1 px-3 block-title">
                            {this.props.title}
                        </h5>
                    </div>

                    {this.props.content}
                </div>
            </div>
        );
    }
}

SectionItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
};

export default SectionItem;
