import React from "react";

function Chatbox(list) {
	
	
  return (
    <>
			<div className="contact-profile">
			<img src={list.data.image}alt="" />
			<p>{list.data.name}</p>
			<div className="social-media">
				<i className="fa fa-facebook" aria-hidden="true"></i>
				<i className="fa fa-twitter" aria-hidden="true"></i>
				 <i className="fa fa-instagram" aria-hidden="true"></i>
			</div>
		</div>
		<div className="messages">
			<ul>
				{
list.data.messages.map((arr) => {
			return(
				arr.isLetf?<li className="sent">
					<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
					<p className="new"> {arr.message}</p>
				</li>:<li className="replies new">
					<img src={list.data.image} alt="" />
					<p className="new">{arr.message}</p>
				</li>
  )})
			}
			</ul>
		</div>
		<div className="message-input">
			<div className="wrap">
			<input type="text" id={list.data.index} placeholder="Write your message..." onChange={list.handletext}/>
			<i className="fa fa-paperclip attachment" aria-hidden="true"></i>
			<button id={list.data.index} className="submit" onClick={list.handlesend}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
		
	
	
	</>
  
    
  );
}
export default Chatbox;
