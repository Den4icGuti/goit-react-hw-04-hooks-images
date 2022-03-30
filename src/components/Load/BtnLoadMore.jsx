import { BtnLoad } from "./BtnLoadMore.styled";

function btnLoad({ onClickLoadMore }) { 
  return (
    <BtnLoad type="button" onClick={onClickLoadMore}>
      Load more...
    </BtnLoad>
  );
}

export default btnLoad;