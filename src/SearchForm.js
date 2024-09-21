import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const SearchSchema = Yup.object().shape({
  query: Yup.string().required("Search query is required!"),
});

const SearchForm = ({ onSearch }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      validationSchema={SearchSchema}
      onSubmit={(values) => {
        // Call onSearch function passed from App.js
        onSearch(values.query);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field
              type="text"
              name="query"
              placeholder="Enter search query"
            />
            <ErrorMessage name="query" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
