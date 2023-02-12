import { useState } from "react";
import styled from "styled-components";
import Chip from "./components/Chip";

const statusList = ["ALL", "Active", "Completed"];

export default function StatusBar({totalCount} :{totalCount:number}) {
  const [status, setStatus] = useState(statusList[0]);

  return (
    <FlexBox>
      <Tasks>{totalCount} tasks</Tasks>
      <Chips>
        {statusList.map((statusItem, index) => (
          <Chip key={index} isFocus={status === statusItem} onClick={() => setStatus(statusItem)}>
            {statusItem}
          </Chip>
        ))}
      </Chips>
    </FlexBox>
  );
}

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
