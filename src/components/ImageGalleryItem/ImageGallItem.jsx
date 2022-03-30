 import PropTypes from "prop-types";
 import { Item,ListItemImg } from './ImgItem.styled';

function ImgItem({src,onImgClick,modalImg}) { 
  return (
    <Item onClick={()=> onImgClick(modalImg)}>
      <ListItemImg src={src} alt="" />
    </Item>
  );
}

ImgItem.propTypes = {
  src:PropTypes.string.isRequired
}

export default ImgItem;