import type { aspects } from "@/data/aspects"
import "../app/categorias/aspectos/[slug]/aspect-detail.css"

type AspectDetailContentProps = {
  aspect: (typeof aspects)[0]
}

export function AspectDetailContent({ aspect }: AspectDetailContentProps) {
  // Get content based on aspect slug
  const content = getAspectContent(aspect.slug)

  return (
    <div className="prose prose-slate max-w-none dark:prose-invert">
      <p className="lead">{aspect.description}</p>

      {content.map((section, index) => (
        <div key={index} className="aspect-section">
          <h2>{section.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      ))}

      <h2>Palavras-chave</h2>
      <div className="aspect-keywords not-prose">
        {aspect.keywords?.map((keyword, index) => (
          <span key={index} className="aspect-keyword">
            {keyword}
          </span>
        ))}
      </div>

      <h2>Exemplos práticos</h2>
      <ul className="aspect-examples">
        {aspect.examples?.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
    </div>
  )
}

function getAspectContent(slug: string) {
  switch (slug) {
    case "conjuncao":
      return [
        {
          title: "O que é a Conjunção?",
          content: `
            <p>A Conjunção ocorre quando dois planetas estão posicionados muito próximos um do outro no mapa astral, 
            formando um ângulo de 0°. Esta proximidade faz com que as energias dos planetas envolvidos se fundam, 
            criando uma força unificada e intensificada.</p>
            
            <p>Na astrologia, a conjunção é considerada o aspecto mais poderoso, pois representa uma concentração 
            de energia em um ponto específico do mapa. Quando dois planetas estão em conjunção, suas qualidades 
            se mesclam de tal forma que se torna difícil distinguir onde termina a influência de um e começa a do outro.</p>
          `,
        },
        {
          title: "Interpretação Astrológica",
          content: `
            <p>A interpretação de uma conjunção depende fundamentalmente dos planetas envolvidos. Diferente de outros 
            aspectos, a conjunção não é inerentemente harmônica ou desafiadora - sua natureza é determinada pelos 
            planetas que a formam.</p>
            
            <p>Por exemplo, uma conjunção entre Vênus e Júpiter geralmente traz benefícios relacionados ao amor, 
            abundância e sorte, enquanto uma conjunção entre Marte e Saturno pode indicar desafios relacionados 
            à expressão da energia e limitações na ação.</p>
            
            <p>A casa astrológica onde ocorre a conjunção também é crucial para sua interpretação, pois indica 
            a área da vida onde essa fusão de energias se manifestará mais fortemente.</p>
          `,
        },
        {
          title: "Efeitos Psicológicos",
          content: `
            <p>Psicologicamente, as conjunções representam áreas de nossa personalidade onde diferentes facetas 
            estão tão intimamente ligadas que funcionam como uma unidade. Isso pode criar tanto talentos naturais 
            quanto pontos cegos em nossa psique.</p>
            
            <p>Pessoas com muitas conjunções em seu mapa natal frequentemente demonstram uma intensidade notável 
            nas áreas de vida representadas por essas conjunções. Há uma concentração de energia que pode ser 
            canalizada de forma construtiva, mas que também pode se tornar excessiva se não for equilibrada.</p>
          `,
        },
        {
          title: "Trânsitos e Progressões",
          content: `
            <p>Quando planetas em trânsito formam conjunções com pontos sensíveis do mapa natal, frequentemente 
            marcam períodos de novos começos e iniciativas importantes relacionadas à natureza dos planetas envolvidos.</p>
            
            <p>As conjunções por trânsito, especialmente de planetas lentos como Júpiter, Saturno, Urano, Netuno e Plutão, 
            frequentemente coincidem com eventos significativos e mudanças de direção na vida.</p>
          `,
        },
      ]
    case "sextil":
      return [
        {
          title: "O que é o Sextil?",
          content: `
            <p>O Sextil é um aspecto astrológico que ocorre quando dois planetas estão separados por um ângulo de 60° 
            no mapa astral. Este aspecto é considerado harmonioso e favorável, embora mais sutil que o Trígono.</p>
            
            <p>Na astrologia tradicional, o Sextil representa oportunidades, facilidades e talentos que podem ser 
            desenvolvidos com algum esforço consciente. Diferente da Conjunção ou do Trígono, o Sextil não traz 
            benefícios automáticos - ele oferece possibilidades que precisam ser ativamente aproveitadas.</p>
          `,
        },
        {
          title: "Interpretação Astrológica",
          content: `
            <p>O Sextil indica áreas da vida onde existe um fluxo natural de energia entre diferentes facetas da 
            personalidade ou experiências. Ele sugere cooperação e comunicação eficaz entre os princípios planetários envolvidos.</p>
            
            <p>Este aspecto frequentemente revela talentos latentes e habilidades que podem ser facilmente desenvolvidas. 
            Também indica áreas onde podemos encontrar soluções criativas para problemas, pois há uma capacidade natural 
            de conectar diferentes tipos de informação e experiência.</p>
            
            <p>Os Sextis são particularmente importantes para identificar recursos internos que podem ser mobilizados 
            para lidar com desafios representados por aspectos mais tensos no mapa.</p>
          `,
        },
        {
          title: "Efeitos Psicológicos",
          content: `
            <p>Psicologicamente, os Sextis representam áreas onde diferentes partes da personalidade cooperam 
            harmoniosamente. Eles indicam onde temos facilidade para integrar diferentes aspectos de nós mesmos.</p>
            
            <p>Pessoas com muitos Sextis em seu mapa natal frequentemente demonstram versatilidade e adaptabilidade. 
            Elas tendem a ter uma abordagem flexível para a vida e conseguem ver conexões entre diferentes áreas 
            de experiência que outros podem não perceber.</p>
            
            <p>O Sextil também está associado à capacidade de aprendizado e ao desenvolvimento de habilidades práticas, 
            especialmente quando envolve planetas como Mercúrio, Vênus ou Júpiter.</p>
          `,
        },
        {
          title: "Trânsitos e Progressões",
          content: `
            <p>Quando planetas em trânsito formam Sextis com pontos do mapa natal, frequentemente trazem 
            oportunidades favoráveis relacionadas à natureza dos planetas envolvidos. Estes são momentos 
            propícios para iniciar projetos, fazer conexões sociais úteis ou aprender novas habilidades.</p>
            
            <p>Os Sextis por trânsito geralmente não forçam mudanças dramáticas, mas oferecem aberturas e 
            possibilidades que podem ser aproveitadas se estivermos atentos a elas. São períodos onde o 
            esforço consciente pode render resultados particularmente favoráveis.</p>
          `,
        },
      ]
    case "quadratura":
      return [
        {
          title: "O que é a Quadratura?",
          content: `
            <p>A Quadratura é um aspecto astrológico que ocorre quando dois planetas estão separados por um ângulo 
            de 90° no mapa astral. Este aspecto é considerado desafiador e tenso, representando áreas de conflito 
            interno e externo que exigem resolução e integração.</p>
            
            <p>Na astrologia tradicional, a Quadratura simboliza obstáculos, tensões e desafios que impulsionam o 
            crescimento através do esforço e da superação. Diferente dos aspectos harmoniosos como o Sextil ou o 
            Trígono, a Quadratura não facilita o fluxo natural de energia - ela cria atrito que demanda atenção e trabalho.</p>
          `,
        },
        {
          title: "Interpretação Astrológica",
          content: `
            <p>A Quadratura indica áreas da vida onde existe tensão entre diferentes necessidades, desejos ou 
            princípios. Ela sugere conflitos internos que precisam ser resolvidos para que a pessoa possa 
            progredir em seu desenvolvimento.</p>
            
            <p>Este aspecto frequentemente revela onde enfrentamos nossos maiores desafios, mas também onde 
            temos o potencial para nosso maior crescimento. As Quadraturas nos forçam a encontrar soluções 
            criativas e a desenvolver força interior através da superação de obstáculos.</p>
            
            <p>A natureza dos planetas envolvidos na Quadratura e as casas que eles regem são cruciais para 
            entender exatamente quais áreas da vida serão mais afetadas por esses desafios.</p>
          `,
        },
        {
          title: "Efeitos Psicológicos",
          content: `
            <p>Psicologicamente, as Quadraturas representam tensões internas e conflitos entre diferentes 
            aspectos da personalidade. Elas indicam onde podemos sentir que estamos sendo puxados em 
            direções opostas ou onde diferentes necessidades parecem incompatíveis.</p>
            
            <p>Pessoas com muitas Quadraturas em seu mapa natal frequentemente demonstram resiliência e 
            determinação, desenvolvidas através da necessidade constante de superar obstáculos. Elas 
            tendem a ter uma abordagem mais combativa para a vida e podem ser motivadas pela superação de desafios.</p>
            
            <p>A Quadratura também está associada ao desenvolvimento de habilidades práticas e à capacidade 
            de lidar com situações de crise, especialmente quando envolve planetas como Marte, Saturno ou Plutão.</p>
          `,
        },
        {
          title: "Trânsitos e Progressões",
          content: `
            <p>Quando planetas em trânsito formam Quadraturas com pontos do mapa natal, frequentemente 
            trazem períodos de tensão, desafios e necessidade de mudança. Estes são momentos onde somos 
            forçados a lidar com problemas que podem ter sido ignorados ou adiados.</p>
            
            <p>As Quadraturas por trânsito geralmente coincidem com pontos de virada importantes na vida, 
            onde decisões difíceis precisam ser tomadas. São períodos de crescimento acelerado através 
            do enfrentamento de obstáculos, especialmente quando envolvem planetas lentos como Saturno, 
            Urano, Netuno ou Plutão.</p>
          `,
        },
      ]
    case "trigono":
      return [
        {
          title: "O que é o Trígono?",
          content: `
            <p>O Trígono é um aspecto astrológico que ocorre quando dois planetas estão separados por um ângulo 
            de 120° no mapa astral. Este aspecto é considerado o mais harmonioso e benéfico de todos, representando 
            fluxo natural, talentos inatos e áreas de facilidade na vida.</p>
            
            <p>Na astrologia tradicional, o Trígono simboliza dons naturais, sorte e facilidades que vêm sem 
            esforço consciente. Diferente da Quadratura ou da Oposição, o Trígono facilita o fluxo suave de 
            energia entre os planetas envolvidos, criando uma sinergia natural.</p>
          `,
        },
        {
          title: "Interpretação Astrológica",
          content: `
            <p>O Trígono indica áreas da vida onde existe um fluxo harmonioso de energia e onde as coisas 
            tendem a funcionar sem grandes obstáculos. Ele sugere talentos naturais e habilidades que 
            parecem vir facilmente para a pessoa.</p>
            
            <p>Este aspecto frequentemente revela onde temos nossas maiores facilidades e onde podemos 
            encontrar prazer e satisfação sem grande esforço. Os Trígonos nos mostram onde a vida tende 
            a nos apoiar e onde podemos encontrar recursos internos e externos com facilidade.</p>
            
            <p>A natureza dos planetas envolvidos no Trígono e as casas que eles regem são cruciais para 
            entender exatamente quais áreas da vida serão mais beneficiadas por essa harmonia.</p>
          `,
        },
        {
          title: "Efeitos Psicológicos",
          content: `
            <p>Psicologicamente, os Trígonos representam áreas de integração natural e harmonia interna. 
            Eles indicam onde diferentes aspectos da personalidade cooperam sem conflito, criando uma 
            sensação de fluidez e bem-estar.</p>
            
            <p>Pessoas com muitos Trígonos em seu mapa natal frequentemente demonstram uma naturalidade 
            e facilidade em certas áreas da vida que outros podem achar difíceis. Elas tendem a ter uma 
            abordagem mais relaxada e confiante para a vida, especialmente nas áreas indicadas pelos Trígonos.</p>
            
            <p>O Trígono também está associado à criatividade, intuição e capacidade de acessar recursos 
            internos sem esforço consciente, especialmente quando envolve planetas como Vênus, Júpiter ou Netuno.</p>
          `,
        },
        {
          title: "Trânsitos e Progressões",
          content: `
            <p>Quando planetas em trânsito formam Trígonos com pontos do mapa natal, frequentemente trazem 
            períodos de fluxo, oportunidades e experiências prazerosas relacionadas à natureza dos planetas 
            envolvidos. Estes são momentos onde as coisas tendem a fluir naturalmente a nosso favor.</p>
            
            <p>Os Trígonos por trânsito geralmente coincidem com períodos de bem-estar, criatividade aumentada 
            e sensação de estar no lugar certo na hora certa. São períodos onde podemos avançar em nossos 
            objetivos com menos resistência externa e interna.</p>
            
            <p>Embora os Trígonos sejam benéficos, eles também podem criar uma tendência à passividade ou 
            complacência, já que não oferecem o mesmo impulso para a ação que os aspectos mais desafiadores.</p>
          `,
        },
      ]
    case "oposicao":
      return [
        {
          title: "O que é a Oposição?",
          content: `
            <p>A Oposição é um aspecto astrológico que ocorre quando dois planetas estão separados por um ângulo 
            de 180° no mapa astral, posicionando-se em lados opostos do zodíaco. Este aspecto é considerado 
            desafiador, representando polaridades, tensões e a necessidade de equilíbrio e integração.</p>
            
            <p>Na astrologia tradicional, a Oposição simboliza confrontos, relacionamentos significativos e a 
            necessidade de encontrar equilíbrio entre forças aparentemente contraditórias. Diferente da Quadratura, 
            que cria tensão interna, a Oposição frequentemente se manifesta através de projeções e encontros com "o outro".</p>
          `,
        },
        {
          title: "Interpretação Astrológica",
          content: `
            <p>A Oposição indica áreas da vida onde experimentamos polaridades e onde precisamos encontrar 
            equilíbrio entre extremos. Ela sugere onde podemos tender a projetar aspectos de nós mesmos 
            nos outros ou onde encontramos nosso complemento através de relacionamentos.</p>
            
            <p>Este aspecto frequentemente revela onde enfrentamos nossos maiores desafios relacionais e 
            onde precisamos desenvolver consciência das dinâmicas de projeção psicológica. As Oposições 
            nos forçam a reconhecer e integrar qualidades que inicialmente percebemos apenas nos outros.</p>
            
            <p>A natureza dos planetas envolvidos na Oposição e as casas que eles ocupam são cruciais para 
            entender exatamente quais áreas da vida serão mais afetadas por essas dinâmicas de polaridade.</p>
          `,
        },
        {
          title: "Efeitos Psicológicos",
          content: `
            <p>Psicologicamente, as Oposições representam tensões entre diferentes necessidades ou impulsos 
            que parecem mutuamente exclusivos. Elas indicam onde podemos sentir que precisamos escolher 
            entre duas alternativas igualmente importantes ou onde oscilamos entre extremos.</p>
            
            <p>Pessoas com muitas Oposições em seu mapa natal frequentemente demonstram uma consciência 
            aguçada das contradições da vida e uma capacidade de ver múltiplas perspectivas. Elas tendem 
            a ter relacionamentos significativos que espelham aspectos de si mesmas que precisam ser integrados.</p>
            
            <p>A Oposição também está associada à capacidade de compromisso, negociação e diplomacia, 
            especialmente quando envolve planetas como Vênus, Júpiter ou a Lua.</p>
          `,
        },
        {
          title: "Trânsitos e Progressões",
          content: `
            <p>Quando planetas em trânsito formam Oposições com pontos do mapa natal, frequentemente trazem 
            encontros significativos com outras pessoas ou situações que espelham aspectos de nós mesmos 
            que precisam de atenção. Estes são momentos onde relacionamentos podem se tornar especialmente 
            importantes ou desafiadores.</p>
            
            <p>As Oposições por trânsito geralmente coincidem com períodos onde somos forçados a encontrar 
            equilíbrio entre diferentes áreas da vida, como trabalho e família, ou entre nossas necessidades 
            e as necessidades dos outros. São períodos de crescimento através do equilíbrio de polaridades.</p>
            
            <p>Embora as Oposições possam trazer tensão, elas também oferecem clareza através do contraste 
            e da perspectiva que só pode ser obtida vendo algo de um ponto de vista completamente diferente.</p>
          `,
        },
      ]
    case "quincuncio":
      return [
        {
          title: "O que é o Quincúncio?",
          content: `
            <p>O Quincúncio, também conhecido como Inconjunção, é um aspecto astrológico que ocorre quando dois 
            planetas estão separados por um ângulo de 150° no mapa astral. Este aspecto é considerado menor, 
            mas significativo, representando ajustes, adaptações e a necessidade de integrar energias que não 
            se relacionam naturalmente.</p>
            
            <p>Na astrologia tradicional, o Quincúncio simboliza desconexão, ajustes necessários e situações 
            que exigem adaptabilidade. Diferente dos aspectos maiores como a Conjunção ou a Oposição, o Quincúncio 
            cria uma relação oblíqua entre planetas, onde não há nem harmonia natural nem conflito direto - 
            apenas uma estranheza que requer ajustes constantes.</p>
          `,
        },
        {
          title: "Interpretação Astrológica",
          content: `
            <p>O Quincúncio indica áreas da vida onde precisamos fazer ajustes contínuos e onde existe uma 
            sensação de desconexão entre diferentes necessidades ou impulsos. Ele sugere onde podemos 
            experimentar situações que exigem adaptabilidade e flexibilidade.</p>
            
            <p>Este aspecto frequentemente revela onde enfrentamos situações que não se encaixam facilmente 
            em nossas expectativas ou padrões habituais. Os Quincúncios nos forçam a desenvolver novas 
            abordagens e a fazer ajustes criativos para integrar energias aparentemente incompatíveis.</p>
            
            <p>A natureza dos planetas envolvidos no Quincúncio e as casas que eles ocupam são cruciais para 
            entender exatamente quais áreas da vida exigirão mais ajustes e adaptações.</p>
          `,
        },
        {
          title: "Efeitos Psicológicos",
          content: `
            <p>Psicologicamente, os Quincúncios representam áreas onde diferentes partes da personalidade 
            não se comunicam facilmente. Eles indicam onde podemos experimentar uma sensação de desconforto 
            ou estranheza que é difícil de definir precisamente.</p>
            
            <p>Pessoas com muitos Quincúncios em seu mapa natal frequentemente demonstram uma capacidade 
            notável de adaptação e ajuste, desenvolvida através da necessidade constante de integrar 
            energias díspares. Elas tendem a ter uma abordagem criativa para resolver problemas que 
            não respondem a soluções convencionais.</p>
            
            <p>O Quincúncio também está associado a questões de saúde e bem-estar, especialmente quando 
            envolve planetas como a Lua, Mercúrio ou Saturno, podendo indicar a necessidade de ajustes 
            no estilo de vida para manter o equilíbrio.</p>
          `,
        },
        {
          title: "Trânsitos e Progressões",
          content: `
            <p>Quando planetas em trânsito formam Quincúncios com pontos do mapa natal, frequentemente 
            trazem situações que exigem ajustes, adaptações e uma abordagem flexível. Estes são momentos 
            onde podemos sentir que algo está "fora de sintonia" e precisa ser recalibrado.</p>
            
            <p>Os Quincúncios por trânsito geralmente coincidem com períodos onde somos forçados a fazer 
            mudanças em nossa rotina, abordagem ou perspectiva para acomodar circunstâncias inesperadas. 
            São períodos de crescimento através da adaptabilidade e da disposição para fazer ajustes.</p>
            
            <p>Embora os Quincúncios possam trazer desconforto, eles também oferecem oportunidades para 
            desenvolver soluções criativas e inovadoras que não teriam surgido em circunstâncias mais harmoniosas.</p>
          `,
        },
      ]
    case "semi-sextil":
      return [
        {
          title: "O que é o Semi-Sextil?",
          content: `
            <p>O Semi-Sextil é um aspecto astrológico que ocorre quando dois planetas estão separados por um 
            ângulo de 30° no mapa astral. Este aspecto é considerado menor, representando ligeiras irritações, 
            pequenos ajustes e oportunidades sutis de crescimento.</p>
            
            <p>Na astrologia tradicional, o Semi-Sextil simboliza conexões leves entre diferentes áreas da vida 
            que requerem pequenos ajustes para funcionarem harmoniosamente. Diferente dos aspectos maiores como 
            o Trígono ou a Quadratura, o Semi-Sextil cria uma relação sutil entre planetas, onde há uma leve 
            fricção que pode ser tanto estimulante quanto levemente irritante.</p>
          `,
        },
        {
          title: "Interpretação Astrológica",
          content: `
            <p>O Semi-Sextil indica áreas da vida onde existe uma conexão sutil que requer atenção consciente 
            para ser aproveitada positivamente. Ele sugere onde pequenos ajustes podem levar a melhorias 
            incrementais e onde podemos encontrar oportunidades sutis de crescimento.</p>
            
            <p>Este aspecto frequentemente revela onde enfrentamos pequenas irritações ou desconfortos que, 
            embora não sejam dramáticos, podem acumular-se ao longo do tempo se não forem abordados. Os 
            Semi-Sextis nos convidam a fazer ajustes finos em nossa abordagem para melhorar a qualidade de vida.</p>
            
            <p>A natureza dos planetas envolvidos no Semi-Sextil e as casas que eles ocupam são cruciais para 
            entender exatamente quais áreas da vida serão afetadas por essas dinâmicas sutis.</p>
          `,
        },
        {
          title: "Efeitos Psicológicos",
          content: `
            <p>Psicologicamente, os Semi-Sextis representam áreas onde diferentes aspectos da personalidade 
            estão conectados, mas não se integram completamente sem esforço consciente. Eles indicam onde 
            podemos experimentar pequenas tensões internas que requerem ajustes conscientes.</p>
            
            <p>Pessoas com muitos Semi-Sextis em seu mapa natal frequentemente demonstram uma sensibilidade 
            a detalhes e nuances que outros podem ignorar. Elas tendem a fazer ajustes constantes em sua 
            abordagem para otimizar resultados e minimizar desconfortos.</p>
            
            <p>O Semi-Sextil também está associado ao desenvolvimento gradual e incremental, especialmente 
            quando envolve planetas como Mercúrio, Vênus ou a Lua, podendo indicar áreas onde o crescimento 
            ocorre através de pequenos passos consistentes ao invés de grandes saltos.</p>
          `,
        },
        {
          title: "Trânsitos e Progressões",
          content: `
            <p>Quando planetas em trânsito formam Semi-Sextis com pontos do mapa natal, frequentemente trazem 
            situações que requerem pequenos ajustes e atenção a detalhes. Estes são momentos onde pequenas 
            mudanças podem ter efeitos cumulativos significativos ao longo do tempo.</p>
            
            <p>Os Semi-Sextis por trânsito geralmente coincidem com períodos onde somos convidados a refinar 
            nossa abordagem e fazer ajustes finos em vez de mudanças dramáticas. São períodos de crescimento 
            através da atenção consciente a detalhes e nuances.</p>
            
            <p>Embora os Semi-Sextis possam parecer insignificantes quando comparados a aspectos mais dramáticos como Quadraturas ou Oposições, eles oferecem oportunidades valiosas para refinamento e otimização em áreas específicas da vida, contribuindo para um senso geral de bem-estar e eficiência.</p>
          `,
        },
      ]
    default:
      return []
  }
}
