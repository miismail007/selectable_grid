import React from 'react';
import SelectableGrid from './components/SelectableGrid';

function App() {
  return (
    <div className="App">
      <h1>Selectable grid</h1>
      <SelectableGrid rows={10} cols={10}/>
    </div>
  );
}

export default App;
