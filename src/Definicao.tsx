import { BG_CINZA_CLARO, BG_PRETO } from "./cores.js";
import { Emocoes } from "./Emocoes.js";
import {
  Article,
  ArticleHeader,
  BlocoDireita,
  BlocoEsquerda,
  Centro,
  ColorContext,
  P,
} from "./Util.js";

export const Definicao = () => (
  <ColorContext.Provider value={BG_CINZA_CLARO}>
    <Article>
      <ArticleHeader title="Vamos falar sobre nossas emoções?" subtitle="" />

      <BlocoDireita>
        <P>
          Certamente uma característica que nos torna realmente humanos é o fato
          de possuirmos emoções e conseguirmos expressá-las de alguma maneira.
        </P>
      </BlocoDireita>

      <Centro>
        <P>Vamos entender melhor...</P>
      </Centro>

      <BlocoEsquerda>
        <P>
          Cada um de nós possui uma sensibilidade diferente ao se emocionar.
          Reagimos emocionalmente de forma diferente diante dos mesmos
          fenômenos. Tudo bem, a diversidade é super bem vinda! E é essa
          capacidade, que atualmente, além de ser amplamente estudada, vem sendo
          entendida como uma grande aliada no contexto da promoção da saúde
          mental.
        </P>
        <P>
          Na verdade, de maneira objetiva, as emoções podem ser entendidas como
          reações, uma espécie de excitação, interna ou externa, consciente ou
          inconsciente; como um conjunto de alterações percebidas no corpo,
          relacionadas a sensações físicas, que geralmente acarretam
          características que são observáveis, momentâneas e desencadeadas por
          estímulos significativos. Ao passo que essa sensação física ocorre,
          desencadeamos uma interpretação subjetiva dessa emoção, ou seja,
          surgem os conteúdos mentais, os pensamentos, que estão relacionados a
          aquela emoção. Chamamos isso de sentimentos. Como a pessoa se sente
          diante do despertar de alguma emoção.
        </P>
        </BlocoEsquerda>
        <BlocoDireita>
        <P>
          Esse sentimento é subjetivo, porque depende da experiência que cada
          pessoa teve, está associado a conteúdos intelectuais, valores e
          representações em relação a cada emoção despertada. Assim, percebemos
          que as emoções são tanto uma experiência física, quanto psíquica.
          Todas as emoções são válidas e possuem a função de nos ajudar a
          avaliar a nossa realidade, o modo como vivenciamos, tanto no que diz
          respeito ao ambiente externo, quanto internamente, como pensamos e nos
          sentimos.
        </P>
        <P>
          Podemos afirmar então, distante da ideia de que temos que ser
          racionais o tempo todo, baseando nossas ações sempre na razão, as
          emoções nos ajudam a tomar decisões, porque orientam os nossos
          pensamentos, que nos movem para uma ação necessária e nos faz tomar
          decisões, importantes para nosso cotidiano e para nosso bem estar.
        </P>
        </BlocoDireita>
        <BlocoEsquerda>
        <P>
          As emoções são fundamentais para nosso dia a dia Entender quais são as
          principais emoções e como funcionam, possibilita uma reflexão que faz
          com que a gente consiga entender quais sentimentos meus são
          despertados por determinadas emoções vivenciadas. Essa compreensão me
          leva a construir um conhecimento importante, capaz de promover
          autonomia a respeito do conhecimento sobre mim mesmo, as minhas
          demandas emocionais e o impacto que possuem sobre a minha saúde
          mental. Sem esquecer que isso também facilita muito na compreensão das
          reações das pessoas com as quais eu convivo.
        </P>
        <P>
          É por esse entendimento, que nós psicólogas do Campus, Aline e
          Danieli, vamos a partir de agora criar uma série de textos
          informativos, com conteúdos referentes a emoções e habilidades
          sociais. A ideia é que esses conteúdos promovam para a comunidade
          acadêmica acesso a conhecimentos básicos que possam auxiliá-los a se
          conhecerem, compreendendo melhor suas emoções, o modo de expressá-las,
          e então, respeitá-las para quando for necessário, encontrar
          estratégias de enfrentamento para lidar com elas, principalmente
          reconhecendo os momentos que tomam uma dimensão que possam ser
          prejudicial à saúde mental e à qualidade de vida.
        </P>
      </BlocoEsquerda>

      <div className={`${BG_PRETO} py-7`}>
      <Emocoes />
      </div>
    </Article>
  </ColorContext.Provider>
);
