import { Header } from "./components/header";
import { Home } from "./pages/home";

export function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center ">
      <Header />
      <Home />
    </div>
  );
}
