import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, getMenu } from '../../../slices/main';
import styles from './Pagination.module.scss';

const Pagination = () => {

  const dispatch = useDispatch();
  const { currentPage, itemsPerPage, totalPages: totalItems, isLoading: status } = useSelector((state) => state.menu);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getMenu({itemsPerPage, currentPage: page}));
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      <ul className={styles.pagination}>
        {pages.map((page) => (
          <li key={page}>
            <button className={currentPage === page ? styles.inactive : styles.button} onClick={() => handlePageChange(page)} disabled={currentPage === page || status === 'loading'}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;