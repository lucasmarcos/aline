const Emocao = ({ className, nome, emoji }) => (
  <div className={className}>
    <div>{nome}</div>
    <div>{emoji}</div>
  </div>
);

const Emocoes = () => (
  <div>
    <Emocao className="bg-yellow-300" nome="Alegria" emoji="😊" />
  </div>
);

export const Home = () => (
  <div>
    <div className="text-7xl">Psicoeducação na universidade</div>
    <div>Texto</div>
    <div>Trabalhar as emoções</div>
    <div>Vamos aprender mais?</div>

    <Emocoes />

    <div className="flex">
      <div className="text-lg p-3 bg-yellow-300 flex flex-col justify-center align-center">
        <div className="text-3xl">Alegria</div>
        <div className="text-7xl">😊</div>
      </div>
      <div className="text-lg p-3 bg-red-500">
        <div>Raiva</div>
        <div>😠</div>
      </div>
      <div className="text-lg p-3 bg-black text-white">
        <div>Medo</div>
        <div>😨</div>
      </div>
      <div className="text-lg p-3 bg-green-500">
        <div>Nojo</div>
        <div>🤢</div>
      </div>
      <div className="text-lg p-3 bg-blue-500">
        <div>Tristeza</div>
        <div>😟</div>
      </div>
    </div>

    <div>Agora já leu, clique aqui.</div>
  </div>
);
