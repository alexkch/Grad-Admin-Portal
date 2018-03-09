import React from 'react';
import './Ticket.css';


const ticket = (prop) => {

  return (
    <div className="Ticket">
      <p onClick={prop.click}> Im a ticket! My id is {prop.ticket_id}, my name is gyucker {prop.name}  </p>
      <p>{prop.children}</p>
      <input type="text" onChange={ prop.changed } />
    </div>
  )

}

export default ticket;
