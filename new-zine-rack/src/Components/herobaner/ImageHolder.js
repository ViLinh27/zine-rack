import React from 'react';

function ImageHolder({ img, className }) {
  return (
    <div className={className ? className : undefined}>
      <img src={img.src} alt={img.alt} />
    </div>
  );
}

export default ImageHolder;