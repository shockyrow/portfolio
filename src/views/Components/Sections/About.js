import React, {Component, Fragment} from 'react';
import Data from '../../../assets/json/about';
import moment from 'moment';
import SectionItem from "../SectionItem";

class About extends Component {
    age = moment().diff(moment([1994, 6, 28]), 'year');

    render() {
        let children = Data['children'].map((item, index) => (
            <p key={"about" + index}>{item}</p>
        ));

        return (
            <Fragment>
                <SectionItem title={"About"} content={(
                    <Fragment>
                        <div className="lead">
                            {/*<p>
                                As long as I remember myself I wanted to become a successful Computer Engineer working for
                                some big successful company someday. I started working on my dream when I went to high
                                school. I started programming there and after 2 years of practice I started participating in
                                some national and international olympiads in informatics. These were algorithm based
                                olympiads for which I had to learn lots of algorithms in informatics and be able to
                                implement them in given tasks.
                            </p>

                            <p>
                                After high school when I got to university I had a project from one of my professors. The
                                reason behind this project was for me to improve myself, understand steganography and also
                                pour one of the most famous steganography algorithms “LSB Steganography” into codes which I
                                was able to do using C#. Later while still at university I participated in 2 ethical hacking
                                competitions. The reason behind these participations were that after my steganography
                                application I was interested in data security which lead me to Cyber Security. That is how I
                                got interested in security issues that applications could encounter and ways for solving
                                them. This competitions helped me get noticed by security companies.
                            </p>

                            <p className="m-0">
                                Also I want to mention that my education is not over until I get PhD in Computer
                                Engineering. Of course I have still a long way to achieve my dream but I am sure that it is
                                not far away from where I stand today.
                            </p>*/}
                            {children}
                        </div>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default About;
