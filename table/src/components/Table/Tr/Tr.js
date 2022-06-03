import React from 'react';

const Tr = (props) => {
    const values = Object.values(props.tds);
    console.log(values)
    return(
        <tr>
            
            {
                values.map(td =>{
                    return (
                        <td>{td}</td>
                    )
                })
            }
        </tr>
    )
}
export default Tr;