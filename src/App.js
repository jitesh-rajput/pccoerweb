import AddFriend from "./UI/Home/AddFriend";
import AddTweet from "./UI/Home/AddTweet";
import Feed from "./UI/Home/Feed";
import StudentPanel from "./UI/Home/StudentPanel";
import Landing from "./UI/Landing/Landing";
import Login from "./UI/Registeration/Login";
import Registeration from "./UI/Registeration/Registeration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./UI/Explore/Explore";
import Profile from "./UI/Profile/Profile";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Registeration/>}/>
        <Route path="/home/*" element={<Feed/>} />
        <Route path="/home/addfrd" element={<AddFriend/>} />
        <Route path="/home/addtweet" element={<AddTweet/>} />
        <Route path="/home/student" element={<StudentPanel/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/profile" element={<Profile/>} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
