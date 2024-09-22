import React from 'react';
import '../App.css';
import {Formik, Form, Field, ErrorMessage} from "formik";

function Write() {
  return (
    <div className='CreateDoc'>
        <Formik initialValues={""} onSubmit={""} validationSchema={""}>
            <Form className='formContainer'>

                <label> Title: </label>
                <ErrorMessage name="title" component="span" />
                <Field 
                    id="inputCreateDoc" 
                    name="title" 
                    placeholder="Title"
                />

                <label> Text: </label>
                <ErrorMessage name="text" component="span" />
                <Field
                    id="inputCreateDoc"
                    name="text"
                    placeholder="Write something..."
                />

                <label> Author: </label>
                <ErrorMessage name="author" component="span" />
                <Field
                    id="inputCreateDoc"
                    name="author"
                    placeholder="Name"
                />

                <button type="submit"> Create Document </button>

            </Form>
        </Formik>

    </div>
  )
}

export default Write