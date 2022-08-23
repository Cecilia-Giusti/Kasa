import { useParams } from "react-router";
import Carroussel from "../../components/Carroussel";
import Title from "../../components/Title";
import Host from "../../components/Host";
import Content from "../../components/Content";
import Tag from "../../components/Tag";
import Rate from "../../components/Rate";
import Dropdown from "../../components/Dropdown";
import "./accomodationPage.css";

/** Création d'une page d'un bien
 * @param {array} accomodationData - Tableau des biens
 * @return {JSX.Element}
 */
function AccomodationPage({ accomodationData }) {
  const { idAccomodation } = useParams();
  const accomodation = accomodationData.find(
    (product) => product.id === idAccomodation
  );

  return window.screen.width > 600 ? (
    <main>
      <Carroussel pictures={accomodation.pictures} />
      <section className="presentation__section">
        <Title
          titleAccomodation={accomodation.title}
          location={accomodation.location}
        />
        <Host
          nameHost={accomodation.host.name}
          pictureHost={accomodation.host.picture}
        />
      </section>
      <div>
        <Content
          id={accomodation.id}
          tagsArray={accomodation.tags}
          rateNumber={accomodation.rating}
          description={accomodation.description}
          equipment={accomodation.equipments}
        />
      </div>
    </main>
  ) : (
    <main>
      <Carroussel pictures={accomodation.pictures} />
      <Title
        titleAccomodation={accomodation.title}
        location={accomodation.location}
      />
      <div className="tags__section--accomodation">
        {accomodation.tags.map((tagName) => (
          <Tag key={`${tagName}-${accomodation.id}`} tag={tagName} />
        ))}
      </div>
      <div className="rateAndHost__section--accomodation">
        <Rate rating={accomodation.rating} />
        <Host
          nameHost={accomodation.host.name}
          pictureHost={accomodation.host.picture}
        />
      </div>
      <div className="dropdown__section--accomodation">
        <Dropdown
          type="Paragraphe"
          titre="Description"
          content={accomodation.description}
          page="Home"
        />
        <Dropdown
          type="Liste"
          titre="Équipements"
          content={accomodation.equipments}
          page="Home"
        />
      </div>
    </main>
  );
}

export default AccomodationPage;
