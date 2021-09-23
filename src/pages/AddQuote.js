import React from "react"
import { useHistory } from "react-router"
import QuoteForm from "../components/quotes/QuoteForm"
export default function AddQuote(){

    const history = useHistory()
    function addQuoteHandler(data){
        console.log(data.author)
        history.replace('/quotes')
    }

    
    return(
    <React.Fragment>
    <h1>Add Quote</h1>
    <QuoteForm onAddQuote={addQuoteHandler}/>
    </React.Fragment>
    )
    
}