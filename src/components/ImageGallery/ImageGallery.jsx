 import PropTypes from "prop-types";
import { ImgGallery } from "./ImgGallery.styled";
import ItemGallery from '../ImageGalleryItem/ImageGallItem'

function GalleryList({ img, onImgClick }) { 
  return (
    <ImgGallery>
      {img.map(({ id, webformatURL, largeImageURL }) => (
     <ItemGallery
          key={id}
          src={webformatURL}
          modalImg={largeImageURL}
          onImgClick={onImgClick}
        />
      ))}
    </ImgGallery>
  );
}

GalleryList.propTypes = {
  img: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL:PropTypes.string.isRequired,
    })
  ),
    onImgClick:PropTypes.func.isRequired
}

export default GalleryList;

