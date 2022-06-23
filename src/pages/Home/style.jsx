import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 256px 1fr;
    background-color: aliceblue;
    align-items: flex-start;
    gap: 2rem;
    padding: 0 1rem;
    max-width: 70rem;
`;