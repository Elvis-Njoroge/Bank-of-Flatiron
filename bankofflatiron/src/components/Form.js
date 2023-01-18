import React,{useState} from 'react';



function Form({state,setState}) {

    
    const [inputText, setInputText] = useState("");
    const [inputText2, setInputText2] = useState("");
    const [inputText3, setInputText3] = useState("");
    const [inputText4, setInputText4] = useState("");

    
    const inputDate = (event) => {
        setInputText(event.target.value);
    }
    const inputDescription = (event) => {
        setInputText2(event.target.value);
    }
    const inputCategory = (event) => {
        setInputText3(event.target.value);
    }
    const inputAmount = (event) => {
        setInputText4(event.target.value);
    }

    
    const submitTransaction = (event) => {
        event.preventDefault();
        
        const transactionObj = {
            date: inputText,
            description: inputText2,
            category: inputText3,
            amount: inputText4,
        }
        setState([...state, transactionObj]);
        setInputText("");
        setInputText2("");
        setInputText3("");
        setInputText4("");

        fetch("http://localhost:8001/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transactionObj),
        })


    }


        return (
            <div className="container mx-auto text-center row p-1 ">
                <form className="col-12" onSubmit={submitTransaction}>
                    <div className="row">
                        <div className="col-3">
                            <input type="date" className="form-control" value={inputText} 
                            onChange={inputDate} />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control" value={inputText2} placeholder='Description'
                            onChange={inputDescription} />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control" value={inputText3} placeholder='Category'
                             onChange={inputCategory} />
                        </div>
                        <div className="col-3">
                            <input type="text" className="form-control" value={inputText4} placeholder='Amount'
                             onChange={inputAmount} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
            </div>
        );
    }

    

export default Form;