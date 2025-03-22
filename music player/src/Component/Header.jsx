import { useState } from "react";
import { FaSearchMinus } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [night, setnight] = useState(false);
  const [song, setsong] = useState("");

  function handlesubmit(event) {
    event.preventDefault();
    // console.log(song);
    // add the song to the playlist
    setsong("");
  }

  return (
    <div
      className={`h-[10vh] ${
        night ? "bg-yellow-300 text-black" : "bg-black text-white"
      } flex items-center justify-evenly px-3`}
    >
      <div className="flex items-center justify-between gap-10">
        <Link to="/" className="px-1 py-1">
          Home
        </Link>
        <Link to="/music" className="px-1 py-1">
          Music
        </Link>
        <Link to="/podcast" className="px-1 py-1">
          Podcast
        </Link>
      </div>
      <div>
        <form
          action=""
          className="flex items-center justify-start gap-1 opacity-[0.75]"
          onSubmit={handlesubmit}
        >
          <input
            type="text"
            value={song}
            className="bg-white px-1 py-1 border-1 rounded-lg w-[30vw]"
            onChange={(e) => setsong(e.target.value)}
          />
          <button type="submit">
            <FaSearchMinus />
          </button>
        </form>
      </div>
      <div className="flex items-center justify-between gap-10">
        <div>
          <Link to="/signup" className="px-1 py-1">
            Signup
          </Link>
        </div>
        <div>
          <Link to="/login" className="px-1 py-1">
            Login
          </Link>
        </div>
        <button className="px-1 py-1" onClick={() => setnight(!night)}>
          {night ? <FaRegMoon /> : <IoSunnyOutline />}
        </button>
      </div>
    </div>
  );
}

export default Header;
