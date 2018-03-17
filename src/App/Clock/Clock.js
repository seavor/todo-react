// Component Library Dependencies
import React, { Component } from 'react';
import Moment from 'moment-timezone';

// Component File Dependencies
import './Clock.css';

class Clock extends Component {
	constructor() {
		super();

		this.state = {
			date: this.newDate(),
			time: this.newTime()
		};
	}

	/* Lifecycle Methods
	*********************************************************************/
	componentDidMount() {
		this.ticker = setInterval(this.tick.bind(this), 1000);
	}

	componentWillMount() {
		clearInterval(this.ticker);
	}

	render() {
		return (
			<div className="Clock clearfix">
				<div className="Clock-date">
					<div className="Clock-date_day">{this.state.date.day}</div>
					<div className="Clock-date_wrapper">
						<div className="Clock-date_date">{this.state.date.month}/{this.state.date.date}</div>
						<div className="Clock-date_year">{this.state.date.year}</div>
					</div>
				</div>
				<div className="Clock-time">{this.state.time}</div>
			</div>
		);
	}

	/* Component Methods
	*********************************************************************/
	tick() {
		this.setState({
    		date: this.newDate(),
    		time: this.newTime()
    	});
  	}

  	newDate() {
  		let date = Moment().format('dddd DD MM YYYY').split(' ');

  		return {
			day: date[0],
			date: date[1],
			month: date[2],
			year: date[3],
		};
  	}

  	newTime() {
  		return Moment().format('hh:mma');
  	}
}

export default Clock;
