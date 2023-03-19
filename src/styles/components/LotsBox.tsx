import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import box from "../../assets/question_box.png";

export const LotsBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 1rem;
`;

export const DefaultLotsBox = styled.div`
  margin: 6rem 0;
  width: 200px;
  height: 200px;
  background-image: url(${box});
  background-size: cover;
  transform-origin: 50% 0%;
  border-radius: 0.5rem;
`;

const shake = keyframes`
0% { transform: translate(0, 0) rotate(0deg); }
25% { transform: translate(5px, 5px) rotate(5deg); }
50% { transform: translate(0, 0) rotate(0eg); }
75% { transform: translate(-5px, 5px) rotate(-5deg); }
100% { transform: translate(0, 0) rotate(0deg); }
`;

export const ShakingLotsBox = styled.div`
  margin: 6rem 0;
  width: 200px;
  height: 200px;
  background-image: url(${box});
  background-size: cover;
  transform-origin: 50% 0%;
  border-radius: 0.5rem;
  animation-name: ${shake};
  animation-duration: 0.15s;
  animation-iteration-count: infinite;
  animation-delay: 0.2s;
`;

// 버튼 묶음
export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const LotsBtn = styled.button`
  font-weight: 600;
  color: white;
  border: 1px solid #b43939;
  background-color: #ff6868;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const LotsFeedBtn = styled.button`
  padding: 1rem;
  font-weight: 600;
  background-color: #fce9aa;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const LotsExitBtn = styled.button`
  padding: 1rem;
  font-weight: 600;
  background-color: #d6dbff;
  border-radius: 0.5rem;
  text-align: center;
`;
