function Header({search,setSearch,data,setData}){


    return(
<div className="App">
     <header className="statement">
      <h1>The Royal Bank of Flatiron</h1>
     </header>
     <input style={{width:"93%",margin:"25px"}} className='Searchbar'
    value={data}
    onChange={(event)=>setData(
        event.target.value
    )}
   type="text"
   placeholder="Search here"/>
   <button onClick={()=>setSearch(data)} className="btn btn-primary">search</button>
</div>
    )
}

export default Header