import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";

function App() {
  return (
    <div className="h-screen  w-screen lg:w-[400px] mx-auto border-[#F5F5F5] border-[1px] relative">
      <header>
        <Header />
      </header>
      <main className="px-10 pb-10">
        <div>
          <Main />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
