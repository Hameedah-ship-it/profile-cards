
import Profile from "./component/Profile";
import "./App.css";

function App() {
  return (
    <div className="profiles-container">
      <Profile
        name="Hameedah"
        age={33}
        occupation="Student and Junior Developer"
        country="Nigeria"
        state="Kwara State"
        email="hameedah@example.com"
        skills="HTML, CSS, JavaScript, React"
        hobbies="Coding, reading, learning"
        bio="I am a student learning web development."
      />

      <Profile
        name="Amina"
        age={20}
        occupation="Web Developer"
        country="Ghana"
        state="Accra"
        email="amina@example.com"
        skills="React, CSS, JavaScript"
        hobbies="Designing, reading, travelling"
        bio="I enjoy building websites and learning new technologies."
      />
      
<Profile
  name="David"
  age={22}
  occupation="Frontend Developer"
  country="Nigeria"
  state="Lagos State"
  email="david@example.com"
  skills="HTML, CSS, JavaScript, React"
  hobbies="Gaming, football, coding"
  bio="I am a passionate developer who enjoys building websites."
/>

    </div>
  );
}

export default App;
