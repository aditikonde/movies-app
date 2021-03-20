import React, { Component } from 'react';
import './BookShow.css';
import location from '../../common/location';
import language from '../../common/language';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Header from '../../common/Header/Header';
import ReactDom from 'react-dom';
import Home from '../Home/Home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Summary from '../summary/Summary';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            locationRequired: "displayNone",
            language: "",
            languageRequired: "displayNone",
            showDate: "",
            showDateRequired: "displayNone",
            showTime: "",
            showTimeRequired: "displayNone",
            tickets: 0,
            ticketsRequired: "displayNone",
            unitPrice: 500,
            availableTickets: 20
        }
    }

    backToHomeHandler = () => {
        ReactDom.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = (event, value) => {
        this.setState({ location: event.target.value });
    }

    languageChangeHandler = (event, value) => {
        this.setState({ language: event.target.value });
    }

    showDateChangeHandler = (event, value) => {
        this.setState({ showDate: event.target.value });
    }

    showTimeChangeHandler = (event, value) => {
        this.setState({ showTime: event.target.value });
    }

    ticketsChangeHandler = (e) => {
        this.setState({ tickets: e.target.value });
    }

    bookShowButtonHandler = () => {
        this.state.location === "" ? this.setState({ locationRequired: "displayBlock" }) : this.setState({ locationRequired: "displayNone" });

        this.state.language === "" ? this.setState({ languageRequired: "displayBlock" }) : this.setState({ languageRequired: "displayNone" });

        this.state.showDate === "" ? this.setState({ showDateRequired: "displayBlock" }) : this.setState({ showDateRequired: "displayNone" });

        this.state.showTime === "" ? this.setState({ showTimeRequired: "displayBlock" }) : this.setState({ showTimeRequired: "displayNone" });

        this.state.tickets === 0 ? this.setState({ ticketsRequired: "displayBlock" }) : this.setState({ ticketsRequired: "displayNone" });

        if (this.state.location !== "" && this.state.language !== "" && this.state.showDate !== "" && this.state.showTime !== "" && this.state.tickets !== 0) {
            ReactDom.render(<Summary summaryInfo={this.state} />, document.getElementById('root'));
        }

    }

    render() {
        return (
            <div>
                <Header />
                <div className="book-show">
                    <Typography onClick={this.backToHomeHandler}>
                        <span className="back-btn">&#60; Back to Movie Details</span>
                    </Typography>

                    <Card className="card-style marginTop16 ">
                        <CardContent>
                            <Typography variant="headline" component="h2" className="book-heading">BOOK SHOW</Typography>

                            <FormControl required className="formControl ">
                                <InputLabel htmlFor="location">Choose Location</InputLabel>
                                <Select value={this.state.location}
                                    onChange={this.locationChangeHandler} >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>{loc.location}</MenuItem>
                                    ))}</Select>
                                <FormHelperText className={this.state.locationRequired}><span className="red" >Required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl ">
                                <InputLabel htmlFor="language   ">Choose Language</InputLabel>
                                <Select value={this.state.language}
                                    onChange={this.languageChangeHandler} >
                                    {language.map(lang => (
                                        <MenuItem key={"lang" + lang.id} value={lang.language}>{lang.language}</MenuItem>
                                    ))}</Select>
                                <FormHelperText className={this.state.languageRequired}><span className="red" >Required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl ">
                                <InputLabel htmlFor="showDate">Choose Show Date</InputLabel>
                                <Select value={this.state.showDate}
                                    onChange={this.showDateChangeHandler} >
                                    {showDate.map(sd => (
                                        <MenuItem key={"sd" + showDate.id} value={sd.showDate}>{sd.showDate}</MenuItem>
                                    ))}</Select>
                                <FormHelperText className={this.state.showDateRequired}><span className="red" >Required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl ">
                                <InputLabel htmlFor="showTime">Choose Show Time</InputLabel>
                                <Select value={this.state.showTime}
                                    onChange={this.showTimeChangeHandler} >
                                    {showTime.map(st => (
                                        <MenuItem key={"st" + st.id} value={st.showTime}>{st.showTime}</MenuItem>
                                    ))}</Select>
                                <FormHelperText className={this.state.showTimeRequired}><span className="red" >Required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl ">
                                <InputLabel htmlFor="tickets">Tickets: ({this.state.availableTickets} available)</InputLabel>
                                <Input id="tickets" value={this.state.tickets !== 0 ? this.state.tickets : ""}
                                    onChange={this.ticketsChangeHandler} />

                                <FormHelperText className={this.state.ticketsRequired}><span className="red" >Required</span>
                                </FormHelperText>
                            </FormControl>

                            <Typography>
                                Unit Price: Rs. {this.state.unitPrice}
                            </Typography>

                            <Typography>
                                Total Price: {this.state.unitPrice * this.state.tickets}
                            </Typography>
                            <br />

                            <div className="booking-btn">
                                <Button variant="contained" onClick={this.bookShowButtonHandler} style={{ 'width': '100%' }} color="primary" > BOOK SHOW </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow;

