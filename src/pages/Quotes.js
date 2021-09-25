import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import LoadingSpinner from '../components/UI/LoadingSpinner'
export const DUMMY_QUOTES = [
    {
        id:'q1',
        author:'Steve Jobs',
        text:'The only way to do great things is to love what you do!'
    },
    {
        id:'q2',
        author:'Mark Zuckerberg',
        text:'Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.'

    },
    {
        id:'q3',
        author:'Elon Musk',
        text:'When something is important enough, you do it even if the odds are not in your favor.'
    }
]
export default function Quotes(){

    const {sendRequest, status, data:loadedQuotes,error} = useHttp(getAllQuotes,true)

    useEffect(()=>{
        sendRequest()
    },[sendRequest])

    if(status==='pending'){
        return(
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        )
    }

    if(error){
        return <p className='centered focused'>{error}</p>
    }

    if(status==='completed' && (!loadedQuotes || loadedQuotes.length===0)){
        return <NoQuotesFound/>
    }
    return(
        <React.Fragment>
        <h1>All quotes</h1>
        <QuoteList quotes={loadedQuotes}/>
        </React.Fragment>
    )
}