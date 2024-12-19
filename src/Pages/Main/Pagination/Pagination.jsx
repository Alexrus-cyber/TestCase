// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCurrentPage } from '../../../slices/main';

// const Pagination = () => {

//   const dispatch = useDispatch();
//   const { currentPage, itemsPerPage, totalCount: totalItems, isLoading: status } = useSelector((state) => state.menu);
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const handlePageChange = (page) => {
//     dispatch(setCurrentPage(page));
//   };

//   const pages = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pages.push(i);
//   }
//   console.log(totalItems);
//   return (
//     <div>
//       <ul>
//         {pages.map((page) => (
//           <li key={page}>
//             <button onClick={() => handlePageChange(page)} disabled={currentPage === page || status === 'loading'}>
//               {page}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;