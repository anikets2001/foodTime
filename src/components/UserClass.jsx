import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log('user constructor called')
    super(props);

    this.state = {
      useInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    console.log('componentDidMount called')
    const response = await fetch("https://api.github.com/users/anikets2001");
    const json = await response.json();
    this.setState({
      useInfo: json,
    });
    // console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.useInfo;
    return (
      <div className="users-wrapper">
        <div className="user-card">
          <h2>Name: {name}</h2>
          <h4>Location: {location}</h4>
          <img src={avatar_url} height={200} width={200} />
        </div>
      </div>
    );
  }
}

export default UserClass;
