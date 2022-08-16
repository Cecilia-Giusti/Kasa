import { useParams } from "react-router";
import Carroussel from "../../components/Carroussel";
import Title from "../../components/Title";
import Host from "../../components/Host";
import Content from "../../components/Content";
import styled from "styled-components";
import Tag from "../../components/Tag";
import Rate from "../../components/Rate";
import Dropdown from "../../components/Dropdown";

const SectionPresentation = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
`;

const Tags = styled.div`
  @media all {
    display: flex;
    gap: 10px;
    justify-content: flex-start;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    row-gap: 10px;

    margin-top: 10px;
  }
`;

const DropdownFlex = styled.div`
  @media all {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const RateAndHost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 16px;
`;

function AccomodationPage({ accomodationData }) {
  const { idAccomodation } = useParams();
  const accomodation = accomodationData.find(
    (product) => product.id === idAccomodation
  );

  return window.screen.width > 600 ? (
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
  ) : (
    <main>
      <Carroussel pictures={accomodation.pictures} />
      <Title
        titleAccomodation={accomodation.title}
        location={accomodation.location}
      />
      <Tags>
        {accomodation.tags.map((tagName) => (
          <Tag key={`${tagName}-${accomodation.id}`} tag={tagName} />
        ))}
      </Tags>
      <RateAndHost>
        <Rate rating={accomodation.rating} />
        <Host
          nameHost={accomodation.host.name}
          pictureHost={accomodation.host.picture}
        />
      </RateAndHost>
      <DropdownFlex>
        <Dropdown type="Description" content={accomodation.description} />
        <Dropdown type="Équipements" content={accomodation.equipments} />
      </DropdownFlex>
    </main>
  );
}

export default AccomodationPage;
