import { Suspense } from "react";
import AvailableAndSelectedContainer from "../components/AvailableAndSelectedContainer";
import Banner from "../components/Banner";
import Header from "../components/Header";
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
      <Header />
      <main className="w-[85%] mx-auto  mt-28 flex-1">
        <Banner />
        <Suspense fallback={<Loading />}>
          <AvailableAndSelectedContainer players={loadData()} />
        </Suspense>
      </main>
      <h3 className="font-bold text-5xl">Footer</h3>
    </div>
  );
};

export default Home;
