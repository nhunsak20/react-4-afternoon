import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
    
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })
    })
  }

  render() {
  const list = this.state.students.map((student, i) => <Link key={i} to={`/student/${student.id}`}><h3 key={i}>{`${student.first_name} ${student.last_name}`}</h3></Link>)
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {list}
      </div>
    )
  }
}