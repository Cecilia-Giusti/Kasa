import { useParams } from "react-router";
import { useFetch } from "../../Api";
import Carroussel from "../../components/Carroussel";
import Title from "../../components/Title";
import Host from "../../components/Host";
import Content from "../../components/Content";
import styled from "styled-components";

const SectionPresentation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function AccomodationPage() {
  const { idAccomodation } = useParams();

  const { data } = useFetch(`http://localhost:3000/data/data.json`);
  const accomodationData = data;

  const accomodation = accomodationData.find(
    (product) => product.id === idAccomodation
  );

  console.log(accomodation);

  return (
    <main>
      <Carroussel />
      <SectionPresentation>
        <Title
          titleAccomodation={accomodation.title}
          location={accomodation.location}
        />
        <Host
          nameHost={accomodation.host.name}
          pictureHost={accomodation.host.picture}
        />
      </SectionPresentation>
      <section>
        <Content />
      </section>
    </main>
  );
}

export default AccomodationPage;
