import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="w-full flex justify-center h-24 bg-white shadow-md fixed">
      <div className="w-full flex items-center justify-between max-w-screen-2xl">
        <img src={Logo} alt="logo" className="w-32" />
        <nav className="hidden lg:flex gap-6 ">
          <button className="text-alphaBlue font-semibold uppercase text-xs hover:text-alphaGold duration-200">
            Inicio
          </button>
          <button className="text-alphaBlue font-semibold uppercase text-xs hover:text-alphaGold duration-200">
            Consorcio
          </button>
          <button className="text-alphaBlue font-semibold uppercase text-xs hover:text-alphaGold duration-200">
            Sobre a alpha
          </button>
          <button className="text-alphaBlue font-semibold uppercase text-xs hover:text-alphaGold duration-200">
            Parceiros
          </button>
          <button className="text-alphaBlue font-semibold uppercase text-xs hover:text-alphaGold duration-200">
            Fale conosco
          </button>
          <button className="text-alphaBlue font-semibold uppercase text-xs hover:text-alphaGold duration-200">
            Area revenda
          </button>
          <button className="px-8 py-2 border text-alphaGold border-alphaGold rounded-full hover:bg-alphaGold hover:text-white duration-200 font-bold">
            Area cliente
          </button>
        </nav>
      </div>
    </div>
  );
};
