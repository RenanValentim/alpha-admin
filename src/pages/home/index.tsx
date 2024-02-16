import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { FadeLeft } from "@/components/animations/fadeLeft";

export const Home = () => {
  const [installment, setInstallment] = useState(3057.54);
  const [totalInstallment, setTotalInstallment] = useState(5662.1);
  const [credit, setCredit] = useState(540000);
  const [totalCredit, setTotalCredit] = useState(1000000);

  return (
    <div className="w-full h-screen px-10 flex items-center justify-between max-w-screen-2xl py-0.5 bg-banner-carrossel">
      <FadeLeft>
        <h1 className="text-alphaBlue text-4xl text-start font-bold max-w-lg uppercase">
          Concretize seus objetivos com simplicidade e eficiência
        </h1>
      </FadeLeft>

      <div className="w-80 flex flex-col px-5 items-center justify-center py-4 border-0 rounded-lg bg-white">
        <h1 className="text-black text-xl text-center font-bold">
          A hora de realizar é agora
        </h1>
        <label className="text-sm font-semibold mt-5 mb-4">
          Selecione sua proxima conquista
        </label>
        <Tabs defaultValue="imoveis" className="w-full">
          <TabsList className="rounded-full w-full justify-between p-0">
            <TabsTrigger
              value="imoveis"
              className="px-4 py-2 rounded-full data-[state=active]:bg-alphaGold data-[state=active]:text-white"
            >
              Imóveis
            </TabsTrigger>
            <TabsTrigger
              value="veiculos"
              className="px-4 py-2 rounded-full data-[state=active]:bg-alphaGold data-[state=active]:text-white"
            >
              Veículos
            </TabsTrigger>
            <TabsTrigger
              value="servicos"
              className="px-4 py-2 rounded-full data-[state=active]:bg-alphaGold data-[state=active]:text-white"
            >
              Serviços
            </TabsTrigger>
          </TabsList>
          <div className="w-full flex flex-col  items-center justify-center mt-1">
            <label className="text-sm font-semibold mt-2 mb-4">
              Simule o o plano por:
            </label>
            <Tabs defaultValue="parcela" className="w-full ">
              <TabsList className="rounded-full w-full p-0">
                <TabsTrigger
                  value="parcela"
                  className="w-full py-2 px rounded-full data-[state=active]:bg-alphaGold data-[state=active]:text-white"
                >
                  Parcela
                </TabsTrigger>
                <TabsTrigger
                  value="credito"
                  className="w-full py-2 rounded-full data-[state=active]:bg-alphaGold data-[state=active]:text-white"
                >
                  Crédito
                </TabsTrigger>
              </TabsList>
              <TabsContent value="parcela">
                <div className="flex flex-col items-center">
                  <label className="text-sm font-semibold mt-4 mb-4">
                    Escolha o valor da parcela:
                  </label>
                  <div className="flex mb-10 items-center gap-1">
                    <label className="font-bold text-lg">R$</label>
                    <label className="font-bold text-3xl text-alphaGold">
                      {installment.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </label>
                  </div>

                  <Slider
                    defaultValue={[installment]}
                    max={totalInstallment}
                    onValueChange={(e) => setInstallment(e[0])}
                  />
                </div>
              </TabsContent>
              <TabsContent value="credito">
                <div className="flex flex-col items-center">
                  <label className="text-sm font-semibold mt-4 mb-4">
                    Escolha o valor do crédito:
                  </label>
                  <div className="flex mb-10 items-center gap-1">
                    <label className="font-bold text-lg">R$</label>
                    <label className="font-bold text-3xl text-alphaGold">
                      {credit.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                      })}
                    </label>
                  </div>
                  <Slider
                    defaultValue={[credit]}
                    max={totalCredit}
                    onValueChange={(e) => setCredit(e[0])}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Tabs>
        <div className="w-full mt-10">
          <button className="w-full py-2 bg-alphaGold text-white  font-bold rounded-full">
            Simular Agora
          </button>
        </div>
      </div>
    </div>
  );
};
