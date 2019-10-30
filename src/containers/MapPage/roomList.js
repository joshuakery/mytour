import RoomDiningRoom from "../../assets/imgs/room-dining-room.jpg";
import RoomLivingRoom from "../../assets/imgs/room-living-room.jpg";
import RoomFoyer from "../../assets/imgs/room-foyer.jpg";
import RoomBasement from "../../assets/imgs/room-basement.jpg";
import RoomLongSunroom from "../../assets/imgs/room-long-sunroom.jpg";
import RoomHallway from "../../assets/imgs/room-hallway.jpg";

export default [
	{
		id: "dining-room",
		name: "Dining Room",
		photo: RoomDiningRoom,
		description: [
			"We seldom eat in the dining room, except sometimes when we host Thanksgiving."
		],
		up: "long-sunroom",
		right: null,
		left: null,
		down: "hallway"
	},
	{
		id: "living-room",
		name: "Living Room",
		photo: RoomLivingRoom,
		description: [
			"In the Winter, the living room couch is often a sickbed, complete with a TV and food tray (nearby coffee table)."
		],
		up: null,
		right: null,
		left: "hallway",
		down: "foyer"
	},
	{
		id: "foyer",
		name: "Foyer",
		photo: RoomFoyer,
		description: [
			"The foyer door is the front door of the house, although we never use it. You can't even lock it behind you."
		],
		up: null,
		right: null,
		left: null,
		down: "living-room"
	},
	{
		id: "basement",
		name: "Basement",
		photo: RoomBasement,
		description: [
			"After the second year living here, we had to gut the basement to save it from water damage and mold."
		],
		up: null,
		right: null,
		left: null,
		down: "hallway"
	},
	{
		id: "long-sunroom",
		name: "Long Sunroom",
		photo: RoomLongSunroom,
		description: [
			"My great grand-father expanded the house with this room, and the bedroom above it. But he didn't add to the foundation correctly, so we had gradual water damage to the basement over the life of the house."
		],
		up: null,
		right: null,
		left: null,
		down: "dining-room"
	},
	{
		id: "hallway",
		name: "Hallway",
		photo: RoomHallway,
		description: [
			"This hallway used to have a long rug in it, that my parents saved from their first home."
		],
		up: "basement",
		right: "dining-room",
		left: "living-room",
		down: null
	},
]