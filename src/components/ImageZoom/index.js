import React from 'react'
import Image from 'gatsby-image';

function ImageZoom({ zoom, src, alt, background }) {
  const zoomRef = React.useRef(zoom.clone({ background }))

  function attachZoom(image) {
    zoomRef.current.attach(image)
  }

  return <Image src={src} alt={alt} ref={attachZoom} />
}

export default ImageZoom