import Tag from "../Tag";
import Rate from "../Rate";
import Dropdown from "../Dropdown";
import styled from "styled-components";

const Tags = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;

function Content({ id, tagsArray }) {
  return (
    <section>
      <div>
        <Tags>
          {tagsArray.map((tagName) => (
            <Tag id={id} tag={tagName} />
          ))}
        </Tags>
        <Rate />
      </div>
      <div>
        <Dropdown />
        <Dropdown />
      </div>
    </section>
  );
}

export default Content;
