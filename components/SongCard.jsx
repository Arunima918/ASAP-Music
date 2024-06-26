import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";

const SongCard = ({ song, i }) => {
  const activeSong = "Test";
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop=blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="realtive w-full h-56 group">
        <div
          className={`absolute insert-0 justify-center items-center bg-black bg -opacity-50 group-hover:flex
      ${
        activeSong?.title === song.title
          ? "flex bg-black bg-opacity-70"
          : "hidden"
      }
      `}
        />
      </div>
    </div>
  );
};

export default SongCard;
