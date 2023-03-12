import {Card} from 'react-bootstrap'; 
import { Button } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() { 
  const[count,setCount]=useState(0); 
  const[total,setTotal]=useState(0);
  const Details=[
    {photo:"https://5.imimg.com/data5/WI/KR/MY-13424308/children-car-toy-500x500.jpg",name:"car",price:2000}, 
    {photo:"https://www.shutterstock.com/image-photo/children-motorcycle-toy-isolated-on-260nw-548702482.jpg",name:"bike",price:1000}, 
    {photo:"https://www.shutterstock.com/image-photo/plastic-toy-plane-isolated-on-260nw-329980544.jpg",name:"aeroplain",price:1000}, 
    {photo:"https://www.shutterstock.com/image-photo/bus-toy-isolated-on-white-260nw-1159341013.jpg",name:"bus",price:1500},
    {photo:"https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/500x334/products/1937/7502/34245D-SHO-BLUE-Jeep-Wrangler-Rubicon-Convertible-Diecast-Model-Toy-Car-az__47321.1610381858.jpg?c=1",name:"jeep",price:2000}, 
    {photo:"https://thumbs.dreamstime.com/b/toy-train-isolated-white-background-colorful-164582283.jpg",name:"train",price:2500}]
  return ( <div className="count">
    <div className="countt"> 
     <span><h1> ❤️ Sachin Toys</h1></span>
    <h3 className="counter">Count  {count} </h3><h3 className="total">Total  {total}</h3></div>
    <div className="car">   
    
{Details.map((val,id)=>( 
  
     <Toyscard val={val} id={id} count={count} total={total} setTotal={setTotal} setCount={setCount}/> 
      
       
  
 ))}</div> 
 <div className="foot"> 
  <h2>💕 WEL COME 💕</h2>
 </div>
  </div>
  )
}
export default App; 


function Toyscard (props){  
  const{ photo,name,price}=props.val 
  const{id}=props.id  
  const count=props.count; 
  const setCount=props.setCount; 
  const total=props.total; 
  const setTotal=props.setTotal
  const [show,setShow]=useState(false) 
  function addclick(){ 
   setShow(!show) 
   setCount(count+1) 
   setTotal(total+price)
  } 
  function removeclick(){ 
setShow(!show) 
setCount(count-1) 
setTotal(total-price)
  }
  return(
  <Card className="mcar" key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={photo}  style={{ width: '17.9rem', height:'12rem' }} />
  <Card.Body className="cbody" style={{ width: '17.9rem', height:'9rem' }}>
    <Card.Title >{name.toUpperCase()}</Card.Title>
    <Card.Text>
      ₹{price}
    </Card.Text>
  {!show?<Button onClick={addclick} style={{border:'1px solid black'}} variant="primary">Add cart</Button> :""}
  {show?<Button onClick={removeclick} style={{border:'1px solid black'}} variant="danger">Remove</Button>:""}
  </Card.Body>
</Card>
)


}
