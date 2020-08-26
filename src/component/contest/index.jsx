import React from 'react';

class ComTest extends React.Component{
    handleButtonClick=(value)=>{
        this.props.doneClick(value);
    }
    
    render(){
        const {attr} = this.props;
        return(
            <div>
                <p>{attr.text}</p>
                <button className={attr.done?'trueDone':'fakeDone'} onClick={()=>this.handleButtonClick(true)}>button</button>
                <button className={!attr.done?'trueDone':'fakeDone'} onClick={()=>this.handleButtonClick(false)}>button</button>
            </div>
        )
    }
}

export default ComTest;