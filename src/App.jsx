import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import LogIn from "./pages/logIn/logIn";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <section>
          <LogIn />
        </section>
        <section>
          <Card />
        </section>
        <Examples />
      </main>
    </div>
  );
}

export default App;
