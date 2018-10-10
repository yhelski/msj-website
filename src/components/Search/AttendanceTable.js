import React from 'react';
import MemberRow from './MemberRow';

class AttendanceTable extends React.Component {

    render() {
      var onRowAdd = this.props.onRowAdd;
      var rowDel = this.props.onRowDel;
      var onSearchUpdate = this.props.onSearchResultTableUpdate
      console.log(this);
      var member = this.props.attendance.map(function(member) {
       return (<MemberRow onRowAdd = {onRowAdd} member={member} onDelEvent={rowDel.bind(this)} key={member.id} onSearchResultTableUpdate={onSearchUpdate}/>)
      });
      return (
        <div>
  
  
        <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
          <table className="attendance-table">
           
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Parent</th>
                <th>Birthday</th>
              </tr>
            </thead>
  
            <tbody>
              {member}
  
            </tbody>
  
          </table>
        </div>
      );
  
    }
  
  }

  export default AttendanceTable;