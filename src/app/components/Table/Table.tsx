import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { use } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getBookData } from './slice/action';
import { addGetBookDataLoader, useTableSlice } from './slice';
import { tableSelector } from './slice/selectors';

const Table = () => {
  useTableSlice();
  const dispatch = useDispatch();
  const [data, SetData] = useState([]);

  useEffect(() => {
    dispatch(addGetBookDataLoader());
    dispatch(getBookData(''));
  }, []);

  const { bookData, bookDataLoading } = useSelector(tableSelector) || {};

  const columns = [
    {
      title: 'Name',
      field: 'title',
    },
    {
      title: 'Author',
      field: 'author',
    },
    {
      title: 'Year',
      field: 'year',
    },
    {
      title: 'Language',
      field: 'language',
    },
    {
      title: 'Link',
      field: 'link',
    },
  ];

  useEffect(() => {
    const data = bookData?.map(book => {
      return {
        title: book.title,
        author: book.author,
        year: book.year,
        language: book.language,
        link: book.link,
      };
    });
    SetData(data);
  }, [bookData]);

  return bookDataLoading ? (
    <>Loading</>
  ) : (
    <div>
      <MaterialTable
        title="Book List"
        data={data}
        columns={columns}
        options={{
          search: true,
          paging: true,
          filtering: false,
        }}
      />
    </div>
  );
};

export default Table;
