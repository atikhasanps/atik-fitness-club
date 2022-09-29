const addToDb = id =>{
    const quantity = localStorage.getItem(id);
   
        localStorage.setItem(id, 1);
    
}

const getBreakTime =()=>{
    const addToDb = id =>{
        const quantity = localStorage.getItem(id);
       
            localStorage.setItem(id, 1);
        
    }
}

export{
    addToDb,
    getBreakTime
}