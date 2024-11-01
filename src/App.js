import logo from './logo.svg';

function App() {
  return (
    <div className="flex bg-[#282c34] text-white text-xl h-screen items-center justify-center">
      <header className="flex flex-col gap-5 items-center justify-center">
        <img src={logo} className="animate-spin h-40 duration-2000" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-[#61dafb] underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
