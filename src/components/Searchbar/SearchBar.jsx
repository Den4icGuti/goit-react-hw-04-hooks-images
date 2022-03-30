import { useState } from 'react';
import {
  SearchForm,
  SearchBar,
  SearchBtn,
  SearchInput,
} from './SearchBar.styled';

import {toast} from 'react-toastify'

const Form = ({onSubmit}) => { 
  const [searchQuery, setSearchQuery] = useState('');
  
//===Метод контолирует состояния поля поиска===//
 const onSearch = e => { 
  setSearchQuery(e.currentTarget.value)
  }
  
 const notify = () => toast('Enter the text')
//===Метод очищает поле после отправки запроса===//
  const resetForm = () => { 
    setSearchQuery('')
  }
  
//===Отправляем форму===//
 const onSubmitForm = e => { 
    e.preventDefault();
  
   if (searchQuery.trim() === '') { 
      notify();
      return;
    }
    onSubmit(searchQuery);
    resetForm()
  }

  return (
    <SearchBar>
        <SearchForm onSubmit={onSubmitForm}>
          <SearchBtn type='submit'>Search...</SearchBtn>
       
        <SearchInput
            type="text"
            name="input"
            value={searchQuery}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={onSearch}
        />
           </SearchForm>
      </SearchBar>
    );
  
}

export default Form;