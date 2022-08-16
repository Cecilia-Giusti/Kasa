import { useParams } from "react-router";
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

function AccomodationPage({ accomodationData }) {
  const { idAccomodation } = useParams();

  const accomodation = accomodationData.find(
    (product) => product.id === idAccomodation
  );

  return (
    <main>
      <Carroussel pictures={accomodation.pictures} />
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
        <Content
          id={accomodation.id}
          tagsArray={accomodation.tags}
          rateNumber={accomodation.rating}
          description={accomodation.description}
          equipment={accomodation.equipments}
        />
      </section>
    </main>
  );
}

export default AccomodationPage;
