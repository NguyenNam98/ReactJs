import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import CheckAll from './Components/image/checkAll.svg';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem: '',
      todoList:[
        {title:'đi chơi ', isComplete:true},
        {title:'đi shopping ', isComplete:false},
        {title:'đá bóng ', isComplete:true}
      ]
    }
    this.onkeyup = this.onkeyup.bind(this);
    this.onchange = this.onchange.bind(this);
  
  };
    clicked(item) {
     return(event)=>{
        const isComplete=item.isComplete;
        const {todoList}=this.state;
        const index=todoList.indexOf(item);
        
        this.setState({
          todoList:[
            ...todoList.slice(0,index),
            {
              ...item,
              isComplete:!isComplete
            },
            ...todoList.slice(index+1)
          ]
        })
     }
    }
    onkeyup (event) {
      if (event.keyCode===13) {
        let text=event.target.value;
        if(!text){
          return;
        }
        text=text.trim();
        if (!text) { return; }
          this.setState({
            newItem:'',
            todoList:[
              {title:text,isComplete:false},
              ...this.state.todoList
            ]
          })
      }
    }
    onchange(event){
      this.setState({
        newItem:event.target.value
      })

    }
 
  render(){
    const {todoList,newItem}=this.state;
    const ListItems=todoList.map((item,index)=>
    <TodoList item={item} key={index} onClick={this.clicked(item)}/>
    )
    return (
      <div className="App">
        <div className="header">
          <img src={CheckAll} width={32} height={32}></img>
          <input type="text"
           placeholder="Add a new work"
           value={newItem}
           onChange={this.onchange}
           onKeyUp={this.onkeyup}
          >
          </input>
        </div>
       {ListItems} 
       <div className="footer">
         <span >{} items left</span>
         <ul >
           <li>ALL</li>
           <li>Active</li>
           <li>Completed</li>
         </ul>
         <button >Clear completed</button>
        </div>
      </div>
    ); 
  }
}

export default App;
