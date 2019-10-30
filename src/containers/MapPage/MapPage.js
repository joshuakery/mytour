import React, { Component } from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import RoomList from "./roomList";
import "./MapPage.css";

class MapPage extends Component {

	state = {
		rooms: RoomList
	}

	render() {
		let { rooms } = this.state;
		const { switched, current, seen } = this.props;

		return (
			<div className="map-container">
				
		          {rooms.map((room, idx) => {
		            return (
		              <Link
		                key={room.id}
		                to={ seen.includes(room.id) ? `${appRoutes.rooms}/${room.id}` : `${appRoutes.rooms}/${room.id}` }
		                className={"room-link-container " +
		                		   (room.id === current ? 'current' : '') +
		                		   (seen.includes(room.id) ? ' seen' : '')}
		                id={room.id}
		                onClick={ seen.includes(room.id) ? (e => switched(room.id)) : null }
		              >
		                <img src={room.photo} alt={room.name}
		                	 className={"room-link-img " + (seen.includes(room.id) ? 'seen-img' : '')}
		                />
		                <h5 className="map-room-name">{room.name}</h5>
		              </Link>
		            );
		          })}
			</div>
		)
	}
}

export default MapPage;