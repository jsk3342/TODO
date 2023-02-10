import React, { useState } from "react";
import styled from "styled-components";
import Chip from "./components/Chip";

const FlexBox = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  justify-content: space-between;
`;

const Tasks = styled.p``;

const Chips = styled.ul`
  display: flex;
  gap: 8px;
`;

const categories = ["ALL", "Active", "Completed"];

export default function StatusBar() {
  const [type, setType] = useState(categories[0]);
  return (
    <FlexBox>
      <Tasks>5 tasks</Tasks>
      <Chips>
        {categories.map((category) => (
          <Chip
            text={category}
            isFocus={false}
            onClick={() => setType(category)}
            key={category + Date.now()}
          />
        ))}
      </Chips>
    </FlexBox>
  );
}
