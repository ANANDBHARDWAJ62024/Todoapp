import React from 'react';

const Todo = (props) =>{
    
    return (
    <>
    <div className='todostyle'>
    <i className="glyphicon glyphicon-remove" aria-hidden="true" 
        onClick = {() =>{
            props.onSelect(props.id)
        }}
    />
    <li>{props.text}</li>
    </div>
    </>
    );
};
export default Todo;