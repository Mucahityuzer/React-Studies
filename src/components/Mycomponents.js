import React,{useEffect, useState} from "react";

/* SIRALI LIFECYCLE METHODS LISTESI
  1.constructor
  2.render.
  (useEffect)
  3.componenetDidMount
  4.componenetDidUpdate
  5.componentWillUnmount 
 */

/*  CONSTRUCTER - componenet' a tanitnak */
const Mycomponent = () => {
  const [text,setText]=useState("");
  const [todo,setTodo]=useState(null)
  console.log("constructer calisiyor...")
  

  /* 

  useEffect yazolmasi:
  1- useEffect iki parametre aalir. Birinci paramaetre  yapilacak istir.
  Ikinci parametre DEPENDENCY (BAGIMLILIKTIR).
  2- Componenet icerisinde birden fazla useEffect yazilabilir.
  */

  /* bu hali componentDidmount tur. Componenet ekrana basilirken 1 kere calisir ve bir daha calismaz. */
  // useEffect(()=>{
  //   console.log("componentDidMount calisiyor...")
  // },[])

/*Eger ikinci parametre olan dizi (Dependecy) vermezsek, 
componenet her render oldugunda tekrar tekrar calisir */
  // useEffect(()=>{},[])

  /* componentDidUpdate
  1. componenetDidMount gibi ekrana ilk key basikirken calisir.
  2. Dependency (bagimliligi olan text stat'i her degistiginde bu useEffect calisir.)  */
  useEffect(()=>{
    console.log("componenetDidUnmount ve componenetDidUpdate calisiyor...")
    fetch(`https://jsonplaceholder.typicode.com/todos/${text}`)
      .then(response => response.json())
      .then(json =>{
        console.log(json)
        setTodo(json)})

    /*componentWillUnmount*/
    return()=>{
      console.log("ComponentWillUnmount calisiyor...")
    
    }
  },[text])

  /* RENDER*/
  if (todo === null){
    return(
      <div>
        {console.log("render calisiyor...")}
        <h1>Loading...</h1>
      </div>
    )
  }
  return(
    
    <div>
      {console.log("render calisiyor.")}
      <h1>Mycomponents</h1>
      <p>{todo.id}:{todo.title}</p>
      <button onClick={()=>setText(text + 1)}>Next</button>
    </div>
    
  )
}
export default Mycomponent