import { BG_CINZA_CLARO } from "./cores.js";
import {
  Article,
  ArticleHeader,
  BlocoDireita,
  ColorContext,
  Content,
  P,
} from "./Util.js";

export const Final = () => (
  <ColorContext.Provider value={BG_CINZA_CLARO}>
    <Article>
      <ArticleHeader title="Que emoção é essa?" />

      <Content>
        <BlocoDireita>
          <P>
            E aí já consegue reconhecer suas emoções? Deu pra entender um
            pouquinho como elas funcionam e quais suas funções na nossa vida
            cotidiana? Vamos recordar?
          </P>

          <P>
            Nossos textos trouxeram informações a respeito da ALEGRIA, talvez a
            emoção que a gente mais busque sentir no nosso dia a dia, já que nos
            desperta sentimentos bons e sensação de bem estar. "A alegria é uma
            emoção que surge como resultado de um acontecimento positivo que
            produz bem estar e pode ser expressa, por exemplo, por um sorriso"
            (EKMAN, p. 33, 2011). Aprendemos sobre a TRISTEZA, que “tem como
            função propiciar o ajustamento a uma grande perda, como a morte de
            alguém ou uma decepção significativa” (GOLEMAN,2011, p.33), nos
            auxiliando então a nos reorganizarmos emocionalmente quando algo nos
            frustra e nos decepciona. Compreendemos a importância de sentir
            MEDO, já que possui uma função básica de preservação de vida, pois é
            a partir dele que conseguimos nos antecipar a um dano físico e/ou
            psicológico. E também a importância de sentir RAIVA, como a emoção
            responsável por nos impulsionar, nos motivar para encarar os
            desafios da vida. Ainda aprendemos que o NOJO também é uma emoção, e
            que possui a função primordial de nos proteger, sendo uma emoção que
            trabalha a favor da prevenção de nos expor a riscos e perigos.
          </P>

          <P>
            Além de reconhecer tudo isso, também reconhecemos que as emoções por
            mais universais que sejam, são expressas de forma muito peculiar e
            individual, de acordo com a experiência social, histórica e cultural
            de cada sujeito. Cabendo a nós o papel de buscarmos entender o que
            sentimos e ao mesmo tempo buscar compreender, ter empatia e respeito
            sobre como os outros sentem, para que não caiamos na armadilha dos
            julgamentos dos sentimentos e emoções do coletivo com que convivemos
            e nem sejamos agentes do nosso próprio julgamento.
          </P>

          <P>
            Conhecer as emoções e perceber seus efeitos em nossas vidas, é o
            primeiro passo para aprender a lidar com elas. Compreendendo que uma
            classificação das emoções como “positivas” ou “negativas” é algo
            arriscado, pois dependemos e somos constituídos de todas emoções,
            elas exercem um papel importante em nossas vidas, e as vivenciamos
            em diferentes momentos, em diferentes graus de intensidade, mas as
            reconhecendo e compreendendo, teremos melhores condições para lidar
            elas. Agora que nossos textos já apresentaram conhecimento básico
            sobre as cinco emoções principais, vamos avançar e apresentar textos
            para refletir sobre como nossas emoções atuam nos relacionamentos
            interpessoais, percebendo seus efeitos e construindo conhecimento
            para aprender a lidar com a emoções, respeitando-as e
            reconhecendo-as como parte da condição humana, e identificando os
            momentos em que tomam uma dimensão que possa ser prejudicial à saúde
            mental e à qualidade de vida. Se quiser saber mais sobre isso, fique
            atento. Os textos agora serão encaminhados todo dia 07 de cada mês.
            Referências Bibliográficas EKMAN, P. A Linguagem das Emoções, São
            Paulo, SP: Lua de Papel, 2011. GODIM, S.M.G (orgs.) Manual de
            Orientação e Autodesenvolvimento Emocional, 1ed. São Paulo: Vetor
            Editora, 2020. Projeto "Psicoeducação na Universidade"
            COGERH/NUAPE/Subcomissão Saúde Mental e Qualidade de Vida Campus
            Dois Vizinhos Aline Anacleto Marchesan CRP 08/14785 - Danieli Ghedin
            Sartori CRP 08/14368
          </P>
        </BlocoDireita>
      </Content>
    </Article>
  </ColorContext.Provider>
);
