import React,{useState} from 'react';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import './booking.css'
const B0oking = ({tour, avgRating}) => {
    const {price, reviews} = tour;

    const [credentials, setCredentials] = useState ({
      userId: '01',
      userEmail: 'example@gmail.com',
      fullName: '',
      phone: '',
      guestSize: 1,
      bookAt:''
    });

    const handleChange = e => {
      setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };
    const handleClick=e=>{
      e.preventDefault();
      console.log(credentials);
    }

 

    return (
    <div className='booking'>
      <div className="booking__top d-flex align-items-center justify-content-between">

        <h3>${price}<span>/per person</span></h3>

        <span className='tour__rating d-flex align-items-center '>
          <i class="ri-star-s-fill"></i>
          {avgRating===0?null:avgRating} ({reviews?.length})
        </span>

      </div>

       {/* booking form  */}
      <div className="booking__form">
        <h5>Information</h5>

        <Form className='booking__info-form' onSubmit={handleClick}>

          <FormGroup>
            <input type='text' placeholder='Full Name' id='fullName' 
            required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup>
            <input type='number' placeholder='Phone' id='phone' 
            required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input type='date' placeholder='' id='bookAt' 
            required onChange={handleChange}></input>
            <input type='nunmber' placeholder='Guest' id='guestSize' 
            required onChange={handleChange}></input>
          </FormGroup>

        </Form>
      </div>
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>${price}<i class='ri-close-line'></i>1 person</h5>
            <span> ${price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5>Service charge</h5>
            <span> $10</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span> $109</span>
           </ListGroupItem>
        </ListGroup>


        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Button Now</Button>
      </div>
     </div>
    );

};

export default B0oking;