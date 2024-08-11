import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("about componentDidMount called");
  }
  render() {
    return (
      <>
        <div className="flex">
          logged in user : 
          <UserContext.Consumer>
            {(data) => <h2 className="ml-2">{data?.loggedInUser}</h2>}
          </UserContext.Consumer>
        </div>
        <h2>This is the food time.</h2>
        {/* <Users
        name={"Aniket (functional)"}
        location={"moradabad"}
        contact={6397461301}
      /> */}

        <UserClass
          name={"Aniket (class)"}
          location={"moradabad"}
          contact={6397461301}
        />
      </>
    );
  }
}

export default About;
