import "./App.css";
import React from "react";
import axios from "axios";
import User from "./User";
import Followers from "./Followers";
import Styled from "styled-components"

const StyledDiv = Styled.div `
display:flex;
flex-direction:column;
align-items:center;
text-decoration:bold;
text-align:center;
`

class App extends React.Component {
  state = {
    user: [{}],
    followers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Gavin-Rilee")
      .then((res) => {
        console.log(res.data);
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/Gavin-Rilee/followers")
      .then((res) => {
        console.log(res);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <StyledDiv>
        <h1>Github Cards!</h1>
        <User user={this.state.user}/>
        <Followers followers={this.state.followers} />
      </StyledDiv>
    );
  }
}

export default App;
