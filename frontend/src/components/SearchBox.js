import React, { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  // const accentName () => {
  //   return name.normalize('NFD')
  //             .replace(/[\u0300-\u036f]/g, '')
  //             .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  // }
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row large-searchbar">
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
          placeholder="Máy chế tạo,..."
        ></input>
        <button className="primary" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
}
