import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket) => (
        <Ticket whenTicketClicked={props.onClickingTicket} names={ticket.names} location={ticket.location} issue={ticket.issue} id={ticket.id} />
      ))}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onClickingTicket: PropTypes.func,
};

export default TicketList;
