import {useState,useEffect} from 'react';
// import Container from './Conatainer/Container';
import Form from '../Searchbar/SearchBar';
import fetchApi from '../../ServiceApi/API';
import ImgGallery from '../ImageGallery/ImageGallery';
import BtnLoad from '../Load/BtnLoadMore';
import Modal from '../Modal/Modal';
import Load from '../Loader/Loading'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppStyles } from './AppStyle.styled';




const App = () => { 

  const [searchQuery, setSearchQuery] = useState('');
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [showImg, setshowImg] = useState(false);
  const [load, setLoad] = useState(false);
  const [modal, setModal] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    
    const fethImg = async () => {
     
      onLoading()
       
      try {
        const img = await fetchApi(searchQuery, page);
        return setGallery(gallery => ([...gallery, ...img.hits]))
      } catch (error) {
        return error.message;
      } finally {
        onLoading()
        onHandleScroll()
      }
    };
    fethImg()
   }, [page, searchQuery]);

  //===Метод открытия изображения===//
  const onToggle = () => {
   setshowImg(showImg => !showImg)
  };

  //===Метод загрузки изображений===// 
  const onHandleLoadMoreImg = () => {
    setPage(prevPage => prevPage + 1)
  };

  //===Метод анимации загрузки===//
 const onLoading = () => { 
  setLoad(load => !load)
  }

  //===Метод плавной прокрутки===//
  const  onHandleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

 
//===Метод открытия модального окна===//
 const onHandleClick = (img) => { 
    setModal(img)
    onToggle()
  } 

 const onHandleSubmit = (query) => {
  setSearchQuery(query);
   setPage(1);
   setGallery([]);
  };
  
  return (
    <AppStyles>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme='dark'
      />
      
      <Form onSubmit={onHandleSubmit} />
      {gallery.length > 0 && (
        <ImgGallery img={gallery} onImgClick={onHandleClick} />
      )}

      {load && <Load />}
      {showImg &&
        (<Modal large={modal} onClose={onToggle} />)}
        
      {gallery.length > 0 && gallery.length / page === 12 && (
        <BtnLoad onClickLoadMore={onHandleLoadMoreImg} />
      )}
      </AppStyles>
  );
  }


export default App;
  