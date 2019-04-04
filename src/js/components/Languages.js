import React, {Component, Fragment} from 'react';
import InfoBlock from "./InfoBlock";

class Languages extends Component {
    render() {
        return (
            <Fragment>
                <InfoBlock title={"Languages"} content={(
                    <Fragment>
                        Persian
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Languages;
