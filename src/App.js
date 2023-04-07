// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import View from './Component/View';
//getting the value of local storage 
const getDataFromLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data)
  }
  else {
    return []
  }

}

function App() {

  //main array of object  || booking
  const [books, setbooks] = useState(getDataFromLS());

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState('');

  // form submit event
  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      id
    }
    setbooks([...books, book]);
    setAuthor('');
    setId('');
  }

  // useEffect saving data
  useEffect(() => {
    localStorage.setItem('book', JSON.stringify(books));

  }, [books])

  return (
    <div className="wrapper">
      <h1>Simple address booking app</h1>
      <div className='main'>
        <div className="form-container">
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddBookSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required onChange={(e) => setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Name</label>
            <input type="author" className='form-control' required onChange={(e) => setAuthor(e.target.value)} value={author}></input>
            <br></br>
            <label>Phone Number</label>
            <input type="id" className='form-control' required
              onChange={(e) => setId(e.target.value)} value={id}></input>
            <br></br>
            <button type='submit' className='btn btn-success btn-md'>Add</button>
          </form>
        </div>
        <div className='view-container'>
          {books.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books}></View>
                </tbody>
              </table>
            </div>
          </>}
          {books.length < 1 && <div>No Number added yet</div>}
        </div>
      </div>
    </div >
  );
}

export default App;
