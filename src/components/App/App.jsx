import FavList from "../FavView/FavList";
import Form from "../SearchView/Form";
import List from "../SearchView/List";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <Form />
      <List />
      <FavList />
    </div>
  );
}

export default App;
