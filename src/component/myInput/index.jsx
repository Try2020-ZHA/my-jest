import React from 'react';

class MyInput extends React.Component {

  onChange(e) {
    var val = e.target.value;

    if (this.props.onChange) {
      this.props.onChange(val);
    }
  }


  render() {
    const {label, defaultValue, onChange} = this.props;
    return (
      <div>
        {
          label ? (<label>{label}</label>) : null
        }
        <input defaultValue={defaultValue} onChange={this.onChange.bind(this)} ></input>
      </div>
    )
  }
}

export default MyInput;