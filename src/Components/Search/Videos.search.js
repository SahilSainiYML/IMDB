import Trailer from "../Trailer";
import "../css/listSearch.css";

const Videos = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return <Trailer id={video.key} name={video.name} />;
      })}
    </div>
  );
};

export default Videos;
