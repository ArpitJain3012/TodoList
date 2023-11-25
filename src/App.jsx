import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to market",
      desc: "You need to go market to buy Bread!",
    },
    {
      sno: 2,
      title: "Go to Mall",
      desc: "You need to go mall to hangout!",
    },
    {
      sno: 3,
      title: "Go to gym",
      desc: "You need to go gym to exercise!",
    },
  ];
  return (
    <>
      <Header title="My Todos Lists" searchBar={false} />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
