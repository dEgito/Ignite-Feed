import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 256px 1fr;
    background-color: var(--gray-900);
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 1rem;
    max-width: 70rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;