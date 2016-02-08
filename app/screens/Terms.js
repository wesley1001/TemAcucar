import React, {
  Component,
  Text,
  View,
  ScrollView,
} from 'react-native'
import { connect } from 'react-redux'

import Colors from "../Colors"
import Button from "../components/Button"
import TextBox from "../components/TextBox"
import Headline from "../components/Headline"
import Paragraph from "../components/Paragraph"

class Terms extends Component {
  handleScroll(event) {
    const { scrolledToBottom } = this.props.terms
    const { onScrollToBottom } = this.props
    if (scrolledToBottom)
      return
    const { nativeEvent } = event
    if(nativeEvent.contentOffset.y >= (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height - 1)) {
      onScrollToBottom()
    }
  }

  render() {
    const { scrolledToBottom } = this.props.terms
    const { onAcceptTerms, onRejectTerms } = this.props
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
      }}>
        <Headline>Termos de uso</Headline>
        <ScrollView
          style={{
            alignSelf: 'stretch',
            backgroundColor: Colors.beige,
            padding: 10,
            marginBottom: 20,
          }}
          scrollEventThrottle={16}
          onScroll={this.handleScroll.bind(this)}
        >
          <Paragraph>
            TERMOS E CONDIÇÕES GERAIS
          </Paragraph>
          <Paragraph>
            Última atualização: dezembro de 2014
          </Paragraph>
          <Paragraph>
            Estes Termos e Condições Gerais aplicam-se ao uso dos serviços oferecidos pela plataforma/site (“Tem Açúcar”), incluindo os serviços de empréstimos e doações de bens/itens/objetos/coisas, entre pessoas que utilizem a rede Tem Açúcar ("usuários").
          </Paragraph>
          <Paragraph>
            O Tem Açúcar prove uma plataforma para os usuários compartilharem itens/bens/coisas/objetos uns com os outros. O Tem açúcar apenas facilita a conexão entre usuários e não tem nenhuma responsabilidade com relação aos itens envolvidos na transação entre eles, ou qualquer outro acontecimento que se dê em contatos e relações, online e offline, entre usuários que tenham se conectado através do site.
          </Paragraph>
          <Paragraph>
            Qualquer usuário, para que possa utilizar os serviços do Tem Açúcar deverá aceitar integralmente os Termos e Condições Gerais e Política de Privacidade.
          </Paragraph>
          <Paragraph>
            1. Objeto
          </Paragraph>
          <Paragraph>
            O serviço objeto deste Termos e Condições Gerais consiste em prover aos usuários uma plataforma que possibilite e facilite aos usuários se conectarem para interagirem e compartilharem itens/bens/coisas/objetos entre si com o objetivo de economizar dinheiro, poupar o planeta e conhecer vizinhos.
          </Paragraph>
          <Paragraph>
            2. Cadastro e utilização do Tem Açúcar
          </Paragraph>
          <Paragraph>
            2.1. Usuário
          </Paragraph>
          <Paragraph>
            O cadastro e utilização do Tem Açúcar são GRATUITOS para os usuários. Os serviços do Tem Açúcar estão disponíveis apenas para as pessoas físicas que tenham capacidade legal para contratá-los. Não podem utilizá-los, assim, pessoas que não gozem dessa capacidade, inclusive menores de idade, ou pessoas que tenham sido inabilitadas do sistema do Tem Açúcar, temporária ou definitivamente.
          </Paragraph>
          <Paragraph>
            Também não é permitido que uma mesma pessoa tenha mais de um cadastro. Se o Tem Açúcar detectar, através do sistema de verificação de dados, cadastros duplicados e/ou falsos (fakes), irá inabilitar definitivamente todos os cadastros daqueles usuários. Não serão admitidas, na qualidade de usuários, pessoas jurídicas. A eventual participação a outro título será oportunamente a avaliada e regulamentada pelo Tem Açúcar. O preenchimento de todos os campos obrigatórios do cadastro é condição indispensável para a fruição dos serviços do Tem Açúcar.
          </Paragraph>
          <Paragraph>
            O futuro Usuário deverá completá-lo com informações exatas, precisas e verdadeiras, e assume o compromisso de atualizar os Dados Pessoais sempre que neles ocorrer alguma alteração. O Tem Açúcar se reserva o direito de utilizar todos os meios válidos e possíveis para identificar seus usuários.
          </Paragraph>
          <Paragraph>
            O Tem Açúcar não se responsabiliza pela correção dos Dados Pessoais inseridos por seus usuários. Os usuários garantem e respondem, em qualquer caso, pela veracidade, exatidão e autenticidade dos dados pessoais cadastrados. O Tem Açúcar se reserva o direito de solicitar dados adicionais e documentos que estime serem idôneos a conferir os dados pessoais informados, assim como de inabilitar, temporária ou definitivamente, o Usuário que apresentar qualquer informação inverídica ou quem o Tem Açúcar não conseguir contatar para a verificação dos dados.
          </Paragraph>
          <Paragraph>
            Ao cancelar o cadastro do usuário, automaticamente serão cancelados as buscas por itens/objetos/coisas/bens por ele veiculados ou respostas de empréstimo ou doação de itens/objetos/coisas/bens por ele oferecidos à outros usuários, não assistindo ao usuário, por essa razão, qualquer sorte de indenização ou ressarcimento.
          </Paragraph>
          <Paragraph>
            O Usuário acessará sua conta através de um nome de usuário (login) e senha e compromete-se a não informar a terceiros esses dados, responsabilizando-se integralmente pelo uso que deles seja feito. O Usuário compromete-se a notificar o Tem Açúcar imediatamente, através de meio seguro, a respeito de qualquer uso ou acesso não-autorizado de sua conta, por terceiros. O usuário será o único responsável pelas operações efetuadas em sua conta, uma vez que o acesso a ela só será possível mediante a aposição da senha, cuja responsabilidade é exclusiva do usuário. Em nenhuma hipótese será permitida a cessão, venda, aluguel ou outra forma de transferência da conta (incluindo-se qualificações e reputação).
          </Paragraph>
          <Paragraph>
            O nome de usuário (login) utilizado no Tem Açúcar não poderá guardar semelhança com o nome Tem Açúcar. Tampouco poderá ser utilizado qualquer nome que insinue ou sugira que os serviços ou itens/bens/coisas/objetos anunciados pertencem ao Tem Açúcar ou que fazem parte de promoções suas.
          </Paragraph>
          <Paragraph>
            Também serão eliminados nomes considerados ofensivos, bem como os que contenham dados pessoais do usuário ou alguma URL ou endereço eletrônico. O Tem Açúcar se reserva o direito de recusar qualquer solicitação de cadastro e de cancelar um cadastro previamente aceito, a seu exclusivo critério.
          </Paragraph>
          <Paragraph>
            2.2. Pontos de troca
          </Paragraph>
          <Paragraph>
            Será admitido o cadastro de pessoas jurídicas, na qualidade de "Pontos de Troca", nas condições estabelecidas em contrato próprio.
          </Paragraph>
          <Paragraph>
            Os Pontos de Troca são estabelecimentos comerciais sugeridos pelo sistema Tem Açúcar, preferencialmente de acordo um critério geográfico, a critério exclusivo do Tem Açúcar, para que os usuários realizem interações offline.
          </Paragraph>
          <Paragraph>
            As interações realizadas offline pelos usuários são de exclusiva responsabilidade deles. O Tem Açúcar não é responsável por nenhum fato, ocorrência, acontecimento proveniente do encontro, relação ou interação de usuários.
          </Paragraph>
          <Paragraph>
            2.3. ONGS
          </Paragraph>
          <Paragraph>
            Poderão ser cadastradas no sistema Tem Açúcar organizações não-governamentais, mediante convite da administração do Tem Açúcar, segundo seu exclusivo critério, nas condições estabelecidas em contrato próprio.
          </Paragraph>
          <Paragraph>
            2.4. TEM AÇUCAR CORPORATIVO
          </Paragraph>
          <Paragraph>
            Será possível, nas condições estabelecidas em contrato próprio, adquirir os direitos de utilização do sistema Tem Açúcar dentro de uma corporação, para utilização exclusiva das pessoas por esta designadas, num sistema fechado ao público geral.
          </Paragraph>
          <Paragraph>
            3 - Modificações dos Termos e Condições Gerais
          </Paragraph>
          <Paragraph>
            O “ Tem Açúcar ” poderá alterar, a qualquer tempo, estes Termos e Condições Gerais, visando seu aprimoramento e melhoria dos serviços prestados. Os novos Termos e Condições entrarão em vigor imediatamente após publicados no site. No prazo de 05 (cinco) dias contados a partir da publicação das modificações, o usuário deverá comunicar-se com o Tem Açúcar pelas vias disponíveis caso não concorde com as alterações. Neste caso, o vínculo contratual deixará de existir, ficando cancelado o cadastro do usuário. Não havendo manifestação no prazo estipulado, entender-se-á que o usuário aceitou os novos Termos e Condições e o contrato continuará vinculando as partes.
          </Paragraph>
          <Paragraph>
            4 - Funcionamento do Sistema Tem Açúcar
          </Paragraph>
          <Paragraph>
            4.1. Anúncio/Busca
          </Paragraph>
          <Paragraph>
            O usuário poderá buscar itens/objetos/coisas/bens no campo de busca do Tem Açúcar e o sistema perguntará aos seus usuários, delimitados em um raio de distância, e apontará os usuários que tenham o que está sendo buscado e concordem com emprestar ou doar o mesmo. Presumir-se-á que, mediante a inclusão do anúncio, o usuário manifesta a intenção e declara possuir o direito de buscar os itens/objetos/coisas/bens que está anunciando, ou que está facultado para tal por seu titular.
          </Paragraph>
          <Paragraph>
            O usuário poderá responder ao anúncio ou busca de outro usuário afirmativamente ou negativamente, porém ao concordar em emprestar ou doar o/os item(s)/objeto(s)/coisa(s)/bem(bens), presumir-se-á que o usuário manifesta a intenção e declara possuir o direito de emprestar ou doar os o/os item(s)/objeto(s)/coisa(s)/bem(bens) que está emprestando ou doando, ou que está facultado para tal por seu titular.
          </Paragraph>
          <Paragraph>
            O Tem Açúcar poderá remover, a seu exclusivo critério, os anúncios cuja especificação não esteja suficientemente clara, ou que permitam algum tipo de variação, dupla interpretação ou violação.
          </Paragraph>
          <Paragraph>
            4.2. O empréstimo ou doação
          </Paragraph>
          <Paragraph>
            O usuário poderá indicar no sistema Tem Açúcar o item/objeto/coisa/bem que lhe interessa para empréstimo ou doação. O sistema apontará outros usuários que respondam à essa solicitação, se houver. Os usuários poderão entrar em contato direto, por qualquer meio, para efetuar o empréstimo ou doação, sob sua total responsabilidade. Podem ser sugeridos pelo sistema, sem qualquer vinculação ou responsabilidade, pontos de troca cadastrados, com proximidade geográfica aos usuários, para o encontro físico.
          </Paragraph>
          <Paragraph>
            Ao efetuar o empréstimo ou doação, caso os mesmos se efetivem corretamente, os usuários envolvidos deverão informar tal fato no sistema e os usuários serão direcionados para uma avaliação. As condições do empréstimo ou doação como item/bem/coisa/objeto, local, forma, duração e todas as demais questões envolvidas serão estabelecidas de comum acordo entre os usuários e sob sua exclusiva responsabilidade.
          </Paragraph>
          <Paragraph>
            O empréstimo, doação ou quaisquer outras transações realizadas por usuários do Tem Açúcar, e tudo que as envolve (ex.: condições, prazos, existência dos objetos, entrega, arrependimento, etc) são de completa e única responsabilidade desses usuários. O Tem Açúcar tão-somente oferece a plataforma que permite a interação e conexão entre os usuários.
          </Paragraph>
          <Paragraph>
            4.3. Empréstimos ou doações proibidos
          </Paragraph>
          <Paragraph>
            Poderão ser anunciadas/buscados itens/objetos/coisas/bens cujo empréstimo ou doação não estejam expressamente proibidos pelos Termos e Condições Gerais e demais políticas do Tem Açúcar, ou pela legislação vigente. Fica expressamente proibido o empréstimo ou doação de tempo, pessoas ou itens/bens/coisas/objetos para qualquer atividade ilícita ou imoral, serviços e/ou produtos relacionados a prostituição ou similares, material pornográfico, obsceno ou contrário a moral e os bons costumes, quaisquer produtos cuja venda é expressamente proibida pelas leis vigentes, atividades ou objetos/itens/bens/coisas que promovam a violência e/ou a discriminação baseada em questões de raça, sexo, religião, nacionalidade, orientação sexual ou de qualquer outro tipo. Também ficam proibidas atividades ou bens/itens/coisas/objetos que violem a propriedade intelectual, como direitos autorais, marcas, patentes, modelos, desenhos industriais, autoria de softwares, direitos de imagem, voz e quaisquer outros protegidos por lei. É responsabilidade exclusiva do usuário velar pela legalidade dos seus empréstimos e doações.
          </Paragraph>
          <Paragraph>
            5 - Privacidade da Informação
          </Paragraph>
          <Paragraph>
            Toda informação ou dado pessoal prestado pelo usuário do Tem Açúcar é armazenada em servidores de alta segurança. O Tem Açúcar tomará todas as medidas possíveis para manter a confidencialidade e a segurança descritas nesta cláusula, porém não responderá por prejuízo que possa ser derivado da violação dessas medidas por parte de terceiros que utilizem as redes públicas ou a internet, subvertendo os sistemas de segurança para acessar as informações de usuários.
          </Paragraph>
          <Paragraph>
            6 - Obrigações dos Usuários
          </Paragraph>
          <Paragraph>
            6.1. Os usuários interessados em realizar uma transação de empréstimo ou doação de itens/bens/coisas/objetos anunciados por um outro usuário no Tem Açúcar devem fazer contato dentro do sistema Tem Açúcar, estabelecendo as condições da transação de empréstimo ou doação, destacando que o produto/bem/item/objeto/coisa em questão não pode ser proibido por lei ou por estes Termos e Condições Gerais. Ao manifestar o interesse em algum item/coisa/bem/objeto/produto, o usuário obriga-se a atender às condições de negociação descritas na oferta.
          </Paragraph>
          <Paragraph>
            Os usuários comprometem-se a prestar uns aos outros apenas informações verdadeiras, tanto sobre si mesmos quanto sobre o item/coisa/bem/objeto/produto em questão e as condições da transação.
          </Paragraph>
          <Paragraph>
            Após a realização da transação de empréstimo ou doação, os usuários poderão realizar uma avaliação do outro usuário, que de maneira global afetará o seu perfil, segundo os quesitos estabelecidos no sistema Tem Açúcar, tais como pontualidade, confiabilidade, satisfação, dentre outros. A avaliação é opcional, mas condicionará a possibilidade de realização de novas transações de empréstimo e/ou doação pelo usuário.
          </Paragraph>
          <Paragraph>
            6.2. O usuário deverá ter capacidade legal para efetuar a transação de doação ou empréstimo a que se propôs.
          </Paragraph>
          <Paragraph>
            Em virtude de “ Tem Açúcar ” possibilitar o encontro entre os usuários, e por não participar das transações que se realizam entre eles, a responsabilidade por todas as obrigações, sejam elas fiscais, jurídicas, trabalhistas, consumeristas ou de qualquer outra natureza, decorrentes das transações originadas no espaço virtual do site serão exclusivamente dos usuários. Em caso de interpelação judicial que tenha como Réu o Tem Açúcar, cujos fatos fundem-se em ações do usuário, este será chamado ao processo devendo arcar com todos os ônus que daí decorram, nos termos do artigo 70, III do Código de Processo Civil.
          </Paragraph>
          <Paragraph>
            Em virtude desta característica do site, também não pode obrigar o usuário a honrar sua obrigação ou completar a negociação, fazer devoluções, entre outros.
          </Paragraph>
          <Paragraph>
            Tributos: o Tem Açúcar não se responsabiliza pelas obrigações de natureza tributária que incidam sobre os negócios realizados entre usuários. Assim, o Usuário que atue como comerciante, nos termos da lei em vigor, responsabilizar-se-á pela integralidade das obrigações oriundas de suas atividades, notadamente pelos tributos envolvidos.
          </Paragraph>
          <Paragraph>
            7 – Práticas Vedadas
          </Paragraph>
          <Paragraph>
            Os usuários não poderão:
          </Paragraph>
          <Paragraph>
            a) manipular as características dos produtos/itens/bens/coisas/objetos
          </Paragraph>
          <Paragraph>
            b) interferir nas transações entre outros usuários;
          </Paragraph>
          <Paragraph>
            c) prestar informações falsas;
          </Paragraph>
          <Paragraph>
            d) anunciar atividades ou produtos/itens/bens/coisas/objetos proibidos pelas políticas do Tem Açúcar e/ou pela lei;
          </Paragraph>
          <Paragraph>
            e) agredir, caluniar, injuriar ou difamar outros usuários. Este tipo de comportamento poderá ser sancionado com a suspensão ou cancelamento da oferta, ou com a suspensão ou cancelamento do seu cadastro como usuário do Tem Açúcar , sem prejuízo das ações legais que possam ocorrer pela configuração de delitos ou contravenções ou os prejuízos civis que possam causar aos demais
          </Paragraph>
          <Paragraph>
            8 – Violação do Sistema ou da Base de Dados
          </Paragraph>
          <Paragraph>
            Não é permitida a utilização de nenhum dispositivo, software, ou outro recurso que venha a interferir nas atividades e operações do Tem Açúcar, bem como nos anúncios, descrições, contas ou seus bancos de dados. Qualquer intromissão, ou tentativa, ou atividade que viole ou contrarie as leis de direito de propriedade intelectual e/ou as proibições estipuladas nestes Termos e Condições Gerais, tornarão o responsável passível das ações legais pertinentes, bem como das sanções aqui previstas, sendo ainda responsável pelas indenizações por eventuais danos causados.
          </Paragraph>
          <Paragraph>
            Sem prejuízo de outras medidas, o Tem Açúcar poderá advertir, suspender ou cancelar, temporária ou definitivamente, a conta de um usuário a qualquer tempo, e iniciar as ações legais cabíveis se:
          </Paragraph>
          <Paragraph>
            a) o usuário não cumprir qualquer dispositivo destes Termos e Condições Gerais e demais políticas do Tem Açúcar;
          </Paragraph>
          <Paragraph>
            b) se descumprir com seus deveres de usuário;
          </Paragraph>
          <Paragraph>
            c) se praticar atos fraudulentos ou dolosos;
          </Paragraph>
          <Paragraph>
            d) se não puder ser verificada a identidade do usuário ou qualquer informação fornecida por ele esteja incorreta;
          </Paragraph>
          <Paragraph>
            e) caso se verifique duplicidade ou falsidade do cadastro;
          </Paragraph>
          <Paragraph>
            f) se o Tem Açúcar entender que os anúncios ou qualquer atitude do usuário hajam causado algum dano a terceiros ou ao próprio Tem Açúcar ou tenha a potencialidade de assim o fazer. Nos casos de inabilitação do cadastro do usuário, todas os produtos/bens/itens/objetos/coisas por este buscados ou ofertados serão automaticamente cancelados.
          </Paragraph>
          <Paragraph>
            10 – Responsabilidades
          </Paragraph>
          <Paragraph>
            O Tem Açúcar não interfere de nenhuma forma na negociação ou na realização dos empréstimos ou doações entre os usuários, que se iniciam no site, somente disponibilizando A TÍTULO GRATUITO a plataforma online para facilitá-las. Assim sendo, o Tem Açúcar não se responsabiliza pela existência, quantidade, qualidade, estado, integridade ou legitimidade dos produtos e/ou atividades oferecidos, adquiridos, alienados, emprestados, doados ou trocados pelos usuários, assim como pela capacidade para contratar dos usuários ou pela veracidade das informações por eles prestadas.
          </Paragraph>
          <Paragraph>
            O Tem Açúcar não outorga garantia por vícios ocultos ou aparentes nas negociações entre os usuários. Cada usuário conhece e aceita ser o único responsável pelos produtos que anuncia ou busca ou pelas ofertas que realiza. O Tem Açúcar não será responsável pelo efetivo cumprimento das obrigações assumidas pelos Usuários. O usuário reconhece e aceita que ao realizar negociações com outros usuários ou terceiros faz por sua conta e risco.
          </Paragraph>
          <Paragraph>
            Em nenhum caso o Tem Açúcar será responsável pelo lucro cessante ou por qualquer outro dano e/ou prejuízo que o usuário possa sofrer devido às negociações ou transações realizadas ou não realizadas através do Tem Açúcar. O Tem Açúcar não é intermediário das transações e recomenda que toda transação seja realizada com cautela e bom senso.
          </Paragraph>
          <Paragraph>
            O Tem Açúcar não será responsável pelas transações entre os usuários, mesmo as firmadas com base na confiança depositada no sistema ou nos serviços prestados pelo Tem Açúcar. Nos casos em que um ou mais Usuários ou algum terceiro inicie qualquer tipo de reclamação ou ação legal contra outro ou outros Usuários, todos e cada um dos usuários envolvidos nas reclamações ou ações eximem de toda responsabilidade o Tem Açúcar e a seus diretores, gerentes, empregados, agentes, representantes, tercerizados e procuradores.
          </Paragraph>
          <Paragraph>
            O Tem Açúcar resguarda-se de toda e qualquer responsabilidade por fatos resultantes da interação entre os usuários, dentro ou fora do mundo virtual, devendo cada usuário zelar e responsabilizar-se por sua segurança e pela das pessoas que com ele interagem.
          </Paragraph>
          <Paragraph>
            11 – Alcance dos Serviços
          </Paragraph>
          <Paragraph>
            Estes Termos e Condições Gerais não geram nenhum contrato de sociedade, de mandato, franquia ou relação de trabalho entre o Tem Açúcar e o Usuário. O usuário manifesta ciência de que o Tem Açúcar não é parte de nenhuma transação, nem possui controle algum sobre a qualidade, segurança ou legalidade dos anúncios, sobre a sua veracidade ou exatidão, e sobre a capacidade dos usuários para negociar.
          </Paragraph>
          <Paragraph>
            O Tem Açúcar não pode assegurar o êxito de qualquer transação, tampouco verificar a identidade ou os dados pessoais dos usuários. O Tem Açúcar não garante a veracidade da publicação de terceiros que apareça em seu site e não será responsável pela correspondência ou contratos que o usuário realize com terceiros.
          </Paragraph>
          <Paragraph>
            12 – Falhas no Sistema
          </Paragraph>
          <Paragraph>
            O Tem Açúcar não se responsabiliza por qualquer dano, prejuízo ou perda no equipamento do usuário causada por falhas no sistema, no servidor ou na internet. O Tem Açúcar também não será responsável por qualquer vírus que possa atacar o equipamento do usuário em decorrência do acesso, utilização ou navegação no site na internet ou como consequência da transferência de dados, arquivos, imagens, textos ou áudio contidos no mesmo.
          </Paragraph>
          <Paragraph>
            Os usuários não poderão atribuir ao Tem Açúcar nenhuma responsabilidade nem exigir o pagamento por lucro cessante em virtude de prejuízos resultantes de dificuldades técnicas ou falhas nos sistemas ou na internet. O Tem Açúcar não garante o acesso e uso contínuo ou sem interrupções de seu site. Eventualmente, o sistema poderá não estar disponível por motivos técnicos ou falhas da internet, ou por qualquer outra circunstância alheia ao Tem Açúcar.
          </Paragraph>
          <Paragraph>
            13 – Tarifas e Faturamento
          </Paragraph>
          <Paragraph>
            O Cadastro do usuário e a utilização do Tem Açúcar são GRATUITOS. Ao efetuar empréstimos ou doações o usuário não arca com nenhuma taxa cobrada pelo Tem Açúcar.
          </Paragraph>
          <Paragraph>
            14 - Sistema de Avaliação e Qualificações
          </Paragraph>
          <Paragraph>
            O usuário conta com um sistema de avaliação e qualificação de usuários atualizado periodicamente pelos comentários colocados pelos usuários de acordo com as negociações e transações de empréstimo ou doação por eles realizadas. Esta é uma importante ferramenta de aferição da idoneidade de terceiros, uma vez que a verificação da identidade dos usuários da internet é bastante difícil e o Tem Açúcar não tem como realizá-la.
          </Paragraph>
          <Paragraph>
            Todos os usuários devem fazer as devidas qualificação informando sobre a concretização ou não da transação, acrescentando comentários se assim desejarem, assumindo responsabilidade integral pelo que ali disserem. O Tem Açúcar não tem obrigação de verificar a veracidade ou exatidão das qualificações, comentários ou réplicas e NÃO se responsabiliza pelo que foi escrito, pelas ofertas de troca ou por qualquer comentário expresso no site ou através de qualquer outro meio, incluindo correio eletrônico.
          </Paragraph>
          <Paragraph>
            O Tem Açúcar se reserva o direito de eliminar os comentários que considere inadequados ou ofensivos. O Tem Açúcar tem ainda o direito de aplicar as sanções previstas neste instrumento aos usuários que sejam reiteradamente mal avaliados pelos demais usuários ou se realizarem atividades vedadas. A avaliação é uma forma de auxiliar os demais usuários a escolher pessoas confiáveis e bem avaliadas para fazer suas interações.
          </Paragraph>
          <Paragraph>
            15 – Propriedade Intelectual e links
          </Paragraph>
          <Paragraph>
            Os conteúdos das telas relativas aos serviços do Tem Açúcar, assim como os programas, bancos de dados, redes, arquivos que permitem que o usuário acesse e use sua conta são propriedade do Tem Açúcar e estão protegidos pelas leis e tratados internacionais de direito autoral, marcas, patentes, modelos e desenhos industriais.
          </Paragraph>
          <Paragraph>
            O uso indevido e a reprodução total ou parcial dos referidos conteúdos são proibidos, salvo autorização expressa do Tem Açúcar. O site pode apresentar conexão (links) com outros sites da rede, o que não significa que esses sites sejam de propriedade ou operados pelo Tem Açúcar. Não possuindo controle sobre esses sites, o Tem Açúcar NÃO será responsável pelos conteúdos, práticas e serviços ofertados nos mesmos. A presença de links para outros sites não implica relação de sociedade, de supervisão, de cumplicidade ou solidariedade do Tem Açúcar para com esses sites e seus conteúdos.
          </Paragraph>
          <Paragraph>
            16 – Indenização
          </Paragraph>
          <Paragraph>
            O Usuário indenizará o “ Tem Açúcar ”, suas filiais, empresas controladas ou controladoras, diretores, administradores, colaboradores, representantes e empregados por qualquer demanda promovida por outros usuários ou terceiros decorrentes de suas atividades no site ou por seu descumprimento dos Termos e Condições Gerais de Uso e demais políticas do Tem Açúcar, ou pela violação de qualquer lei ou direitos de terceiros, incluindo honorários de advogados.
          </Paragraph>
          <Paragraph>
            São parte integrante e inseparável destes Termos e Condições Gerais os seguintes documentos e/ou seções do Tem Açúcar incorporados por referência, onde estão detalhadas as políticas e/ou Termos e Condições de diferentes serviços oferecidos pelo site.
          </Paragraph>
          <Paragraph>
            18 – Legislação Aplicável e Foro de eleição
          </Paragraph>
          <Paragraph>
            Todos os itens destes Termos e Condições Gerais estão regidos pelas leis vigentes na República Federativa do Brasil. Para todos os assuntos referentes à interpretação e ao cumprimento deste Contrato, as partes se submetem ao Foro Central da Comarca do Rio de Janeiro, estado do Rio de Janeiro.
          </Paragraph>
        </ScrollView>
        <TextBox style={{height: 60}}>
          { (scrolledToBottom ? 'Para poder continuar, você deve aceitar os termos de uso.' : 'Para poder continuar, você deve ler os termos de uso até o final.') }
        </TextBox>
        <View style={{
          alignSelf: 'stretch',
          flexDirection: 'row',
        }}>
          <Button isDisabled={!scrolledToBottom} style={{flex: 1, marginRight: 4}} onPress={onAcceptTerms}>
            Eu aceito
          </Button>
          <Button
            style={{
              flex: 1,
              backgroundColor: Colors.beige,
            }}
            textStyle={{
              color: Colors.brown,
            }}
            onPress={onRejectTerms}
          >
            Eu não aceito
          </Button>
        </View>
      </View>
    )
  }
}

export default connect(state => ({
  terms: state.terms,
}))(Terms)
