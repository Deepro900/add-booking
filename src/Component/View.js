import React from 'react';

const View = ({ books }) => {
    return books.map(book => (
        <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
        </tr>
    ))
}
export default View;