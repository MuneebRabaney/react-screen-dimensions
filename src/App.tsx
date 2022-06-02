import { useState } from 'react';
import './App.css';

import ScreenLogger from './components/ScreenLogger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScreenLogger />
        <form>
          <fieldset>
            <label htmlFor="inputSceenWidth">Set Window Width: &nbsp; </label>
            <input
              id="inputSceenWidth"
              placeholder="Set width here"
              type="number"
              defaultValue={window?.screen?.width}
              min="1"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="inputSceenHeight">Set Window Height: &nbsp; </label>
            <input
              id="inputSceenHeight"
              placeholder="Set height here"
              type="number"
              defaultValue={window?.screen?.height}
              min="1"
            />
          </fieldset>
          <fieldset>
            <button disabled={true} title="button-calculate" type="button">
              Calculate
            </button>
          </fieldset>
        </form>
      </header>
    </div>
  );
}

export default App;
