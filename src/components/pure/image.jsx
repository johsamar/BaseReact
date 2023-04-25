import React from "react";
import PropTypes from "prop-types";

const ImageComponent = ({ src, alt }) => {
  return (
    <div className="ratio ratio-1x1">
      <img src={src} alt={alt}></img>
    </div>
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageComponent;
