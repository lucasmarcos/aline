import {
  Article,
  ArticleHeader,
  BlocoDireita,
  BlocoEsquerda,
  Citacao,
  ColorContext,
  Content,
  P,
  Refs,
} from "./Util.js";

export const Medo = () => (
  <ColorContext.Provider value="bg-orange-500">
    <Article>
      <ArticleHeader title="MEDO" />

      <Content>
        <img src="img/medo/1.jpg" />

        <BlocoDireita>
          <P>
            O medo possui uma função básica de preservação de vida, pois é a
            partir dele que conseguimos nos antecipar a um dano físico e/ou
            psicológico.
          </P>
          <P>
            As alterações no corpo, em situações de medo, talvez sejam as mais
            perceptíveis: o sangue corre para os grandes músculos das pernas,
            preparando-as para correr; ocorre uma aceleração dos batimentos
            cardíacos;
          </P>
        </BlocoDireita>
        <Citacao atribuicao="EKMAN, 2011, p.172">
          podemos observar que as pálpebras superiores se elevam, sobrancelhas
          se erguem e se unem, maxilar se abre, o estômago reage, as mãos e a
          face se aquecem, a respiração se altera, fica mais profunda e rápida,
          alguns tremores podem ocorrer
        </Citacao>
        <BlocoEsquerda>
          <P>
            Importante ressaltar que o medo desperta sensações e possui efeitos
            diferentes em cada um de nós
          </P>
        </BlocoEsquerda>
        <Citacao
          atribuicao="BATISTA, GUEDES e GONDIM,
            2020, p.60"
        >
          pois depende de variáveis individuais, culturais e contextuais
        </Citacao>

        <BlocoDireita>
          <P>
            O medo não é uma emoção patológica, mas algo universal dos animais
            superiores e do homem, que tem inclusive sua função de regulação
            emocional, porque, em sua maioria, por medo, paralisamos diante de
            uma situação ameaçadora, essa paralisia nos dá o direito de refletir
            sobre a situação, avaliar se é melhor evitá-la, por ainda não termos
            condições suficientes de enfrentá-la, ou se temos recursos que nos
            habilite a enfrentar a circunstância que nos ameaça.
          </P>
          <P>
            Contudo, nas situações em que não sabemos nomear de onde vem o medo,
            a probabilidade é maior de não sabermos como lidar com ele, logo,
            pode ser
          </P>
        </BlocoDireita>

        <Citacao atribuicao="BAUMAN,2008, p.05">
          mais assustador quando difuso, disperso, indistinto, desvinculado,
          desancorado, flutuante, sem endereço nem motivo claros; quando nos
          assombra sem que haja uma explicação visível, quando a ameaça que
          devemos temer pode ser vislumbrada em toda parte, mas em lugar algum
          se pode vê-la
        </Citacao>
        <BlocoEsquerda>
          <P>
            Na vida cotidiana, o medo é a principal emoção responsável pela
            identificação e o preparo para lidar com ameaças de sobrevivência.
            Essa emoção surge quando uma situação sugere ser ameaçadora, e
            quanto mais desconhecido é o evento, maior será a intensidade do
            medo”(BATISTA, GUEDES e GONDIM, 2020, p.60).
          </P>
          <P>
            É aqui que encontramos o medo que muitas vezes nos apavora
            intensamente, bloqueando nossas ações, nos impedindo de fazer o que
            precisamos e desejamos.
          </P>
          <P>
            Esses medos exacerbados, desproporcionais e limitantes merecem
            atenção profissional, pois indicam a necessidade de um olhar mais
            focado em nossa saúde, já que, alguns distúrbios emocionais, como as
            fobias, transtorno de estresse pós-traumático e transtorno de
            ansiedade, têm o medo desempenhando um papel importante,
            constituindo-se como uma característica de transtornos mentais.
            Compreendemos que quando nos referimos ao medo, são infinitas as
            possibilidades descritas pelas pessoas, a maior parte delas são
            funcionais e próprias da nossa condição de existência, algumas podem
            estar relacionadas a distúrbios emocionais.
          </P>
          <P>
            O fato é que podemos ter medo de dirigir, medo do não, medo do sim,
            medo de envelhecer, medo de cachorro/gato, medo de adoecer, medo de
            avião, medo de baratas, medo do escuro, medo de morrer, medo de
            amar, medo de sofrer, medo de perder o emprego, medo de demonstrar
            vulnerabilidade, medo de não agradar. E você sente medo do que? Como
            tem manejado seus medos? Além de compreender nossos próprios medos,
            a função deles em nossas vidas e as estratégias para lidar com eles,
            “é necessário que haja compaixão para respeitar os medos, para se
            solidarizar e, pacientemente buscar tranquilizar alguém que teme
            algo que não tememos” (Ekman, 2011, p.165).
          </P>
          <P>
            Assim, ressaltamos que dar nome às emoções é crucial! Compreender as
            emoções, construir autoconhecimento e consciência, torna mais fácil
            o controle da impulsividade, e uma vivência mais regular da emoções,
            bem como, possibilita o respeito e a empatia com os próprios estados
            emocionais e com o estado emocional do outro.
          </P>
        </BlocoEsquerda>
      </Content>

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
    </Article>
  </ColorContext.Provider>
);
