import { Fragment } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {

  const history = useHistory()
  //const match = useRouteMatch()
  const location = useLocation()

  const searchParams = new URLSearchParams(location.search)

  const isAsc = searchParams.get('sort') === 'asc'

  const sortHandler = () => {
    const sortDirection = isAsc ? 'desc' : 'asc'

    history.push(`${location.pathname}?sort=${sortDirection}`)
  }

  return (
    <Fragment>
      <button onClick={() => sortHandler()}>Sort {isAsc ? 'Descending' : 'Ascending'}</button>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
