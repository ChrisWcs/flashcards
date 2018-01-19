import styled from 'styled-components';

const CFlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.flipped ? "#311B92" : "#004D40"};
    cursor: pointer;
    border-radius: 6px;
    height: 300px;
    width: 200px;
    margin: 10px;
`;

export default CFlexCol;