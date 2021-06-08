import React from "react";

function Tablo(props) {
    if (props.json.fname == undefined){
        return (<></>);
    }
    
  return (
    <div>
      <table>
        <tr>
          <th>{props.json.fname}</th>
          <th>{props.json.lname}</th>
        </tr>
        <tr>
          <td>{props.json.imp.password}</td>
          <td>{props.json.imp.email}</td>
        </tr>
      </table>
    </div>
  );
}

export default Tablo;
