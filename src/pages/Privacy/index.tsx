import { Text } from './components/Text';
import { Title } from './components/Title';

export function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl text-center font-bold mt-2 mb-10">
        Termos de uso e privacidade
      </h1>
      <Text>
        Olá! Agradecemos por usar o ChefX. Para que você aproveite nosso
        aplicativo da melhor forma e com segurança, preparamos este resumo sobre
        como funcionamos. Ao usar o ChefX, você concorda com o que está escrito
        aqui.
      </Text>
      <div className="mt-3">
        <Title>1. Sobre o ChefX</Title>

        <Text>
          O App ChefX é um aplicativo da FAS Tecnologia que faz parte da
          plataforma ChefX. Ele serve para facilitar pedidos em restaurantes e
          lugares similares, substituindo a comanda de papel por uma digital.
          <br />O App ChefX tem versões para plataformas específicas, onde
          haverá custos para seu uso. Mas não se preocupe, isso será avisado com
          antecedência.
        </Text>
      </div>
      Mas
      <div className="mt-3">
        <Title>2. Como Usamos Seus Dados</Title>

        <Text>
          Para que o ChefX funcione bem e possamos melhorá-lo, coletamos algumas
          informações sobre o seu uso. Por exemplo, podemos saber qual o tipo de
          aparelho que você usa, a versão do sistema operacional e como você
          interage com o aplicativo. Esses dados nos ajudam a identificar erros
          e criar novas funcionalidades. Nós garantimos: a FAS Tecnologia não
          vende nem compartilha suas informações pessoais com outras empresas
          para fins de marketing. Sua privacidade e a segurança dos seus dados
          são nossa prioridade.
        </Text>
      </div>
      <div className="mt-3">
        <Title>3. Mudanças na Nossa Política</Title>

        <Text>
          Pode ser que, no futuro, a gente precise fazer alguma mudança nestes
          termos. Se isso acontecer, vamos atualizar esta página e indicar a
          data da última alteração. Recomendamos que você a leia de vez em
          quando para ficar por dentro das novidades.
        </Text>
      </div>
      <div className="mt-3">
        <Title>Para Concluir</Title>

        <Text>
          Ao usar o ChefX, você confirma que leu e concorda com todas as
          informações acima. Se tiver qualquer dúvida, é só entrar em contato
          com a gente pelo nosso site oficial.
        </Text>
      </div>
      <div className="mt-15 pb-3">
        <p>
          FAS Tecnologia <br /> Última atualização: <b>06/08/2025</b>
        </p>
      </div>
    </div>
  );
}
