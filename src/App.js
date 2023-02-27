import React, {useState} from 'react'
import Logo from './logo';

import './App.css';

const App=()=> {
  const [todo, setTodo] =useState("");  //Created a state for a single todo
  const [todos, setTodos] =useState([]);
  const[editId, setEditId]=useState(0)

  const handleSubmit = (e)=>{
  e.preventDefault();

if(editId){
  const editTodo = todos.find((i) =>i.id === editId);
  const updatedTodos =todos.map((t) =>t.id === editTodo.id
  ?  (t={id: t.id, todo})
  :{id: t.id, todo: t.todo}
  );
  setTodos(updatedTodos);
  setEditId(0);
  setTodo("");
  return;
}

  if (todo !==''){
   setTodos([{id:`${todo}-${Date.now()}` ,todo}, ...todos])
   setTodo("");
  };
}


   const handleDelete =(id)=>{
    const delTodo =todos.filter((to) => to.id !==id );
    setTodos([ ...delTodo]);
   };
  
  
  
 
 
    
   
   

   const handleEdit = (id) =>{
    const editTodo =todos.find((i) => i.id ===id)
    setTodo(editTodo.todo);
    setEditId(id)
   }

  // The Map() method and // the filter() method
  // const array = [1, 2, 3, 4, 5];
  // const array1 = [1, 2, 3, 4, 5];
  // return (
  //   <div className="App">
  //     {
  //       array.map((num)=>(
  //        <div>{num}, </div> 
         
  //       ))
  //     }
  //     {
  //       array1.filter((nums)=>nums  !==3 )
       
  //     }
      
  //   </div>
  // );
  return(
  <div className='App'>
    <div className='container'>
    <Logo/>
      <h1>Fulumera's Todo App</h1>
      <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text'
        value={todo}
         onChange={(e)=> setTodo (e.target.value)}/>
        <button type='submit'> {editId? "Edit": "Go"}</button>
      </form>
      <ul className='fullTodos'>

        {
          todos.map((t) =>(
            <li className='singleTodo'>
            <span className='todoText' key={t.id}>{t.todo}</span>
            <button onClick={() =>handleEdit(t.id)}>Edit</button>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))
        } 
      </ul>
     
    </div>
    
  </div>
  )
}




export default App 

