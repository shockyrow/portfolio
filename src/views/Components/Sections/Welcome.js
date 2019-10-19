import React, {Component, Fragment} from 'react';
import CV from '../../../assets/other/CV.pdf';
import Data from '../../../assets/json/welcome';
import moment from 'moment';
import ReactTypingEffect from 'react-typing-effect';

class Welcome extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        let links = Data['links'].map((item, index) => (
            <Fragment key={"link" + index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <i className={"fa " + item.class}>
                    </i>
                </a>
            </Fragment>
        ));

        return (
            <Fragment>
                <div className="d-flex flex-column justify-content-center text-center" style={{height: 'calc(100vh - 110px)'}}>
                    <div className="pb-5 mb-5 px-2" style={{position: 'relative', zIndex: 1}}>
                        <div className="d-inline-block">
                            <div className="h1 text-center text-md-left my-2">
                                <span className="badge badge-pill badge-primary shadow px-3 py-2" style={{borderBottomLeftRadius: '32px'}}>
                                    {Data['greeting']}
                                </span>
                            </div>

                            <div className="oleo-script-font display-3 font-weight-bold text-dark shadowed-text mt-3">
                                {Data['name']}
                            </div>
                        </div>

                        <h4 className="pacifico-font text-secondary shadowed-text">
                            <ReactTypingEffect
                                staticText={""}
                                text={Data['titles']}
                                speed={100}
                            />
                        </h4>

                        <div className="mt-5 mb-3">
                            <div className="btn-group btn-group-lg shadow border rounded">
                                {links}

                                <a href={CV} className="btn btn-primary d-flex align-items-center font-weight-bold" download="IbrokhimShokirovCV">
                                    <h5 className="m-0 opensans-title">CV</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Welcome;
