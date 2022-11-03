import { BG_CINZA_CLARO } from "./cores.js";
import { Paginas } from "./Emocoes.js";

import {
  Article,
  ArticleHeader,
  BlocoDireita,
  BlocoEsquerda,
  ColorContext,
  Content,
  Citacao,
  Centro,
  P,
  Refs,
  Referencia,
} from "./Util.js";

const Link = ({ pagina }) => (
  <span className={Paginas[pagina].bg}>
    <a href={Paginas[pagina].url}>{Paginas[pagina].titulo}</a>
  </span>
);

export const Final = () => (
  <ColorContext.Provider value={BG_CINZA_CLARO}>
    <Article>
      <ArticleHeader title="QUE EMOÇÃO É ESSA?" />

      <Content>
        <Centro>
          <P>E aí já consegue reconhecer suas emoções?</P>
        </Centro>

        <BlocoDireita>
          <P>
            Deu pra entender um pouquinho como elas funcionam e quais suas
            funções na nossa vida cotidiana?
          </P>
        </BlocoDireita>

        <Centro>
          <P>Vamos recordar?</P>
        </Centro>

        <BlocoEsquerda>
          <P>
            Nossos textos trouxeram informações a respeito da{" "}
            <Link pagina="alegria" />, talvez a emoção que a gente mais busque
            sentir no nosso dia a dia, já que nos desperta sentimentos bons e
            sensação de bem estar.
          </P>

          <Citacao>
            A alegria é uma emoção que surge como resultado de um acontecimento
            positivo que produz bem estar e pode ser expressa, por exemplo, por
            um sorriso (EKMAN, p. 33, 2011).
          </Citacao>
        </BlocoEsquerda>

        <BlocoDireita>
          <P>
            Aprendemos sobre a <Link pagina="tristeza" />, que “tem como função
            propiciar o ajustamento a uma grande perda, como a morte de alguém
            ou uma decepção significativa” (GOLEMAN,2011, p.33), nos auxiliando
            então a nos reorganizarmos emocionalmente quando algo nos frustra e
            nos decepciona.
          </P>
        </BlocoDireita>

        <BlocoEsquerda>
          <P>
            Compreendemos a importância de sentir <Link pagina="medo" />, já que
            possui uma função básica de preservação de vida, pois é a partir
            dele que conseguimos nos antecipar a um dano físico e/ou
            psicológico.
          </P>
        </BlocoEsquerda>

        <BlocoDireita>
          <P>
            E também a importância de sentir <Link pagina="raiva" />, como a
            emoção responsável por nos impulsionar, nos motivar para encarar os
            desafios da vida.
          </P>
        </BlocoDireita>

        <BlocoEsquerda>
          <P>
            Ainda aprendemos que o <Link pagina="nojo" /> também é uma emoção, e
            que possui a função primordial de nos proteger, sendo uma emoção que
            trabalha a favor da prevenção de nos expor a riscos e perigos.
          </P>
        </BlocoEsquerda>

        <BlocoDireita>
          <P>
            Além de reconhecer tudo isso, também reconhecemos que as emoções por
            mais universais que sejam, são expressas de forma muito peculiar e
            individual, de acordo com a experiência social, histórica e cultural
            de cada sujeito.
          </P>
          <P>
            Cabendo a nós o papel de buscarmos entender o que sentimos e ao
            mesmo tempo buscar compreender, ter empatia e respeito sobre como os
            outros sentem, para que não caiamos na armadilha dos julgamentos dos
            sentimentos e emoções do coletivo com que convivemos e nem sejamos
            agentes do nosso próprio julgamento.
          </P>
          <P>
            Conhecer as emoções e perceber seus efeitos em nossas vidas, é o
            primeiro passo para aprender a lidar com elas.
          </P>
        </BlocoDireita>
        
        <BlocoEsquerda>
          <P>
            Compreendendo que uma classificação das emoções como “positivas” ou
            “negativas” é algo arriscado, pois dependemos e somos constituídos
            de todas emoções, elas exercem um papel importante em nossas vidas,
            e as vivenciamos em diferentes momentos, em diferentes graus de
            intensidade, mas as reconhecendo e compreendendo, teremos melhores
            condições para lidar elas.
          </P>
          <P>
            Agora que nossos textos já apresentaram conhecimento básico sobre as
            cinco emoções principais, vamos avançar e apresentar textos para
            refletir sobre como nossas emoções atuam nos relacionamentos
            interpessoais, percebendo seus efeitos e construindo conhecimento
            para aprender a lidar com a emoções, respeitando-as e
            reconhecendo-as como parte da condição humana, e identificando os
            momentos em que tomam uma dimensão que possa ser prejudicial à saúde
            mental e à qualidade de vida.
          </P>
        </BlocoEsquerda>
      </Content>
    </Article>
  </ColorContext.Provider>
);
