const Emocao = ({ className, nome, emoji }) => (
  <div className={`${className} p-7`}>
    <div className="text-center text-3xl">{nome}</div>
    <div className="text-center text-7xl">{emoji}</div>
  </div>
);

const Emocoes = () => (
  <div className="flex align-center justify-center">
    <Emocao className="bg-yellow-300" nome="Alegria" emoji="😊" />
    <Emocao className="bg-red-500" nome="Raiva" emoji="😠" />
    <Emocao className="bg-black text-white" nome="Medo" emoji="😨" />
    <Emocao className="bg-green-500" nome="Nojo" emoji="🤢" />
    <Emocao className="bg-blue-500" nome="Tristeza" emoji="😟" />
  </div>
);

export const Home = () => (
  <div>
    <div className="text-7xl text-center m-12">
      Psicoeducação na universidade
    </div>
    <div>Texto</div>
    <div>Trabalhar as emoções</div>
    <div>Vamos aprender mais?</div>

    <Emocoes />

    <div>Agora já leu, clique aqui.</div>
  </div>
);
