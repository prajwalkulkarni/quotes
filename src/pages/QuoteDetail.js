import React, { useEffect } from "react"
import { Route, useParams } from "react-router"
import { Link, useRouteMatch } from "react-router-dom"
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from "../hooks/use-http"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { getSingleQuote } from "../lib/api"
import NoQuotesFound from "../components/quotes/NoQuotesFound"
export default function QuoteDetail(props){
    const param = useParams()
    const match = useRouteMatch()
    const {sendRequest,data,error,status} = useHttp(getSingleQuote)
    // console.log(match.path)
    useEffect(()=>{
        sendRequest(param.quoteId)
    },[sendRequest,param.quoteId])

    if(status==="pending"){
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }
    
    if(error || !data){
        return (<div><NoQuotesFound/></div>)
        
   
    }

    return(
        <React.Fragment>
            
            <HighlightedQuote author={data.author} text={data.text} />
            <Route exact path={match.path}>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    )
    
    
}