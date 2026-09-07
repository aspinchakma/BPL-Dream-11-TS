import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-[85%] mx-auto border border-black mt-28 flex-1">
        <h3>Child</h3>
      </div>
      <h3 className="font-bold text-5xl">Footer</h3>
    </div>
  );
};

export default Home;
