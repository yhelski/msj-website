import React, {Component} from 'react';
import SearchBar from './SearchBar';
import AttendanceTable from './AttendanceTable';
import MemberRow from './MemberRow';
class Members extends Component {

  constructor(props) {
    super(props);

    //  this.state.members = [];
    this.state = {};
    this.state.filterText = "";
    this.state.members = [
      {
        id: 1,
        name: 'Juriel Olivera (Yel)',
        age: '37',
        parent: 'Joselito Olivera',
        birthday: '1981-12-07'
      }, {
        id: 2,
        name: 'Reiiel Elijah Olivera (Yael)',
        age: '5',
        parent: 'Juriel Olivera',
        birthday: '2013-09-13'
      }, {
        id: 3,
        name: 'Jacob Ching',
        age: '7',
        parent: 'Jess Ching',
        birthday: '2011-09-24'
      }, {
        id: 4,
        name: 'Uno Vertudez',
        age: '7',
        parent: 'Edwin Vertudez',
        birthday: ''
      }, {
        id: 5,
        name: 'Jared Dumanhug',
        age: '7',
        parent: 'Jack Dumanhug',
        birthday: ''
      }, {
        id: 6,
        name: 'Jorah Adove',
        age: '1',
        birthday: ''
      }
    ];

    this.state.attendance = []
  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(member) {
    var index = this.state.attendance.indexOf(member);
    this.state.attendance.splice(index, 1);
    this.setState(this.state.attendance);
  };

  handleAddFromSearchEvent(member) {
    var index = this.state.attendance.indexOf(member);
    if(index === -1){
      this.state.attendance.push(member);
      this.setState(this.state.attendance);
    }else{
      alert(member.name + "is already added to the attendance");
    }
  }

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var member = {
      id: id,
      name: '',
      age: '',
      parent: '',
      birthday: ''
    }
    this.state.attendance.push(member);
    this.setState(this.state.attendance);
    this.state.members.push(member);
    this.setState(this.state.members);
  }

  handleSearchResultTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
var members = this.state.members.slice();
  var newMembers = members.map(function(member) {

    for (var key in member) {
      if (key === item.name && member.id === item.id) {
        member[key] = item.value;

      }
    }
    return member;
  });
    this.setState({members:newMembers});
  //  console.log(this.state.members);
  };

  handleAttendanceTableUpdate(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
var members = this.state.attendance.slice();
  var newMembers = members.map(function(member) {

    for (var key in member) {
      if (key === item.name && member.id === item.id) {
        member[key] = item.value;

      }
    }
    return member;
  });
    this.setState({attemdamce:newMembers});
    // this.setState({members:newMembers});
  //  console.log(this.state.members);
  };
  
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <SearchResultTable onSearchResultTableUpdate={this.handleSearchResultTable.bind(this)} onRowDel={this.handleAddFromSearchEvent.bind(this)} members={this.state.members} filterText={this.state.filterText}/>
        <AttendanceTable onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} attendance={this.state.attendance} onSearchResultTableUpdate={this.handleAttendanceTableUpdate.bind(this)}/>
      
      </div>
    );

  }

}

export default Members;

class SearchResultTable extends React.Component {

  render() {
    var onSearchResultTableUpdate = this.props.onSearchResultTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText.toLowerCase();
    var member = this.props.members.map(function(member) {
      if (member.name.toLowerCase().indexOf(filterText) === -1) {
        return '';
      }
      if(filterText !== '' && member.age <= 9){
     return (<MemberRow onSearchResultTableUpdate={onSearchResultTableUpdate} member={member} onDelEvent={rowDel.bind(this)} key={member.id}/>)
      }
    });
    return (
      <div>


        <table className="table table-bordered">
          <tbody>
            {member}
          </tbody>

        </table>
      </div>
    );

  }

}



