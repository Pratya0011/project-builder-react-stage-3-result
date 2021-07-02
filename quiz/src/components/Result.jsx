import React, { Component } from 'react';
import '../components/result.css'
import data from '../data.json';
import {Link} from 'react-router-dom';

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            percentage: (this.props.value.correct/12)*100
         }
    }
   
    render() { 
        return ( 
            <>
            <div>
            <div className='icon'><i class="fa fa-check-circle" ></i></div>
            <h1>Result</h1>
            <div className='result'>
                {(this.state.percentage < 20)&&<div className='messege'>You need more pratice</div>}
                {(this.state.percentage>20)&&<div className='messege'>Good attempt</div>}
                {(this.state.percentage>50)&&<div className='messege'>Well done</div>}
                <div className='score'>Your Score: {this.state.percentage.toFixed(0)}%</div>
                <div className='list1'>
                <div className='list'>Number of Questions: {data.length}</div>
                <div className='list'>Number of attempts: {this.props.value.attempts}</div>
                <div className='list'>Number of correct answers: {this.props.value.correct}</div>
                <div className='list'>Number of wrong answets: {this.props.value.attempts-this.props.value.correct}</div>
                </div>
            </div>
            <div><button><Link to='/'>Back to Home</Link></button></div>
            </div>
            </>
         );
    }
}
 
export default Result;