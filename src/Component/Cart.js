import React from 'react'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import { Card,Button } from 'react-bootstrap'
import { remove } from '../Store/CartSlice'
import { useDispatch } from 'react-redux'
const Cart = () => {
    const dispatch=useDispatch()
    const removeFromCart=(id)=>{
        //dispatch a remove action        
        dispatch(remove(id))
    }
    const products=useSelector(state=>state.cart)
    const cards=products.map(product=>(
        <div className="col-md-3" style={{marginBottom:"10px"}}>    
        <Card key={product.id} className="h-100">
          <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{width:"100px",height:"130px"}} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR:{product.price}
            </Card.Text>       
          </Card.Body>
          <Card.Footer>      
            <Button variant="danger" onClick={()=>removeFromCart(product.id)} >Remove Item</Button>
          </Card.Footer>
        </Card>
        
        </div>
      ))
    
  return (
        <>
        
        <div className="row">{cards}</div>
        </>
    )
}

export default Cart