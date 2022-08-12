import Tag from "../Tag";
import Rate from "../Rate";
import Dropdown from "../Dropdown";
import styled from "styled-components";

const TagsAndRating = styled.div`
  display: flex;
  justify-content: space-between;
  marin-top: 20px;
  margin-bottom: 20px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;

function Content({ id, tagsArray, rateNumber }) {
  return (
    <section>
      <TagsAndRating>
        <Tags>
          {tagsArray.map((tagName) => (
            <Tag key={`${tagName}-${id}`} tag={tagName} />
          ))}
        </Tags>
        <Rate rating={rateNumber} />
      </TagsAndRating>
      <div>
        <Dropdown />
        <Dropdown />
      </div>
    </section>
  );
}

export default Content;
