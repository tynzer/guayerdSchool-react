import React, {Component} from 'react';
import Item from './Item';


class ItemList extends Component{
  render(){
    return (
<> 
<Item notasList={this.props.notasList} /> 
</>
  );
  }  
 }

export default ItemList;
