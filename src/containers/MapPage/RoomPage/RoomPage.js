import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import RoomList from '../roomList';
import appRoutes from "../../../shared/appRoutes";

import UpArrow from "../../../assets/buttons/btn_up.png";
import DownArrow from "../../../assets/buttons/btn_down.png";
import LeftArrow from "../../../assets/buttons/btn_left.png";
import RightArrow from "../../../assets/buttons/btn_right.png";

import "./RoomPage.css"

const RoomPage = props => {

	const { id } = useParams();
	const room = RoomList.filter(room => room.id === id)[0];
	const { name, photo, description, up, left, right, down } = room;
	const switched = props.switched;

	return (
		<div className="room-container">

			<div className="room-info-container">
				<h1 className="room-name">
					{name}
				</h1>
				<p className="room-description">
					{description}
				</p>
			</div>

			<div className="room-nav">
				{up &&
					<NavLink className="room-nav-btn" to={`${appRoutes.rooms}/${up}`} onClick={e => switched(up)}>
						<img src={UpArrow} alt="Up"/>
					</NavLink>
				}
				<div className="room-nav-center">
					{left ?
						<NavLink className="room-nav-btn room-nav-left" to={`${appRoutes.rooms}/${left}`} onClick={e => switched(left)}>
							<img src={LeftArrow} alt="Left"/>
						</NavLink> :
						right &&
							<div className="room-nav-btn room-nav-left"></div>
					}

					<div className="room-img-container">
						<img src={photo} alt={name} />
					</div>

					{right ?
						<NavLink className="room-nav-btn room-nav-right" to={`${appRoutes.rooms}/${right}`} onClick={e => switched(room)}>
							<img src={RightArrow} alt="Right"/>
						</NavLink> :
						left &&
							<div className="room-nav-btn room-nav-right"></div>
					}
				</div>
				{down &&
					<NavLink className="room-nav-btn" to={`${appRoutes.rooms}/${down}`} onClick={e => switched(down)}>
						<img src={DownArrow} alt="Down"/>
					</NavLink>
				}
			</div>

		</div>
	);
};

export default RoomPage;