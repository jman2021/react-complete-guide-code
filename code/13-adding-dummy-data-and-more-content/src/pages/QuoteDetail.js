import { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';


import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const params = useParams();

  const match = useRouteMatch()
  const commentsUrl = `${match.url}/comments`

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      
      <Route path={match.url} exact>
        <Link to={commentsUrl}>
          Show comments page for {params.quoteId}
        </Link>
      </Route>
      

      <Route path={commentsUrl}>
        <Comments />
        <Link to={match.url}>
          Leave comments page
        </Link>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
