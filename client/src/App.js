import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  const [listOfDocs, setListOfDocs] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/docs").then( (response) => {
      const formattedDocs = response.data.map(doc => {
        //Format createdAt field in db
        const formattedDate = new Date(doc.createdAt).toLocaleDateString('en-GB');
        return {...doc, createdAt: formattedDate}; 
          //copy all key-value pairs into new formattedDocs obj, updating createdAt field
      })
      
      setListOfDocs(formattedDocs);
    });

  }, []);  //empty dependency array, effect runs once when component loads

  return (
    <div className="App">
      {
        listOfDocs.map( (value, key) => { 
          return (
            <div className='doc' key={key}> 

              <div className='title'> {value.title} </div> 
              <div className='body'> {value.text} </div>

              <div className='footer'> 
                <div className='author'> {value.author} </div>
                <div className='dateCreated'> {value.createdAt} </div>
              </div> 

            </div>) //include date in footer
        
        })

      }
      
    </div>
  );
}

export default App;
