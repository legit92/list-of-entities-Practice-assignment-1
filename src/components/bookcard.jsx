import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '5px', textAlign: 'center', width: '200px' }}>
      <img src={book.image} alt={book.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
      <h2 style={{ fontSize: '16px', margin: '10px 0' }}>{book.name}</h2>
      <p style={{ fontSize: '14px', color: '#555' }}><strong>Genre:</strong> {book.genre}</p>
      <p style={{ fontSize: '14px', color: '#333' }}><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

export default BookCard;
