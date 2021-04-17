import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <Weather default="Zagreb" />
      </div>
      <footer>
        <div class="code-link">
          <p>
            <a
              href="https://github.com/WinglessNomad/weather-react-app"
              class="cl"
              rel="noreferrer"
            >
              Open-source code
            </a>
            for
            <a href="https://www.shecodes.io/" class="cl" rel="noreferrer">
              SheCodes
            </a>
            by Nina B
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
