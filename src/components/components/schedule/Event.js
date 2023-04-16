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
            <div className="day-schedule pb-5" data-aos="fade-up">
                <div className="day-img">
                </div>
                {/*
                {this.props.item.day === 1 ? 
                    <div className="day-info">
                        <h4>{this.props.item.date}</h4>
                        <h2>{this.props.item.name}</h2>
                        <p>{this.props.item.description}</p>
                    </div>
                : null }
                {this.props.item.day === 2 ? 
                    <div className="day-info">
                        <div><h1>Day 2</h1></div>
                        <h4>{this.props.item.date}</h4>
                        <h2>{this.props.item.name}</h2>
                        <p>{this.props.item.description}</p>
                    </div>
                : null }
                */}
                <div className="day-info">
                    <h4>{this.props.item.date}</h4>
                    <span>📍{this.props.item.location}</span>
                    <h2>{this.props.item.name}</h2>
                    <p style={{'color':'#0484fb'}}>{this.props.item.description}</p>
                    <div>
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
                    </div>
                </div>

            </div>
        );
    }
}

export default Event;

