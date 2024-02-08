import FavList from "../FavView/FavList";
import Form from "../SearchView/Form";
import List from "../SearchView/List";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  const history = useHistory();

  return (
    <Router>
      <Route path="/">
        <header className="App-header">
          <h1 className="App-title">GIPHY SEARCH</h1>
          <button onClick={() => history.push('/')}>HOME</button>
          <button onClick={() => history.push('/favorites')}>FAVORITE GIFS</button>
        </header>
      </Route>
      <Route path="/" exact>
        <Form />
        <List />
      </Route>
      <Route path='/favorites'>
      <FavList />
      </Route>
    </Router>
  );
}


export default App;
