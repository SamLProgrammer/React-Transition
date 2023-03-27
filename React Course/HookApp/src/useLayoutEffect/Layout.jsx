import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../examples";

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/' + counter);

    const handleNextQuoteClicked = () => {
        increment();
    }

    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            {
                (isLoading) ?
                    <LoadingQuote loadingMessage={'Loading Quote...'} />
                    :
                    <Quote quote={quote} author={author} />
            }
            <button className="btn btn-primary"
                onClick={handleNextQuoteClicked}
                disabled={isLoading}>
                Next Quote
            </button>
        </>
    )
}
