import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";
import Card from "./components/Card/Card";
import LogIn from "./pages/logIn/logIn";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* ***Dynamic List Content*** */}
            {CORE_CONCEPTS.map((concepItem) => (
              <CoreConcept key={concepItem.title} {...concepItem} />
            ))}

            {/* Das ist viel besser als darunter */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section>
          <LogIn />
        </section>
        <section>
          <Card name="Samer Zukari">
            <p>
              Samer is a professor of Computer Science at the University of
              Augsburg.
            </p>
            <p>
              <a href="mailto:blake@example.com">Email Samer</a>
            </p>
          </Card>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {selectedTopic ? (
              <>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>{" "}
              </>
            ) : (
              <p>Bitte Select</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
