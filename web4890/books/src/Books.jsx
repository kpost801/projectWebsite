// src/Books.js
import React, { useState, useEffect } from "react";

function Books({ books }) {
  const groupbooks = books.reduce((acc, book) => {
    const firstletter = book.title.charAt(0).toUpperCase();
    if (!acc[firstletter]) {
      acc[firstletter] = [];
    }
    acc[firstletter].push(book);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupbooks).map((letter) => (
        <div id={letter} key={letter} className="section">
          <h2>{letter}</h2>
          {groupbooks[letter].map((book) => (
            <div key={book.id} style={{ marginBottom: "20px" }}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              {book.image && (
                <img
                  src={book.image}
                  alt={book.title}
                  style={{
                    width: "150px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Books;
