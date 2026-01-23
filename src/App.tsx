import './App.css';
import Header from './components/Header';
import Information from './components/Information';
function App() {
  return (
    <>
      <Header />
      <section className='mt-8 grid grid-cols-[1fr_1px_1fr_1px_1fr] gap-5 text-center'>
        <Information />
      </section>
    </>
  );
}

export default App;