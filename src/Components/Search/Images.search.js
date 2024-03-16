import "../css/listSearch.css";

const Images = ({ imageList }) => {
  return (
    <div className="image-list">
      {imageList.map((imageData) => {
        return (
          <img
            src={`https://image.tmdb.org/t/p/w500${imageData.file_path}`}
            alt="img path"
          />
        );
      })}
    </div>
  );
};

export default Images;
