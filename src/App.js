import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class App extends Component {
  state={
    hour:0,
    minute:0,
    second:0,
    interval:'',
    disabled:false,
    intervals:[]
  }
  startCount=()=>{
    let a=setInterval(()=>{
      const {second,hour,minute} = this.state
      if(second === 59){
        if(minute === 59){
          this.setState({
            minute:0,
            hour:hour+1
          })
      
        }
        else{
          this.setState({
            minute:minute+1,
            second:0
          })
        }
      }else{
        this.setState({
          second:second+1
        })
      }
    },1000)
    this.setState({
      interval:a,
      disabled:true
    })
  }
  resetCount=()=>{
    clearInterval(this.state.interval)
    this.setState({
      hour:0,
      minute:0,
      second:0,
      disabled:false
    })
  }
  stopCount=()=>{
clearInterval(this.state.interval)
this.setState({
  disabled:false
})
  }
  intervalsCount=()=>{
 const {intervals,hour,minute,second,}=this.state
 intervals.push(hour+":"+minute+":"+second)
 this.setState({
  intervals
 })
  }
  decrementTimer=()=>{
    const {hour,second,minute}=this.state
    if (second === 0) {
      if (minute === 0) {
          if (hour === 0) {
              clearInterval(this.intervalId);
              return;
          }
          this.setState({
              hour: hour - 1,
              minute: 59,
              second: 59,
          });
      } else {
          this.setState({
              minute:minute - 1,
              second: 59
          })
      }
  } else {
      this.setState({
          second: second - 1
      });
  }
}
startTimer=()=> {
  this.intervalId = setInterval(() => this.decrementTimer(), 1000);
  this.setState({
    disabled:true
  })
}

stopTimer = ()=>{
  clearInterval(this.intervalId);
  this.setState({
    disabled:true
  })
}
secondCount=()=>{
  const {second}=this.state
  if(second===59){
    this.setState({
      second:0
    })
  }
  else if (second<59){
    this.setState({
      second:second+1
    })
  }
}
minuteCount=()=>{
  const {minute}=this.state
  if(minute===59){
    this.setState({
      minute:0
    })
  }
  else if (minute<59){
    this.setState({
      minute:minute+1
    })
  }
}
hourCount=()=>{
  const {hour}=this.state
  if(hour===23){
    this.setState({
      hour:0
    })
  }
  else if (hour<59){
    this.setState({
      hour:hour+1
    })
  }
}



  
    
        
  
    render() {
    const {second,hour,minute,disabled,intervals} = this.state
    return (
      <div className='container mt-3'>
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className='text-center'>
                 <h3>Sekundomer and Timer</h3>
                </h1>
              </div>
              <div className="card-body text-center">
              <button className='btn btn-info m-2' onClick={this.hourCount}>H+</button>
                <button className='btn btn-info m-2' onClick={this.minuteCount}>M+</button>
                <button className='btn btn-info m-2' onClick={this.secondCount}>S+</button>
                <br />
                <button className='btn btn-danger m-2'><h2>{hour}</h2></button>:
                <button className='btn btn-danger m-2'><h2>{minute}</h2></button>:
                <button className='btn btn-danger m-2'><h2>{second}</h2></button>
              </div>
              <div className="card-footer text-center">
                <button className='btn btn-info m-2' onClick={this.startCount} disabled={disabled}>Start</button>
                <button className='btn btn-info m-2' onClick={this.stopCount} >Stop</button>
                <button className='btn btn-info m-2' onClick={this.resetCount}>Reset</button>
                <button className='btn btn-info m-2' onClick={this.intervalsCount}>Interval</button>
                <button className='btn btn-info m-2' onClick={() => this.startTimer()}>Start Timer</button>
                <button className='btn btn-info m-2' onClick={() => this.stopTimer()}>Stop Timer</button>
              </div>
              {
                intervals.map((item,index)=>{
                  return <div key={index}>
                    <p>{item}</p>
                  </div>
                })
                }
            </div>
          </div>
          </div>
        </div>
    )
  }}