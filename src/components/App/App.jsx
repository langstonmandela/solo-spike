import FavList from "../FavView/FavList";
import Form from "../SearchView/Form";
import List from "../SearchView/List";

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
