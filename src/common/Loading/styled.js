import styled from "styled-components";

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 250px;
`;
export const Image = styled.img`
    width: 91px;
    height: 91px;
    transform: rotate(360deg);
    animation: spin 1.25s infinite linear;  

    @keyframes spin {
        from {
            transform: unset;
        }
        to {
            transform: translateX(360deg);
        }
    }

`;