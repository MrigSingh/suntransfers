import React from 'react';
import './cover-toolbar.css';
import plane from '../../images/airport.png';
import location from '../../images/location.png'
import swap from '../../images/swap.png';
import calendar from '../../images/calendar.png';
import user from '../../images/user.png';
import dropdown from '../../images/dropdown.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const hours = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
const minutes = ['00','05','10','15','20','25','30','35','40','45','50','55'];

class CoverToolbar extends React.Component{
    state={
        flight: false,
        startDate: new Date(),
        date:'',
        showTime: false,
        showHourList: false,
        showMinuteList: false,
        currentHour:'',
        hour:'00',
        minute:'00',
        hour1:'',
        hour2:'',
        hour3:'',
    }
    componentDidMount = async() => {
        let date = new Date();
        let hour = String(date.getHours());
        await this.setState({
            currentHour: hour
        })
        if(this.state.currentHour >= '00' && this.state.currentHour <= '20'){
            this.setState({
                hour1: this.state.currentHour + 1,
                hour2: this.state.currentHour + 2,
                hour3: this.state.currentHour + 3,
            })
        }
        else if(this.state.currentHour === '21') {
            this.setState({
                hour1: '22',
                hour2: '23',
                hour3: '00',
            })
        }
        else if(this.state.currentHour === '22'){
            this.setState({
                hour1: '23',
                hour2: '00',
                hour3: '01',
            })
        }
        else {
            this.setState({
                hour1: '00',
                hour2: '01',
                hour3: '02',
            })
        }
    }
    handleChange = date => {
        let Date = moment(date).format("MMM DD");
        this.setState({
          date: Date,
          flight: true,
          showTime: true,
        });
    };
    handleDateClick = () => {
        document.getElementById('date-picker').click();
        
    }
    handleTimeDone = () => {
        this.setState({
            showTime: false,
            showHourList: false,
            showMinuteList: false,
        })
    }
    handleHourClick = async(hour) => {
        await this.setState({hour,
            showHourList: false,
        })
    }
    handleMinuteClick = async(minute) => {
        await this.setState({minute,
            showMinuteList: false,
        })
    }
    toggleHourList = () => {
        this.setState({
            showHourList: !this.state.showHourList,
            showMinuteList: false,
        })
    }
    toggleMinuteList = () => {
        this.setState({
            showHourList: false,
            showMinuteList: !this.state.showMinuteList,
        })
    }
    render(){
        return(
            <div style={{height:'60px'}}>
                <div className="arrival-container">
                    <div className="arrival-input">
                        <span><img className='airport-icon' alt="plane" src={plane} /></span><p className="arrival-text">Arrival airport</p>
                        <img src={swap} className='swap-icon' alt="swap" />
                    </div>
                    <div className="going-input">
                        <span><img className='location-icon' alt="location" src={location} /></span><p className="going-text">Going to</p>
                    </div>
                </div>
                <div className="flight-container">
                    {this.state.flight ? <div className="date-container" onClick={() => this.handleDateClick()}>
                        <img className='calendar-icon' src={calendar} alt="calendar" />
                        <p className="date-text-active">Flight arrival</p>
                        <p className="date-text-sec">{this.state.date} - {this.state.hour}:{this.state.minute}</p>
                    </div> :<div className="date-container" onClick={() => this.handleDateClick()}>
                        <img className='calendar-icon' alt="calendar" src={calendar} />
                        <p className="date-text">Flight arrival</p>
                    </div>}
                    {this.state.showTime  ? <div className="timeContainer">
                            <div className="hour">
                                <p>Hour</p>
                                <p className="date-hour" onClick={() => this.toggleHourList()}>{this.state.hour}</p>
                            </div>
                            <span className="colon">:</span>
                            <div className="minute">
                                <p>Minute</p>
                                <p className="date-minute" onClick={() => this.toggleMinuteList()}>{this.state.minute}</p>
                            </div>
                            {this.state.showHourList ? <div className="hour-list-container">
                                {hours.map(hour => {
                                    if(hour !== this.state.hour1 && hour !== this.state.hour2 && hour !== this.state.hour3){
                                        return(
                                            <p className="hour-item" onClick={() => this.handleHourClick(hour)}>{hour}</p>
                                        )
                                    } else {
                                        return <p className="hour-item-disabled">{hour}</p>
                                    }
                                     
                                } )}
                            </div>: null}
                            {this.state.showMinuteList ? <div className="minute-list-container">
                                {minutes.map(minute => <p className="hour-item" onClick={() => this.handleMinuteClick(minute)}>{minute}</p>)}
                            </div> : null}
                            <p className="done" onClick={() => this.handleTimeDone()}>Done</p>
                        </div>: null}
                    <div className="return-container">
                        <img className='calendar-icon' alt="calendar" src={calendar} />
                        <p className="return-text">Add a return</p>
                    </div>
                </div>
                <div className="adult-container">
                    <img className="user-icon" alt="user" src={user}/>
                    <p className='adult-text'>2 adults</p>
                    <img className='adult-drop' alt="dropdown" src={dropdown} />
                </div>  
                <div className="search-button">
                    <p className="search-text">Search</p>
                </div> 
                <DatePicker
                    className='date-picker'
                    id="date-picker"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    />
        </div>)
    }
}

export default CoverToolbar;