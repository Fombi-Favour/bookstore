import React from 'react';

const AddBooks = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Category" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBooks;
