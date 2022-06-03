import React, {useEffect, useState} from 'react';
import { Table, Button } from 'react-bootstrap';
import Tr from './Tr/Tr';
const TableAdaptive = (props) => {
    
    const byFieldDown = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    const byFieldUp = (field) => {
        return (a, b) => a[field] < b[field] ? 1 : -1;
    }
   
    const [info, setInfo] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [names, setNames] = useState([]);
    const [error, setError] = useState(null);
    const sortColumn=(name)=>{
        const sortInfo = [...info];
        sortInfo.sort(byFieldDown(name));
        setInfo(sortInfo);
    }

    useEffect(() =>{
        const fetchData = async()=>{
            const response = await fetch(url);
            if(response.ok){
                const data = response.json();
                data.then(json => {
                    setInfo(json);
                    console.log(json)
                })
            }
            
        }
        fetchData().catch(error => setError(error));
        
        
    }, [])
    

    useEffect(()=>{
        const setNewRow = async ()=>{
            const infoCopy = [...info];
            const keys=Object.keys(infoCopy[0]);
            console.log(info[0])
            setNames(keys)
        }
        setNewRow();
    }, [info])


    return (
        <div className="container">
        <Table striped bordered hover>
            <thead>
                <tr>
                    
                    {names.map(name=>{
                        return(
                          <td>{name}</td>  
                        ) 
                    })}
                </tr>
            </thead>
            <tbody>
                {info.map(obj=>{
                    console.log(obj);
                    for (let key in obj) {
                        if(obj.hasOwnProperty(key)){
                          return (<Tr tds = {obj}></Tr>)
                        }
                    }
                })}
                
            </tbody>
      </Table>
      </div>    
    )
}

export default TableAdaptive;