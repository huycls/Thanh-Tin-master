import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({productPerPage, totalProduct, paginate}) => {
    const pagehomeNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProduct / productPerPage); i++){
        pagehomeNumbers.push(i);
    }
    return <nav>
        <ul className="pagination">
            {pagehomeNumbers.map(num => (
                <li key={num} className="page-item">
                    <Link to="#" onClick={() => paginate(num)} className="page-link">
                        {num}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
}

export default Pagination;