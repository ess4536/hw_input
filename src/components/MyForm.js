import React from 'react';
import '../assets/MyForm.css';

export default class MyForm extends React.Component {
  
  state={
    subjectCode: "",
    hwNo: "",
    title: "",
    deadline: "",
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleClick = () => {
    console.log(this.state);
  }

  render(){
    return (
      <div className="input-page">
        <div className="wrap">
          <div className="container">
            <h1><span className="bd-left"></span>課題登録</h1>
            <label htmlFor="subjectCode">
              <span className="label">科目記号</span>
              <select 
                id="subjectCode"
                name="subjectCode" 
                value={this.state.subjectCode} 
                onChange={this.handleChange}>
                <option value="" hidden>選択してください</option>
                <option value="JV27">JV27</option>
                <option value="SD25">SD25</option>
                <option value="DB25">DB25</option>
              </select>
            </label>
            <label htmlFor="hwNo">
              <span className="label">課題No.</span>
              <input 
                id="hwNo"
                type="number" 
                name="hwNo" 
                value={this.state.hwNo} 
                onChange={this.handleChange} />
            </label>
            <label htmlFor="title">
              <span className="label">課題主題</span>
              <input 
                id="title"
                type="text" 
                name="title" 
                value={this.state.title} 
                onChange={this.handleChange} />
            </label>
            <label htmlFor="deadline">
              <span className="label">納期</span>
              <input
                id="deadline"
                type="date" 
                name="deadline"
                value={this.state.deadline}
                onChange={this.handleChange} />
            </label>
            <button className="btn" onClick={this.handleClick}>登録</button>
          </div>
        </div>
      </div>
    );
  }
}