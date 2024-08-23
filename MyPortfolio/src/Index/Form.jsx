import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import "./Form.css";
import img from "../assets/email.jpeg";

const ContactUs = () => {

  const [data, setData] = useState({
    from_id: "",
    to_name: "",
    message: ""
  });

  function inputHandler(event) {
    setData((currdata) => {
      return { ...data, [event.target.name]: event.target.value }
    })
  }
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_9e0muyx', 'template_lwl9p7k', form.current, {
        publicKey: 'raYpbFg2pmsgRKA-D',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (err) => {
          // console.log(err.text);
          console.log("No internet Connection!")
        }
    );
    e.target.reset();
  };

  return (
    <div className='contactPage'>
      <span className='form'>
        <form onSubmit={sendEmail} action='/contact' ref={form}>
        <label htmlFor='Name'><b>Name</b></label><br/>
          <input
            placeholder='James Bont'
            value={form.from_id}
            onChange={inputHandler}
            name='from_id'
            id='Name'
          />
          <br /><br />

          <label htmlFor='Email'><b>Email</b></label><br/>
          <input
            placeholder='james21@yahoo.com'
            value={form.to_name}
            onChange={inputHandler}
            name='to_name'
            id='Email'
          />
          <br /><br />

          <label htmlFor='Msg'><b>Message</b></label><br/>
          <textarea
            placeholder='hi my name is..'
            value={form.message}
            onChange={inputHandler}
            name='message'
            id='Msg'
          >
          </textarea>
          <br /><br />

          <button className='btn'>Submit</button>
        </form>
      </span>
      <span>
        <img src={img} alt="contactImg" className="contactImg" />
      </span>
    </div>
  )
}
export default ContactUs;



























  //   <div className="box">
  //     <span id="form-info">
  //       <form action="/contact" onSubmit={sendEmail} ref={form}>
  //         <label htmlFor='Name'><b>Name</b></label><br/>
  //         <TextField
  //           placeholder="Jack"
  //           // value={data.from_id}
  //           onChange={inputHandler}
  //           name="from_name"
  //           variant="standard"
  //           id='Name'
  //         >
  //        </TextField>
  //         <br /><br/>

  //         <label htmlFor='Email'><b>E-mail</b></label><br/>
  //         <TextField
  //           placeholder="Jack@gmail.com"
  //           // value={data.to_name}
  //           onChange={inputHandler}
  //           name="to_name"
  //           variant="standard"
  //           id='Email'
  //         >
  //         </TextField>
          
  //         <br /><br/>

  //         <label htmlFor='Message'><b>Message</b></label><br/>
  //         <TextField
  //           placeholder="hi i am..."
  //           onChange={inputHandler}
  //           name="message"
  //           // value={data.message}
  //           variant="standard"
  //           id='Message'
  //         >
  //         </TextField>
  //         <br /><br/>

  //         <Button variant="outlined">Submit</Button>
  //     </form>
  //   </div>
  
