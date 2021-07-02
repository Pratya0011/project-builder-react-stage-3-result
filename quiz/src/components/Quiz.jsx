import React, { Component } from 'react'
import data from '../data.json';
import '../components/quiz.css';
import Result from './Result';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            i:0,
            attempts:0,
            correct:0
         }
    }
    renderNext=()=>{
        this.setState({i:this.state.i+1})  
    }
    renderPrevious=()=>{
        if(this.state.i === 0)
        this.setState({i:this.state.i})
        else
        this.setState({i:this.state.i-1})
    }
    onSubmit=()=>{
        this.setState({i:12})
        
    }
    storeAnswers=(e)=>{
      this.setState({attempts:this.state.attempts+1})
      for(var i=0;i<data.length;i++){
          if(data[i].answers === e.target.value){
            this.setState({correct:this.state.correct+1})
          }
      }
      this.renderNext()
    }
    render() { 
        return ( 
            <>
            {(this.state.i<12)&&<div className="quiz">
                <h1>Question</h1>
            <div>
             {data.map((item,index)=>(
                 (index===this.state.i)&&
                 <>
                 <div className='question'>
                    <div className='one'>{this.state.i+1} of {data.length}</div>
                    <div className='two'>{item.question}</div>
                 </div>
                 <div className="option">
                     <div><button onClick={this.storeAnswers} value={item.optionA}>{item.optionA}</button></div>
                     <div><button onClick={this.storeAnswers} value={item.optionB}>{item.optionB}</button></div>
                     <div><button onClick={this.storeAnswers} value={item.optionC}>{item.optionC}</button></div>
                     <div><button onClick={this.storeAnswers} value={item.optionD}>{item.optionD}</button></div>
                 </div>
                 </>
             ))}
             <div className='button'>
             <div className='colour'><button onClick={this.renderPrevious}>Previous</button></div>
             {(this.state.i < 11)&&<div className='colour'><button onClick={this.renderNext}>Next</button></div>}
             <div className='colour'><button onClick={this.onSubmit}>Submit</button></div>
             </div>
             </div>
             </div>}
             {(this.state.i === 12)&&
             <Result value={this.state}/>}
            </>
         );
    }
}
 
export default Quiz;