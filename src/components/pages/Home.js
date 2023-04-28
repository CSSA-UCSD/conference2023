import React from "react";
import AOS from "aos";
import '../../style/main.scss'
import { Link } from "react-router-dom";

import DaySchedule from "../components/home/DaySchedule";
import DayScheduleData from "../data/home/DayScheduleData";

import SpeakerPreview from "../components/home/SpeakerPreview";
import SpeakerData from "../data/SpeakerData";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import IconSVG from '../../assets/logo2023SVG.svg';

class Home extends React.Component {

    componentDidMount() {
        AOS.init({
            duration: 2000
        });
    }

    render() {
        const ScheduleComponent = DayScheduleData.map(item => < DaySchedule key={item.id} item={item} />);
        const SpeakerComponent = SpeakerData.map(item => < SpeakerPreview key={item.id} item={item} />);
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        const ButtonGroup = ({ next, previous }) => {
            return (
                <div className="custom-button-group row d-flex">
                    <div className="speakers-home-link mr-auto align-self-center">
                        <h3><Link to='/speakers' className='nav-link'><span className="header-gradient">Speakers</span></Link></h3>
                    </div>
                    {/* <div className="buttons pr-3">
                        <button className="pr-3 carousel-arrows" onClick={() => previous()}><p>&#8249;</p></button>
                        <button className="carousel-arrows" onClick={() => next()}><p>&#8250;</p></button>
                    </div> */}
                </div>
            );
        };

        return (
            <div className="home container">
                <div className="row flex-nowrap py-5 home-title">
                    <div className="col-sm-3 p-0">
                        <h1>Beyond</h1> 
                        <h1 className="text-nowrap ital" style={{ fontSize: '103px'}}>
                            The Mind
                        </h1>
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </i></p>
                    </div>
                    <div className="home-img col-sm-6 d-flex align-items-center">                        
                        <img src={IconSVG} alt="conference icon" />
                    </div>
                    <div className="col-sm-3 p-0 d-flex align-items-end">
                        <h1 className="text-center ital" id="subhead">Cognitive Capacities</h1>
                    </div>
                </div>
                
                <h3><span className="ital">01</span> About</h3>
                <p><em>CSSA's National Cognitive Science Conference is happening from May 1st to May 3rd!</em></p>
                <p>
                    <strong><em>‘Beyond the Mind: Cognitive Capacities’</em></strong> is a 3-day event that will explore different disciplines of cognitive science and
                    how the study of cognition has shaped recent advancements in technology, academia, and industry. 
                    Save the date for engaging keynote speakers, interactive workshops, and invaluable networking!
                </p>
                {/* <div className="home-intro-video py-5">
                    <iframe title="conference-2022" width="100%" height="500" src="https://www.youtube.com/embed/Gx60wEdPc7w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}
                <div className="speakers">
                    <div className="container py-5">
                        <div className="speakers-title header-gradient pt-5">
                            <h3><span className="ital">02</span> Speakers</h3>
                            <p className="px-5 mt-4">Soon to be released!</p>
                        </div>
                    </div>
                </div>
                <div className="schedule">
                    <h3><Link to='/schedule' className='nav-link'><span className="ital">03</span> Schedule</Link></h3>
                    {ScheduleComponent}
                </div>
                {/* <div className="speakers pb-5">
                    <div className="speakers-carousel">
                        <Carousel 
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3500}
                        centerMode={true}
                        arrows={true}
                        renderButtonGroupOutside={true} 
                        customButtonGroup={<ButtonGroup />}
                        >
                           {SpeakerComponent}
                        </Carousel>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Home;