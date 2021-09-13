import { useParams, useRouteMatch } from "react-router"
import { Route, Link } from "react-router-dom"

import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
    const params = useParams()
    const match = useRouteMatch()
    
    const commentsPath = `${match.url}/comments`
    
    const quoteId = params.QuoteId

    return (
        <div>
            <p>Quote {quoteId} details here!</p>
            <ul>
                <li>
                    <Link to={commentsPath}>See Quote {quoteId} comments page</Link>
                </li>                
            </ul>
        
            <Route path={commentsPath} exact>
                <div>
                    <Comments/>  
                    <ul>
                        <li>
                            <Link to={`${match.url}`}>Leave Quote {quoteId} comments page</Link>
                        </li>
                    </ul>                  
                </div>
            </Route>
        </div>
    )

}

export default QuoteDetails