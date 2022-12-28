const root = document.querySelector('#root');

// function App() {
//     const [count, setCount] = React.useState(0);
//     return (
//         <>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>

//             <button onClick={() => setCount(0)}>Reset</button>
//         </>
//     );
// }
function App() {
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState([true]);

    React.useEffect(() => {
        async function getData() {
            const request = await fetch('https://hn.algolia.com/api/v1/search?query=indonesia');
            const response = await request.json();
            setNews(response.hits);
            setLoading(false);
        } 
        getData();
    })

    return(
        <><h1>News</h1>
        {loading ? <p>Loading...</p> : <p>Loaded</p>}
        <p>{news.length} news found</p>
        <hr/>
        <ul>
            {news.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>
        </>
    );
}

ReactDOM.render(<App></App>, root);