import React, { useEffect, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './SearchForm.css';

const SearchSchema = Yup.object().shape({
  query: Yup.string().required("Search query is required!"),
});

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const SearchForm = ({ onSearch }) => {
  const debouncedSearch = useCallback(
    debounce((value) => onSearch(value), 500),
    [onSearch]
  );

  return (
    <Formik
      initialValues={{ query: "" }}
      validationSchema={SearchSchema}
    >
      {({ values, handleChange }) => {
        // Automatically trigger search with debounce
        useEffect(() => {
          if (values.query) {
            debouncedSearch(values.query);
          }
        }, [values.query, debouncedSearch]);

        return (
          <Form className="search-form">
            <Field
              type="text"
              name="query"
              placeholder="Search todos..."
              className="search-input"
              onChange={handleChange}
            />
            <ErrorMessage name="query" component="div" className="error-message" />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
