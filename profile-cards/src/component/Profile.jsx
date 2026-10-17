
import personimage from "../images/personimage.png";

function Profile(props) {
  return (
    <div className="profile-card">
      <img src={personimage} alt="Profile" width="100" />

      <h2>{props.name}</h2>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Occupation:</strong> {props.occupation}</p>
      <p><strong>Country:</strong> {props.country}</p>
      <p><strong>State:</strong> {props.state}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Skills:</strong> {props.skills}</p>
      <p><strong>Hobbies:</strong> {props.hobbies}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
    </div>
  );
}

export default Profile;
