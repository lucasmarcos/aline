import { BG_AMARELO, TXT_ROSA } from "./cores.js";
import { FonteTitulo } from "./fontes.js";
import { Creditos } from "./Util.js";
import { Menu } from "./Menu.js";

const Title = () => (
  <div className={`${BG_AMARELO}`}>
    <div
      className={`text-5xl md:text-9xl text-center py-24 ${FonteTitulo} ${TXT_ROSA}`}
      style={{ textShadow: "0.3rem 0.3rem 0.3rem black" }}
    >
      PSICOEDUCAÇÃO NA UNIVERSIDADE
    </div>
    <Menu />
  </div>
);

export const Equipe = () => (
  <div>
    <Title />
    <div>EQUIPE</div>
    <Creditos />
  </div>
);
