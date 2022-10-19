import { BG_AMARELO, BG_PRETO, CinzaEscuro, TXT_ROSA } from "./cores.js";
import { FonteTexto, FonteTitulo } from "./fontes.js";
import { Creditos, P } from "./Util.js";

const URLS = {
  Alegria: "alegria.html",
  Medo: "medo.html",
  Tristeza: "tristeza.html",
  Nojo: "nojo.html",
  Raiva: "raiva.html",
};

const Title = () => (
  <div
    className={`text-5xl md:text-9xl text-center py-24 ${BG_AMARELO} ${TXT_ROSA} ${FonteTitulo}`}
    style={{ textShadow: "0.3rem 0.3rem 0.3rem black" }}
  >
    Psicoeducação na Universidade
  </div>
);

const Emocao = ({ className, nome, emoji }) => (
  <a href={URLS[nome]}>
    <div className={`${className} p-7`}>
      <div className={`text-center text-3xl ${FonteTitulo}`} style={{ textShadow: `0.1rem 0.1rem 0.3rem #${CinzaEscuro}`}}>{nome}</div>
      <div className="text-center text-7xl p-3" style={{ textShadow: `0.1rem 0.1rem 0.3rem #${CinzaEscuro}`}}>{emoji}</div>
    </div>
  </a>
);

const Emocoes = () => (
  <div className={`flex align-center justify-center  flex-col md:flex-row ${BG_PRETO}`} >
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

    <div
      className={`flex max-w-2xl mx-auto ${FonteTexto}`}
      style={{ fontFamily: "IBM Plex Sans" }}
    >
      <div className="text-xl mx-auto py-5">
        <P>
          Na atuação enquanto Psicólogas do campus Dois Vizinhos, mesmo atuando
          em setores e com públicos diferentes, nos deparamos com uma mesma
          demanda, voltada constantemente para situações que envolvem emoções e
          habilidades sociais básicas, tais como o reconhecimento e a expressão
          das emoções, as dificuldades para lidar com elas, o enfrentamento de
          situações emocionais cotidianas, as dificuldades encontradas na
          verbalização dos sentimentos, a busca de autocontrole, de
          posicionamento, de saber ouvir críticas, de criar uma comunicação
          assertiva no momento de fazer críticas e sugestões, de desenvoltura
          nas relações criadas a partir do ambiente escolar e de trabalho, entre
          outras queixas que podem ser atendidas por meio da psicoeducação.
        </P>
        <P>
          A psicoeducação é uma intervenção psicoterapêutica em que agrupa
          técnicas da educação aliadas a conhecimentos científicos da
          psicologia, a fim de construir um processo educativo a um determinado
          público sobre um determinado tema.
        </P>
        <P>
          É uma maneira de auxiliar um processo de psicoterapia tradicional, com
          informações pertinentes àquele momento psicoterápico, contribuindo
          para que o sujeito possa aprender sobre ele mesmo e sua condição de
          saúde mental, consolidando-se em uma “maneira mais efetiva para
          auxiliar as pessoas é ensiná-las a se ajudarem, propiciando
          conscientização e autonomia” (Authier, 1977).
        </P>
        <P>
          Sendo assim, a ideia é trabalhar a demanda existente por meio da
          técnica de psicoeducação, construindo e divulgando conhecimento a
          respeito das emoções e habilidades sociais, capazes de promover
          prevenção em saúde mental, por meio da ampla divulgação de informações
          educativas.
        </P>
        <P>
          Assim, justificamos a criação desse espaço, de cunho terapêutico
          preventivo e de acompanhamento, unindo a Psicologia da Educação e do
          Trabalho, para que se possa construir uma cultura de cuidado sistêmico
          com os membros da Universidade.
        </P>
        <P>
          Assim, poderão compreender melhor suas emoções, expressá-las,
          respeitá-las, encontrar estratégias de enfrentamento para lidar com
          elas, principalmente reconhecendo os momentos que tomam uma dimensão
          que possa ser prejudicial à saúde mental e à qualidade de vida.
        </P>
      </div>
    </div>

    <div className={`text-center py-3 text-3xl text-white ${BG_PRETO}`}>
      Vamos aprender mais? {/* call to action */} 
    </div>

    <Emocoes />

    <div className={`text-center py-3 text-3xl text-white ${BG_PRETO}`}>
      Agora já leu, clique aqui. {/* call to action */}
    </div>
    <Creditos />
  </div>
);
