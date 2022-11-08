import {
  Article,
  ArticleHeader,
  BlocoDireita,
  Content,
  P,
  ColorContext,
  Centro,
  BlocoEsquerda,
  Img,
  LinkProPdf,
} from "./Util.js";

export const Tristeza = () => {
  return (
    <ColorContext.Provider value="bg-blue-500">
      <Article>
        <ArticleHeader title="TRISTEZA" />

        <Content>
          <Img url="img/tristeza/1.jpg" />

          <BlocoDireita>
            <P>
              Depois de entender um pouco melhor como nossas emoções funcionam,
              falar sobre a alegria, uma emoção que desperta sentimentos de
              felicidade, universalmente aceito e valorizado coletivamente,
              chegou a hora de conversarmos sobre a tristeza. Uma emoção, em sua
              maioria, fortemente evitada, mas que possui seu aspecto funcional
              em nossa vida.
            </P>
          </BlocoDireita>

          <Centro>
            <P>
              {/*className="text-2xl text-bold my-3"*/}
              Vamos entender isso melhor?!
            </P>
          </Centro>

          <BlocoEsquerda>
            <P>
              A literatura científica aponta que a emoção denominada tristeza
              está intimamente relacionada com uma diminuição do estado de
              ânimo, capaz de provocar uma diminuição em nossos pensamentos, em
              nossos comportamentos, diminuindo também a vontade de interagir
              socialmente e dar continuidade na rotina de todos os dias. (EKMAN,
              2003; GONDIM, 2020).
            </P>
            <P>
              Ainda, segundo Goleman, ela tem como função propiciar o
              ajustamento a uma grande perda, como a morte de alguém ou uma
              decepção significativa. (GOLEMAN,2011, p.33) Da mesma forma que a
              alegria, a origem da emoção caracterizada como tristeza, pode
              estar relacionada a diferentes situações e estas são muito
              individuais, singulares a cada história e experiência de vida.
              Isso quer dizer que, assim como a praia não desperta alegria para
              todos, a tristeza também não será despertada por situações comuns
              a todos.
            </P>
            <P>
              Pelo contrário, a tristeza tem sua origem na individualidade e
              deve ser respeitada como tal, afinal o que pra mim pode ser uma
              situação corriqueira, para o outro pode ser motivo de imensa
              tristeza.
            </P>
          </BlocoEsquerda>

          <BlocoDireita>
            <P>
              E assim como sua origem, a forma como ela é expressa não é igual
              para todo mundo, pois ainda se encontra no campo da
              individualidade. Muitas pessoas quando ficam tristes, logo enchem
              os olhos de lágrimas e não conseguem conter as lágrimas.
            </P>
            <P>
              Desta forma, associa-se o chorar com o estar triste. E entendemos
              que chorar está associado ao fato de ser estar triste, mas essa
              não é a única forma de demonstrar tristeza, até mesmo porque
              muitas pessoas choram de alegria também.
            </P>
            <P>
              A tristeza pode ser expressa por meio de apatia, de isolamento, de
              fome excessiva, de dor de cabeça...enfim...cada um tem sua forma
              específicade agir quando está triste..
            </P>
          </BlocoDireita>

          <BlocoEsquerda>
            <P>
              E, é importante que saibamos reconhecer quando estamos tristes,
              respeitando essa emoção e entendendo também que a tristeza tem seu
              aspecto funcional, e de mesmo protetivo, em nossas vidas, pois o
              retraimento introspectivo geralmente observado nas pessoas
              tristes, possibilita que elas vivenciem a perda, a frustração, e
              também que consigam refletir sobre como recomeçar.
            </P>
            <P>
              Considerando aspectos cognitivos, a tristeza nos auxilia a
              elaborar as circunstâncias da vida que podem ter originado essa
              emoção, como a atividade cerebral diminui, devido à desregulação
              na liberação de neurotransmissores da felicidade, aumenta a
              possibilidade de avaliar a situação, sem tantas emoções
              excitatórias envolvidas (GONDIM, 2020).
            </P>
            <P>
              Somado a isso, também encontramos uma função social, isso porque,
              em sua maioria, quando estamos tristes, enviamos sinais corporais,
              que indicam tristeza e esses sinais, geralmente, são capazes de
              despertar nos outros ao nosso redor, comportamentos de apoio, de
              acolhimento, de ajuda, inibindo, inclusive, comportamentos de
              enfrentamento (GONDIM, 2020). Percebemos que tão importante quanto
              nos sentirmos alegres, também é nos sentirmos tristes.
            </P>
          </BlocoEsquerda>

          <BlocoDireita>
            <P>
              A tristeza também possui a tendência de unir e fortalecer laços
              sociais, advinda de possibilidades de apoio, em momentos de
              dificuldades. Ela também pode possibilitar movimentos internos, de
              nos voltarmos para nós mesmos, a fim de melhor compreendermos quem
              somos e as situações que vivemos.
            </P>
            <P>
              Em doses moderada a tristeza pode promover reflexão, reparação e
              estimular mudanças.
            </P>
          </BlocoDireita>

          <BlocoEsquerda>
            <P>
              Importante ressaltar que a tristeza é uma emoção, ou seja, ela é
              passageira, diferente da depressão, que se caracteriza por uma
              tristeza crônica, ou seja, uma tristeza insistente, que acompanha
              o cotidiano do sujeito em diferentes circunstâncias, ultrapassando
              um limite. “(...) a tristeza é diferente da depressão doença, a
              primeira faz parte da vida, tem um potencial transformador, já a
              depressão é paralisante, precisa de um tratamento específico”
              (BOTEGA, p. 23, 2018).
            </P>
            <P>
              Portanto, vale uma atenção especial com uma avaliação de
              profissional especializado nos casos em que a tristeza se torna
              persistente.
            </P>
          </BlocoEsquerda>
        </Content>

	<LinkProPdf url="tristeza.pdf" />
      </Article>
    </ColorContext.Provider>
  );
};
