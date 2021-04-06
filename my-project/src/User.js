import React from "react";

class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div className="User">
        <h2> {user.login} </h2>
        <img src={user.avatar_url} alt={user.avatar_url} />
        <p>
          Bio: {user.bio} <br></br>
          Location: {user.location}
          <br></br>
          Repo's: {user.public_repos}
        </p>
      </div>
    );
  }
}
export default User;
