import React from "react";
// Import the CustomModal that we created in Modal.js.
import Modal from "./components/Modal";
import RatingModal from "./components/rating"
import UserModal from "./components/user"
import axios from "axios";
import music from "./static/bensound-energy.mp3"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">H</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

// We are creating a class component for our todo list and individual todo list
// items.

class App extends React.Component {
  // Here comes our constructor.
  constructor(props) {
    super(props);
    this.state = {
        songItem: {
        song: "",
        artist: "",
        rating: 0,
        username:'',
        password:'',
        audio: new Audio(music),
        isPlaying: false,
      },
        songList: []
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {

    axios

      .get("http://localhost:8000/api/Artists/")
      .then((res) => this.setState({ songList: res.data }))
      .catch((err) => console.log(err));
      console.log(this.state.songList);
  };

  renderItems = () => {
    return this.state.songList.map((item) => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >

          {item.song},
          {item.artist}.
          {item.rating}

        {/* UI for editing and deleting items and their respective events. */}

        <span>
          <button
            // If the user clicks the Edit button, call the editItem function.
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >

            {" "}
            Edit{" "}
          </button>
          <button
            // If the user clicks the Delete button, call the handleDelete function.
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete{" "}
          </button>

          <button
            // If the user clicks the Rate button, call the handleDelete function.
            onClick={() => this.createRate(item)}
            className="btn btn-danger"
          >
            Rate{" "}
          </button>

        </span>
      </li>

    ));

  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  ratingtoggle = () => {
    this.setState({ ratingModal: !this.state.ratingModal });
  };
  usertoggle = () => {
    this.setState({ userModal: !this.state.userModal });
  };

  handleSubmit = (item) => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/Artists/${item.id}/`, item)
        .then((res) => this.refreshList());
        console.log('song already added');
      return;
    }
    axios
      .post("http://localhost:8000/api/Artists/", item)
      .then((res) => this.refreshList());
  };
  handleUser = (item) => {
    this.usertoggle();

    if (item.id) {
      axios
        .put(`http://localhost:8000/api/Users/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("http://localhost:8000/api/Users/", item)
      .then((res) => this.refreshList());
  };

  handleRate = (item) => {
    this.ratingtoggle();
    // If the item already exists in our database, i.e., we have an id for our
    // item, use a PUT request to modify it.
    if (item) {
      axios
        .put(`http://localhost:8000/api/Ratings/${item.song}/`, item)
        .then((res) => this.refreshList());
      return;
    }

    axios
      .post("http://localhost:8000/api/Ratings/", item)
      .then((res) => this.refreshList());

  };

  handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/api/Artists/${item.id}`)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = { song: "", artist: ""};
    this.setState({ songItem: item, modal: !this.state.modal });
  };
  createUser = () => {
    const item = { username: "", password: ""};
    this.setState({ songItem: item, userModal: !this.state.userModal });
  };
  createRate = (item) => {
    console.log(item);
    const newitem = { username: "", song: item.song, rating: this.state.songItem.rating};
    this.setState({ songItem: newitem, ratingModal: !this.state.ratingModal });
  };

  editItem = (item) => {
    this.setState({ songItem: item, modal: !this.state.modal });
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      this.state.songItem.audio.pause();
    } else {
      this.state.songItem.audio.play();
    }
    this.setState({ isPlaying: !isPlaying});
  };


  render() {
    return (
      <main className="content">
        <h1 className="Stitle">Music Rating App</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
            <div className="y">
               {/* If the user clicks the Add task button, call the createItem function. */}
               <p>
              <button class = 'b' onClick={this.createUser} className="btn btn-primary">
                Sign in

              </button>
              </p>
            </div>
              <div className="y">
                 {/* If the user clicks the Add task button, call the createItem function. */}
                <p>
                <button class = 'b' onClick={this.createItem} className="btn btn-primary">
                  Add song

                </button>
                </p>
              </div>

              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p>
            {this.state.isPlaying ?
              "Song is Playing" :
              "Song is Paused"}
          </p>

          <button onClick={this.playPause}>
            Play  |  Pause
          </button>
        </div>
        {/* If the modal state is true, show the modal component. */}

        {this.state.modal ? (
          <Modal

            songItem={this.state.songItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}

        {this.state.ratingModal ? (
          <RatingModal

            songItem={this.state.songItem}
            ratingtoggle={this.ratingtoggle}
            onSave={this.handleRate}
          />
        ) : null}
        {this.state.userModal ? (
          <UserModal

            songItem={this.state.songItem}
            usertoggle={this.usertoggle}
            onSave={this.handleUser}
          />
        ) : null}
      </main>
    );
  }

}



// Export our App so that it can be rendered in index.js, where it is imported.
export default App;
