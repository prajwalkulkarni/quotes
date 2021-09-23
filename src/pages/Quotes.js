import React from "react";
import QuoteList from "../components/quotes/QuoteList";
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
    return(
        <React.Fragment>
        <h1>All quotes</h1>
        <QuoteList quotes={DUMMY_QUOTES}/>
        </React.Fragment>
    )
}