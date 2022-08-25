import styled from "styled-components";
import { colors } from "../../utils/constants";

export const BackDrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    top: 0px;
    right: 0px;
    min-height: 470px;
`;

export const ModalCard = styled.div`
    background: ${colors.background};
    padding: 16px 12px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 35%) 0px 2px 8px 0px;
    z-index: 1001;
    width: 98%;
    max-width: 960px;
    position: relative;
    user-select: none;

    @media(max-width: 425px) {
        margin-top: 24px;
    }
`;

export const ErrorCard = styled.div`
    background: ${colors.negative};
    padding: 16px 12px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 35%) 0px 2px 8px 0px;
    z-index: 1001;
    width: 98%;
    max-width: 425px;
    position: relative;
    user-select: none;
    text-align: center;

    svg {
        font-size: 48px;
    }

    button {
        border: none;
        outline: none;
        width: 100%;
        border-radius: 4px;
        background-color: ${colors.white};
        color: ${colors.negative};
        display: flex;
        justify-content:center;
        align-items:center;
        font-size: 18px;
        transition: 0.2s;
        margin-top: 12px;
        padding: 8px;
        font-weight:bold;
        cursor: pointer;

        &:hover {
            filter: brightness(0.8)
        }
    }
`;

export const Title = styled.h2`
    color: ${colors.white};
    font-size: 28px;
`;

export const OriginalTitle = styled.h3`
    color: ${colors.gray};
    margin-bottom: 12px;
    font-size: 14px;
`;

export const Divider = styled.hr`
    background-color: ${colors.gray};
    width: 100%;
    height: 2px;
`;

export const Description = styled.h4`
    color: ${colors.white};
    margin: 12px 0px;
    font-weight: 400;
`;

export const Info = styled.h4`
    color: ${colors.white};
    margin-right: 8px;
`;

export const Row = styled.div`
    margin: 8px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Banner = styled.img`
    width: 100%;
    height:120px;
    object-fit: cover;
    border-radius: 4px 4px 0px 0px;
`;

export const Value = styled.span`
    color: ${colors.gray};
`;

export const CloseButton = styled.button`
    background-color: ${colors.negative};
    padding: 8px;
    border-radius: 4px;
    position: absolute;
    top: 8px;
    right: 8px;
    outline: none;
    border: none;
    color: ${colors.white};
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 35%) 0px 2px 8px 0px;

    &:hover {
        filter: brightness(0.8);
    }

    > svg {
        margin-bottom: -3px;
    }
`;
