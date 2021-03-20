import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Summary.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import BookShow from '../Bookshow/BookShow';
import Home from '../Home/Home';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Header from '../../common/Header/Header';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PropTypes from 'prop-types';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
    success: {
        color: green[600],
    }
});

class Summary extends Component {
    constructor() {
        super();
        this.state = {
            open: false,
        }
    }

    componentDidMount() {
        // let currentState = this.props.summaryInfo;
        // this.setState({ state: currentState });
    }

    backToBookShowHandler = () => {
        ReactDom.render(<BookShow />, document.getElementById('root'));
    }

    applyCouponHandler = () => {

    }

    confirmBookingHandler = () => {
        this.setState({ open: true });
    }

    snackBarCloseHandler = () => {
        ReactDom.render(<Home />, document.getElementById('root'));
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className="book-show">
                    <Typography onClick={this.backToBookShowHandler}>
                        <span className="back-btn">&#60; Back to Book Show</span>
                    </Typography>

                    <Card className="card-style marginTop16 ">
                        <CardContent>
                            <Typography variant="headline" component="h2" className="book-heading">SUMMARY</Typography>

                            <div className="summry-item">
                                <div className="left-item">
                                    <Typography>Location:</Typography>
                                </div>
                                <div>
                                    <Typography>{this.props.summaryInfo.location}</Typography>
                                </div>
                            </div>
                            <br />

                            <div className="summry-item">
                                <div className="left-item">
                                    <Typography>Language:</Typography>
                                </div>
                                <div>
                                    <Typography>{this.props.summaryInfo.language}</Typography>
                                </div>
                            </div>
                            <br />

                            <div className="summry-item">
                                <div className="left-item">
                                    <Typography>Show Date:</Typography>
                                </div>
                                <div>
                                    <Typography>{this.props.summaryInfo.showDate}</Typography>
                                </div>
                            </div>
                            <br />

                            <div className="summry-item">
                                <div className="left-item">
                                    <Typography>Show Time:</Typography>
                                </div>
                                <div>
                                    <Typography>{this.props.summaryInfo.showTime}</Typography>
                                </div>
                            </div>
                            <br />

                            <div className="summry-item">
                                <div className="left-item">
                                    <Typography>Tickets:</Typography>
                                </div>
                                <div>
                                    <Typography>{this.props.summaryInfo.tickets}</Typography>
                                </div>
                            </div>
                            <br />

                            <div className="summry-item">
                                <div className="left-item">
                                    <Typography>Unit Price:</Typography>
                                </div>
                                <div>
                                    <Typography>{this.props.summaryInfo.unitPrice}</Typography>
                                </div>
                            </div>
                            <br />

                            <div className="summry-item">
                                <div className="left-item">
                                    <FormControl required className="formControl ">
                                        <InputLabel htmlFor="coupon   ">Coupon Code</InputLabel>
                                        <Input type="text" className="coupon" id="coupon" onChange={this.CouponCodeHandler} />

                                    </FormControl>
                                </div>
                                <div className="apply-btn">
                                    <Button variant="contained" color="primary" onClick={this.applyCouponHandler}>
                                        APPLY
                                    </Button>
                                </div>
                            </div>

                            <br />
                            <div className="summry-item">
                                <div className="left-item">
                                    <Typography><span className="bold">Total Price:</span></Typography>
                                </div>
                                <div>
                                    <Typography><span className="bold">Rs. {this.props.summaryInfo.tickets * this.props.summaryInfo.unitPrice}</span></Typography>
                                </div>
                            </div>
                            <br />

                            <div className="booking-btn">
                                <Button variant="contained" style={{ 'width': '100%' }} color="primary" onClick={this.confirmBookingHandler}>
                                    CONFIRM BOOKING
                            </Button>
                            </div>

                        </CardContent>

                    </Card>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    className="snackbar"
                    open={this.state.open}
                    onClose={this.snackBarCloseHandler}
                    message={
                        <span id="client-snackbar" className={classes.success}>
                            <div className="confirm"><div><CheckCircleIcon /></div><div className="message"> Booking Confirmed!</div></div>
                        </span>
                    }
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.snackBarCloseHandler}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />

            </div >
        )
    }
}

export default withStyles(styles)(Summary);