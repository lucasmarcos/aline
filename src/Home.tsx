const URLS = {
  Alegria: "alegria.html",
  Medo: "medo.html",
  Tristeza: "tristeza.html",
  Nojo: "nojo.html",
  Raiva: "raiva.html",
};

const Title = () => (
  <div className="text-7xl text-center p-12 bg-black text-white">
    Psicoeducação na universidade
  </div>
);

const Emocao = ({ className, nome, emoji }) => (
  <a href={URLS[nome]}>
    <div className={`${className} p-7`}>
      <div className="text-center text-3xl">{nome}</div>
      <div className="text-center text-7xl my-3">{emoji}</div>
    </div>
  </a>
);

const Emocoes = () => (
  <div className="flex align-center justify-center bg-gray-600 flex-col md:flex-row">
    <Emocao className="bg-yellow-300" nome="Alegria" emoji="😊" />
    <Emocao className="bg-red-500" nome="Raiva" emoji="😠" />
    <Emocao className="bg-black text-white" nome="Medo" emoji="😨" />
    <Emocao className="bg-green-500" nome="Nojo" emoji="🤢" />
    <Emocao className="bg-blue-500" nome="Tristeza" emoji="😟" />
  </div>
);

export const Home = () => (
  <div>
    <Title />
    <div className="flex bg-gray-300">
      <div className="text-xl mx-auto max-w-md py-5">
        Texto: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </div>

      <div className="text-xl mx-auto max-w-md py-5">
        Trabalhar as emoções: Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>

    <div className="text-center py-3 text-xl bg-gray-600 text-white">
      Vamos aprender mais? call to action
    </div>

    <Emocoes />

    <div className="text-center py-3 text-xl bg-gray-600 text-white">
      Agora já leu, clique aqui. call to action 2
    </div>
  </div>
);
