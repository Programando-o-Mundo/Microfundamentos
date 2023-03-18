import CardGrid from "./components/CardGrid";
import ContentSection from "./components/ContentSection";
import MicrofundamentalCard from "./components/MicrofundamentalCard";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-24 bg-gray-100">
        <ContentSection
          sectionId="sobre"
          title="Sobre o Projeto Microfundamentos:"
        >
          <p>
            O Projeto Microfundamentos é uma iniciativa destinada a fornecer
            recursos educacionais de qualidade para estudantes de Ciência da
            Computação e áreas afins. Nosso objetivo é ajudar a preencher a
            lacuna de aprendizado entre as teorias complexas e as práticas reais
            por meio de uma abordagem de auto-aprendizagem.
          </p>
        </ContentSection>
        <ContentSection sectionId="motivacao" title="Motivação:">
          <p>
            O Projeto Microfundamentos é uma iniciativa destinada a fornecer
            recursos educacionais de qualidade para estudantes de Ciência da
            Computação e áreas afins. Nosso objetivo é ajudar a preencher a
            lacuna de aprendizado entre as teorias complexas e as práticas reais
            por meio de uma abordagem de auto-aprendizagem.
          </p>
        </ContentSection>
        <ContentSection
          sectionId="projetos-disponiveis"
          title="Projetos Disponíveis:"
        >
          <p>
            Atualmente, o Projeto Microfundamentos oferece três e-books
            diferentes, Algoritmos e Estruturas de Dados, Compiladores e Grafos.
          </p>
          <p>
            Além disso, o Projeto Microfundamentos está constantemente buscando
            expandir sua coleção de recursos educacionais e está sempre
            procurando feedback dos usuários para melhorar a qualidade de seus
            produtos, além de pessoas para contribuir no projeto. Se você está
            procurando um recurso confiável e acessível para aprimorar suas
            habilidades em Ciência da Computação, o Projeto Microfundamentos
            pode ser exatamente o que você precisa.
          </p>
        </ContentSection>
        <CardGrid>
          <MicrofundamentalCard
            title="Microfundamentos Algoritmos e Estruturas de Dados"
            image_src="https://user-images.githubusercontent.com/9157977/224499700-a576c9d3-e59e-4e6e-be66-d7bc92dfbabd.jpg"
            url="https://programando-o-mundo.gitbook.io/micro-fundamentos-aeds/"
          />

          <MicrofundamentalCard
            title="Microfundamentos Algoritmos em Grafos"
            image_src="https://user-images.githubusercontent.com/9157977/224502400-b746a63e-4c47-490f-b6f2-3135a8505585.jpg"
          />
          <MicrofundamentalCard
            title="Microfundamentos Compiladores"
            image_src="https://user-images.githubusercontent.com/9157977/224495304-7e621c21-26aa-4ebe-a59e-b5ad1b571fe9.jpg"
            url="https://programando-o-mundo.gitbook.io/micro-fundamentos-compiladores/"
          />
        </CardGrid>
      </div>
    </>
  );
}

export default App;
