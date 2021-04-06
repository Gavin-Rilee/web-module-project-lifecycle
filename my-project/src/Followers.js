import React from "react";

class Followers extends React.Component {
    
  render() {
      
      

    const { followers } = this.props;
    console.log(followers)
    return (
      <div>
        <h1>Followers</h1>

        {followers.map((user) => {
          return (
              <div>
            <p>Login: {user.login}</p>
              <img src={user.avatar_url} alt={user.avatar_url} />
            </div>
          );
          
        })}
        
      </div>
    );
  }
}
export default Followers;
