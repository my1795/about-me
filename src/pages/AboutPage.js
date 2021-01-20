import React from 'react';
import {Link} from 'react-router-dom';
import {VerticalTimeline, VerticalTimelineElement,} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaNetworkWired} from 'react-icons/fa';
import {AiOutlineCloud,AiTwotoneDollar, AiTwotoneTrophy} from 'react-icons/ai';

const AboutPage = (props) => {


    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020 December"
                icon={<AiOutlineCloud/>}
                iconStyle={{background: 'rgb(200, 43, 121)', color: '#fff'}}
            >
                <h3 className="vertical-timeline-element-title">Netas/NetRD Hackathon </h3>
                <h4 className="vertical-timeline-element-subtitle">AI Automated HR Interviewer</h4>
                <p>
                    Google Cloud Platform, Speech to Text APIs, Sentiment Analysis
                </p>
                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/my1795/interviewerui"}>UI</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020 February - Present"
                icon={<AiTwotoneTrophy/>}
                iconStyle={{background: 'rgb(200, 43, 121)', color: '#fff'}}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Full Time</h4>
                <p>
                    Java, Spring-Boot,Kubernetes,RabbitMQ,Netflix Conductor
                </p>
                <p>Behind This:</p>
                <a target="_blank" rel="noopener noreferrer" href={"https://apimarket.att.com/"}>AT&T API Market</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019 June - 2020 February"
                icon={<AiTwotoneDollar/>}
                iconStyle={{background: 'rgb(100, 30, 99)', color: '#fff'}}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Part Time</h4>
                <p>
                    WebRTC,JavaEE,Linux(RedHat),SIP,Jenkins
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019 February - 2019 June"
                icon={<FaNetworkWired/>}
            >
                <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                <h4 className="vertical-timeline-element-subtitle">Internship</h4>
                <p>
                    Implemented MERN stack in a different manner :)
                </p>

                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/my1795/reporttoolJS"}>Report
                    JS</a>
                <br/>
                <Link to={process.env.PUBLIC_URL + '/S006708_CS300.pdf'} target="_blank" download>Phase1</Link>
                <br/>
                <Link to={process.env.PUBLIC_URL + '/S006708_C4300.pdf'} target="_blank" download>Phase2</Link>
                <br/>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2019 September - 2019 December"
                iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                icon={<FaGraduationCap/>}
            >
                <h3 className="vertical-timeline-element-title">Graduation Project (</h3>
                <h4 className="vertical-timeline-element-subtitle">Bank Ranker</h4>
                <p>
                    Ranking of bank currency rates
                </p>
                <a target="_blank" rel="noopener noreferrer" href={"https://github.com/my1795/BankRanker"}>Bank
                    Ranker</a>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
            />
        </VerticalTimeline>
    );
}

export default AboutPage;