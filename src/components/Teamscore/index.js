import React, { Component } from 'react'

class TeamScore extends Component {
  state = {runs: 0, wickets: 0}

  incrementRuns = (num)=>{
    this.setState({runs: this.state.runs + num})
  }

  incrementWickets = ()=>{
    this.setState({wickets: this.state.wickets + 1})
    if(this.state.wickets >= 10){
      this.setState({wickets: 10})
    }
  }

  render(){
    return(
      <div  style={{border: "solid 1px black", padding:"10px",width:"200px", margin:"20px"}}>
      <h2>{this.props.team}</h2>
      <p>Runs: {this.state.runs}</p>
      {this.state.wickets<10
      ? <><button onClick={() =>{this.incrementRuns(1)}}>1 Run</button>
      <button onClick={() =>{this.incrementRuns(4)}}>4 Runs</button>
      <button onClick={() =>{this.incrementRuns(6)}}>6 Runs</button></>
      : <button style={{visibility: "hidden"}}></button>
      }
      <div>
      <p>wickets: {this.state.wickets}</p>
      {this.state.wickets<10
      ? <button onClick={this.incrementWickets}>Wicket</button>
      : <p style={{fontWeight: "bolder"}}>All out!</p>}
      </div>
    </div>
    )
  }
}

export default TeamScore
