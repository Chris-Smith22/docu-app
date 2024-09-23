import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Viewdoc() {
    let {id} = useParams();
    const [docObj, setDocObject] = useState({});
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/docs/byid/${id}`).then( (response) => {
            
            const doc = response.data;
            const formattedCreateDate = new Date(doc.createdAt).toLocaleDateString('en-GB');
            const formattedDoc = {...doc, createdAt: formattedCreateDate}; 

            setDocObject(formattedDoc)
        });
    }, []);

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this document?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:3001/docs/delById/${id}`);
            alert("Document deleted successfully.");
            navigate('/'); // Redirect to home or another page after deletion
        } catch (error) {
            console.error("There was an error deleting the document!", error);
            alert("Failed to delete the document.");
        }
    };



    return (
        <div className='viewDoc'>
            
                <div className='docHeader'>
                    <div className='headerInfo'>
                        <div className='title'>{docObj.title}</div>
                        <div className='hyphen'> - </div>
                        <div className='author'>{docObj.author}</div>    
                    </div>
                    <div className='createdDate'> {docObj.createdAt} </div>
                </div>
                
                <div className='text'>
                    {docObj.text}
                </div>

                <div className='DeleteButton'>
                    <button className='dbutton' onClick={handleDelete}> Delete Document </button>
                </div>
        </div>
        
    )
}

export default Viewdoc