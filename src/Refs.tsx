import { BG_AMARELO, TXT_ROSA } from "./cores.js";
import { FonteTitulo } from "./fontes.js";
import { Creditos, P, Refs, Referencia } from "./Util.js";
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

export const Referencias = () => (
  <div>
    <Title />

    <div>
      <Refs>
        <Referencia
          autor="DALGALARRONDO, P"
          livro="Psicopatologia e semiologia dos transtornos mentais"
          local="Porto Alegre"
          editora="Artes médicas Sul"
          lancamento="2000"
          link="https://books.google.com.br/books?id=8R5vDwAAQBAJ"
        />

        <Referencia
          autor="EKMAN, P"
          livro="A Linguagem das Emoções"
          local="São Paulo, SP"
          editora="Lua de Papel"
          lancamento="2011"
        />

        <P>
          GOLEMAN, D. Inteligência emocional [recurso eletrônico] / Daniel
          Goleman & Marcos Santarrita. Rio de Janeiro : Objetiva, 2011.
        </P>
      </Refs>

      <Refs>
        <P>
          BATISTA, GUEDES e GONDIM. Medo In: GODIM, S.M.G (orgs.) Manual de
          Orientação e Autodesenvolvimento Emocional, 1ed. São Paulo: Vetor
          Editora, 2020.
        </P>
        <P>
          BAUMAN, Zygmunt. Medo líquido. Rio de Janeiro: Editora Zahar, 2008.
          Edição digital: abril 2012
        </P>
        <P>
          EKMAN, P. A Linguagem das Emoções, São Paulo, SP: Lua de Papel, 2011.
        </P>
      </Refs>
      <Refs>
        <Referencia
          autor="BOTEGA, N.J."
          livro="A tristeza transforma, a depressão paralisa: um guia para pacientes e familiares"
          local="São Paulo, SP"
          editora="Benvirá"
          lancamento="2018"
        />
        <Referencia
          autor="DALGALARRONDO, P."
          livro="Psicopatologia e semiologia dos transtornos mentais"
          local="Porto Alegre"
          editora="Artes médicas Sul"
          lancamento="2000"
        />
        <Referencia
          autor="EKMAN, P."
          livro="A Linguagem das Emoções"
          local="São Paulo, SP"
          editora="Lua de Papel"
          lancamento="2011"
        />
        GODIN, S.M.G (org.) Manual de Orientação e Autodesenvolvimento
        Emocional, 1ed. São Paulo: Vetor Editora, 2020. GOLEMAN, D. Inteligência
        emocional [recurso eletrônico] / Daniel Goleman ;trad. Marcos
        Santarrita. – Rio de Janeiro : Objetiva, 2011.
      </Refs>
      <Refs>
        BARROS, D.M. O lado bom do lado ruim [recurso eletrônico]. Rio de
        Janeiro: Sextante, 2020. Acesso em: 26 abr. 2022. GONDIM, S.M.G (orgs.)
        Manual de Orientação e Autodesenvolvimento Emocional, 1ed. São Paulo:
        Vetor Editora, 2020.
      </Refs>
      <Refs>
        BARROS, D.M. O lado bom do lado ruim [recurso eletrônico]. Rio de
        Janeiro: Sextante, 2020. Acesso em: 26 abr. 2022. GODIM, S.M.G (orgs.)
        Manual de Orientação e Autodesenvolvimento Emocional, 1ed. São Paulo:
        Vetor Editora, 2020. GOLEMAN, D. Inteligência emocional [recurso
        eletrônico] / Daniel Goleman ;trad. Marcos Santarrita. – Rio de Janeiro
        : Objetiva, 2011. MACHADO, L. V.; FACCI, M. G. D.; BARROCO, S. M. S.
        Teoria das emoções em Vigotski. Psicol. estud. [on-line], vol. 16, n. 4,
        2011. p. 647-657. Disponível em: . Acesso em: 18 abr. 2022. MIGUEL,
        F.K.; Psicologia das emoções: uma proposta integrativa para compreender
        a expressão emocional, Psico-USF, Bragança Paulista, v. 20, n. 1, p.
        153-162, jan./abr. 2015.
      </Refs>

      <Refs>
        <Referencia
          autor="EKMAN, P."
          livro="A Linguagem das Emoções"
          local="São Paulo, SP"
          editora="Lua de Papel"
          lancamento="2011"
        />

        <Referencia
          autor="GODIM, S.M.G (orgs.)"
          livro="Manual de Orientação e Autodesenvolvimento Emocional, 1ed"
          local="São Paulo"
          editora="Vetor Editora"
          lancamento="2020"
        />
      </Refs>
    </div>

    <Creditos />
  </div>
);
