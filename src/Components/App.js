import React from "react";
import Header from "./Header";
import Search from "./Search";
import User from "./User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      name: "",
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  getUser = () => {
    fetch(`https://api.github.com/users/${this.state.name}`)
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        this.setState({
          user,
          // name: data.name,
          // url: data.url,
          // avatar: data.avatar_url,
          // blog: data.blog,
          // followers: data.followers,
          // location: data.location,
          // bio: data.bio,
          // repos: data.public_repos,
        });
      });
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <div className="top">
          <Header />
          <Search handleChange={this.handleChange} getUser={this.getUser} />
        </div>
        {Object.keys(user).length ? <User user={user} /> : null}
      </div>
    );
  }
}

export default App;
