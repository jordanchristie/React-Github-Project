import React from 'react';
import Header from "./Header"
import Search from './Search';
import User from './User'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};

      this.handleChange = this.handleChange.bind(this);
      this.getUser = this.getUser.bind(this);
    }

  handleChange(event) {
    this.setState({name: event.target.value})
  }
  
  getUser(event) {

      fetch(`https://api.github.com/users/${this.state.name}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.setState({
            name: data.name,
            url: data.url,
            avatar: data.avatar_url,
            blog: data.blog,
            followers: data.followers,
            location: data.location,
            bio: data.bio,
            repos: data.public_repos
          })
        })
  }

  render() {
    return (
      <div>
        <div className="top">
          <Header />
          <Search 
            handleChange={this.handleChange}
            getUser={this.getUser} 
          />
        </div>
        <User
          name={this.state.name}
          url={this.state.url} 
          avatar={this.state.avatar}
          blog={this.state.blog}
          followers={this.state.followers}
          location={this.state.location}
          bio={this.state.bio}
          repos={this.state.repos}
        />
        {this.props.children}
      </div>
    )
  }
}




export default App;