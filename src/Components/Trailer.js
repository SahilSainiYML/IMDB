import React from "react";

const Trailer = ({ id, name }) => {
  console.log(name, id);

  return (
    <iframe
      title={name}
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${id}?controls=1`}
    ></iframe>
  );
};

export default Trailer;
