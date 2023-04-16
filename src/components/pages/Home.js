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

import IconSVG from '../../assets/conference icon 2022.svg';

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
                <div className="row py-5">
                    <div className="home-img col-sm-6 d-flex align-items-center">
                        <img src={IconSVG} alt="conference icon" />
                    </div>
                    <div className="home-title col-sm-6 ">
                        <h2>Evolutions in <span className="home-header-gradient">technology,</span> <span className="home-header-gradient">healthcare</span>, and current <span className="home-header-gradient">global issues</span> within the cognitive science chrysalis.</h2>
                    </div>
                </div>
                <h2 class="header-gradient">About</h2>
                <p>Cognitive Science Student Association at UCSD invites you to join our 15th annual National Cognitive Science Conference! Our annual conference is a 3-day event that highlights how current global events impact the way in which we interact with the world around us. Join us for a packed schedule of engaging presentations, interactive workshops, and invaluable networking!</p>
                <p>This year's theme of “The Cognitive Metamorphosis” will focus on the emerging adaptations of cognitive science in technology, healthcare, and current global issues.</p>
                <p>The conference will be held hybrid through both Zoom and in-person events and split into three days from 04/26/2022 to 04/28/2022.</p>

                <div className="home-intro-video py-5">
                    <iframe title="conference-2022" width="100%" height="500" src="https://www.youtube.com/embed/Gx60wEdPc7w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="schedule">
                    <h3><Link to='/schedule' className='nav-link'><span className="header-gradient">Schedule</span></Link></h3>
                    {ScheduleComponent}
                </div>
                <div className="speakers pb-5">
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
                </div>
                {/* <div className="speakers">
                    <div className="container py-5">
                        <div className="speakers-title header-gradient pt-5">
                            <h3 className="">Speakers</h3>
                            <p className="px-5">Soon to be released!</p>
                        </div>
                    </div>
                </div> */}

            </div>
        );
    }
}

export default Home;