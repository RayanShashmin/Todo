import React ,{useState} from 'react'
import {RiCloseCircleLine} from "react-icons/ri"



export default function TodoItem(props) {
  const { todo, removeTodo } = props;
const [isClicked, setIsClicked] = useState(false);

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  const handleIconClick = () => {
    setIsClicked(true);
    handleRemoveClick();
  };


  return (
    <div className={todo.completed ? "todo-row complete": "todo-row"}>
      {todo.text}
        <div className="iconsContaine">
          
            <RiCloseCircleLine style={{marginRight:8,color: isClicked ? 'red' : 'red'}} 
            onClick={handleIconClick}
            />
            
        </div>
    </div>
  )
}
 