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
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "News"), loading ? /*#__PURE__*/React.createElement("p", null, "Loading...") : /*#__PURE__*/React.createElement("p", null, "Loaded"), /*#__PURE__*/React.createElement("p", null, news.length, " news found"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("ul", null, news.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, item.title))));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);