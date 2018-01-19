import styled from 'styled-components';

const CFlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.flipped ? "#311B92" : "#1A237E"};
    cursor: pointer;
    border-radius: 6px;
`;

export default CFlexCol;