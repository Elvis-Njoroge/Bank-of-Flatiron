import React from 'react';

const Table=({state,SetState,search})=> {
    return(


    <div>
         <table className="table">
    <thead>
        <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Ammount</th>
        </tr>
  </thead>
  
   <tbody>
    {state.filter((transactions)=>{
        if(search === ''){
            return(transactions) 
        
        }else if (
            transactions.description.toLowerCase().includes(search.toLowerCase())
        ){
            return  transactions
            
        }
            
        
    })
    .map((transactions)=> (
        <tr key={transactions.id}>
            <td>{transactions.date}</td>
            <td>{transactions.description}</td>
            <td>{transactions.category}</td>
            <td>{transactions.amount}</td>
        </tr>
    ))}
</tbody>

  
</table>
        </div>
    )
}
export default Table;