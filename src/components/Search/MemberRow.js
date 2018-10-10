import React from 'react';
import EditableCell from './EditableCell';
class MemberRow extends React.Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.member);
    }

    render() {
  
      return (
        <tr className="eachRow">
          <EditableCell onRowAdd={this.props.onRowAdd} onSearchResultTableUpdate={this.props.onSearchResultTableUpdate} cellData={{
            type: "name",
            value: this.props.member.name,
            id: this.props.member.id
          }}/>
          <EditableCell onRowAdd={this.props.onRowAdd} onSearchResultTableUpdate={this.props.onSearchResultTableUpdate} cellData={{
            type: "age",
            value: this.props.member.age,
            id: this.props.member.id
          }}/>
          <EditableCell onRowAdd={this.props.onRowAdd} onSearchResultTableUpdate={this.props.onSearchResultTableUpdate} cellData={{
            type: "parent",
            value: this.props.member.parent,
            id: this.props.member.id
          }}/>
          <EditableCell onRowAdd={this.props.onRowAdd} onSearchResultTableUpdate={this.props.onSearchResultTableUpdate} cellData={{
            type: "birthday",
            value: this.props.member.birthday,
            id: this.props.member.id
          }}/>
          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
        </tr>
      );
  
    }
  
  }

  export default MemberRow;