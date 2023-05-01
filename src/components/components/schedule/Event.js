import React from "react";
import AOS from "aos";


class Event extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 2000
        });
    }

    render() {

        return (
            <div className="day-schedule pb-2" data-aos="fade-up">
                {/* <div className="day-info"> */}
                    <h2>{this.props.item.title}</h2>
                    <h4>{this.props.item.time}</h4>
                    {/* <p style={{'color':'#0484fb'}}>{this.props.item.description}</p> */}
                    {this.props.item.url ?
                        <div>
                            <button className="gradient-button">
                                {/*
                                <a className="" href={this.props.item.url} target="_blank" rel="noopener noreferrer">Zoom Link</a>
                                */}
                                <a className="" href="http://bit.ly/CSSARegistration" target="_blank" rel="noopener noreferrer">Zoom Link</a>
                            </button>
                        </div>
                        : null
                    }
                    {this.props.item.recording ?
                        <div>
                            <button className="gradient-button">
                                    <a className="" href={this.props.item.recording} target="_blank" rel="noopener noreferrer">Recording</a>
                            </button>
                        </div>
                        : null
                    }
                {/* </div> */}

            </div>
        );
    }
}

export default Event;

