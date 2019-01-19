import React from 'react';

export default class Receive extends React.Component {
  render() {
    let {icon,text,action} = this.props

    if(!icon) icon = "times"
    if(!text) text = "done"

    icon = "fas fa-"+icon

    return (
      <div name="theVeryBottom" className="text-center bottom-text" style={{marginBottom:20}}>
        <span style={{padding:10}}>
          <button className={"btn btn-large w-50"} style={{backgroundColor:"#666666",color:"#FFFFFF",padding:10,whiteSpace:"nowrap"}} onClick={()=>{action()}}>
            <i className={icon}/> {text}
          </button>
        </span>
      </div>
    )
  }
}
