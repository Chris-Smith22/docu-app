import React from 'react';
import '../App.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import axios from 'axios';
import {useNavigate} from "react-router-dom";


function Write() {
    let navigate = useNavigate();

    const initialValues = {
        title: "",
        text: "",
        author: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("A title for your document is required."),
        text: Yup.string(),
        author: Yup.string().max(15).required("An author of at most 15 characters is required.")
    });


    const onSubmit = (data) => {
        axios.post("http://localhost:3001/docs", data).then( (response) => {
            navigate('/');
        });
    };

  return (
    <div className='CreateDoc'>
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}>
            <Form className='formContainer'>

                <label> Title: </label>
                <ErrorMessage name="title" component="span" />
                <Field 
                    id="inputCreateDoc" 
                    name="title" 
                    placeholder="Title"
                    autocomplete="off"
                />

                <label> Text: </label>
                <ErrorMessage name="text" component="span" />
                <Field as="textarea" className="textbox"
                    id="inputCreateDoc"
                    name="text"
                    placeholder="Write something..."
                    autocomplete="off"
                />

                <label> Author: </label>
                <ErrorMessage name="author" component="span" />
                <Field
                    id="inputCreateDoc"
                    name="author"
                    placeholder="Name"
                    autocomplete="off"
                />

                <button type="submit"> Create Document </button>

            </Form>
        </Formik>

    </div>
  )
}

export default Write