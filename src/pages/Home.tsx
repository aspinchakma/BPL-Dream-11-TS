import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import AvailableAndSelectedContainer from "../components/AvailableAndSelectedContainer";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import type { Player } from "../type/type";
import Loading from "./Loading";

const Home = () => {
  const loadData = async (): Promise<Player[]> => {
    const response = await fetch(
      "https://aspinchakma.github.io/api-for-practice/players.json",
    );
    const data = await response.json();
    return data;
  };
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <Header />
      <main className="w-[85%] mx-auto  mt-28 flex-1 relative">
        <Banner />
        <Suspense fallback={<Loading />}>
          <AvailableAndSelectedContainer players={loadData()} />
        </Suspense>
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
