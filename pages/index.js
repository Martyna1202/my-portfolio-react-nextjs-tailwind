import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Navigation from "../components/Navigation";
import { useDarkModeContext } from "../components/useContext/DarkmodeContext";
import MyIntroduction from "../components/MyIntroduction";
import ServicesIOffer from "../components/ServicesIOffer";

export default function Home() {
  const { darkMode } = useDarkModeContext();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navigation />
          <MyIntroduction />
        </section>
        <ServicesIOffer />
        <Portfolio />
      </main>
    </div>
  );
}
