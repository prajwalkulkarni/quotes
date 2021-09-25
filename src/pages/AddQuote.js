import React, { useEffect } from "react"
import { useHistory } from "react-router"
import QuoteForm from "../components/quotes/QuoteForm"
import useHttp from "../hooks/use-http"
import { addQuote } from "../lib/api"
export default function AddQuote(){

    const http = useHttp(addQuote)
    const history = useHistory()

    useEffect(()=>{
        if(http.status==='completed'){
            history.push('/quotes')
        }
    },[http.status,history])
    function addQuoteHandler(data){
        // console.log(data.author)
        http.sendRequest(data)
    }

    
    return(
    <React.Fragment>
    <h1>Add Quote</h1>
    <QuoteForm isLoading={http.status==='pending'} onAddQuote={addQuoteHandler}/>
    </React.Fragment>
    )
    
}