import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";

function Home() {
    const [listOfDocs, setListOfDocs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/docs").then( (response) => {
        const formattedDocs = response.data.map(doc => {
            //Format createdAt field in db
            const formattedCreateDate = new Date(doc.createdAt).toLocaleDateString('en-GB');
            return {...doc, createdAt: formattedCreateDate}; 
            //copy all key-value pairs into new formattedDocs obj, updating createdAt field
        })
        setListOfDocs(formattedDocs);
        });
    }, []);  //empty dependency array, effect runs once when component loads


    return (
    <div className="Home">

        <div className='listHeader'> 
            <h3 className='Title'>Title</h3>
            <h3 className='Author'>Author</h3>
            <h3 className='dateCreated'>Date Created</h3>
        </div>

        <div className='docsList'>
            {
            listOfDocs.map( (value, key) => { 
            return (
            <div className='doc' key={key}> 
                <div className='title'> {value.title} </div> 
                
                <div className='author'> {value.author} </div>
                <div className='dateCreated'> {value.createdAt} </div>
                

            </div>) //return doc.
            })
            }
        </div>
      
    </div>
    );
}

export default Home