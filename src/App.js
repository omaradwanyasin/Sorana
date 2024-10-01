import "./App.css";
import Layout from "./Pages/Layout";
import IndexComponent from "./Components/IndexComponent";

function App() {
  const messages = ["Welcome Yaz"]; // Sample flash messages
  const tokens = 100; // Sample token value
  return (
    <div className="App">
      <Layout>
        <IndexComponent tokens={100} />
      </Layout>
    </div>
  );
}

export default App;
