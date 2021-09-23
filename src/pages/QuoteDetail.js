import React from "react"
import { Route, useParams } from "react-router"
import { Link, useRouteMatch } from "react-router-dom"
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import { DUMMY_QUOTES } from "./Quotes"
export default function QuoteDetail(props){
    const param = useParams()
    const object = DUMMY_QUOTES.find(arg=>arg.id ===param.quoteId)
    const match = useRouteMatch()
    console.log(match,param.quoteId)

    return(
        <React.Fragment>
            
            <HighlightedQuote author={object.author} text={object.text} />
            <Route exact path={`${match.path}`}>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.path}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    )
    
}