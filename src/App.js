import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import appRoutes from "./shared/appRoutes";
import MapPage from "./containers/MapPage/MapPage";
import RoomList from "./containers/MapPage/roomList";
import Header from "./containers/Header/Header";
import RoomPage from "./containers/MapPage/RoomPage/RoomPage";
import './App.css';

class App extends Component {

  state = {
    currentRoom: RoomList[0].id,
    seen: [RoomList[0].id]
  }

  switchCurrentRoomHandler = (room_id) => {

    if (!this.state.seen.includes(room_id)) {
      let seen = [...this.state.seen, room_id];
      this.setState({
        seen: seen
      })
    }

    this.setState({
      currentRoom: room_id
    });

  }

  render() {
    return (
        <div className="App">
          <Header current={this.state.currentRoom}/>

          <div className="MainContent">
            <Switch>
              <Route exact path={appRoutes.map}>
                <MapPage switched={this.switchCurrentRoomHandler}
                         current={this.state.currentRoom}
                         seen={this.state.seen}
                         />
              </Route>
              <Route exact path={appRoutes.rooms}>
                <MapPage switched={this.switchCurrentRoomHandler}
                         current={this.state.currentRoom}
                         seen={this.state.seen}
                         />
              </Route>
              <Route exact path={appRoutes.room}>
                <RoomPage switched={this.switchCurrentRoomHandler}/>
              </Route>
              <Redirect to={appRoutes.map} />
            </Switch>
          </div>

        </div>
      );
  };
  
}

export default App;
