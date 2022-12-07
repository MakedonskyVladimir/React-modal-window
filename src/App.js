import React from 'react';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>Click me</button>
      {open && (
        <div onClick={() => setOpen(false)}>
          <svg height="200"></svg>
          <img width="200" src="https://24warez.ru/uploads/posts/060917/573516/4.jpg"></img>
      </div>
      )}
      
    </div>
  );
}

export default App;
