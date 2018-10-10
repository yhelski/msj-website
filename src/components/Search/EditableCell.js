import React from 'react';
class EditableCell extends React.Component {

    render() {
      return (
        <td>
          <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onSearchResultTableUpdate}/>
        </td>
      );
  
    }
  
  }

  export default EditableCell;