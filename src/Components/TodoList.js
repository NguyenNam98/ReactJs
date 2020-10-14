import React from 'react';
import './TodoList.css'
import classNames from 'classnames'
import check from './image/check.svg'
import checked from './image/checked.svg'

class TodoList extends React.Component
{
    render(){
      const {item,onClick}=this.props
      let url =check;
      if(item.isComplete)
       url=checked;
      return(
        <div className={ classNames('TodoItem', {'TodoItem-Clicked' : item.isComplete })}  >
            <img onClick={onClick} src={url} width={32} height={32}></img>
            <p> {item.title}</p>
        </div>
      )
    }

}
export default TodoList;