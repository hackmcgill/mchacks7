import styled from "styled-components";

export const PrivacyWrapper = styled.div`
    @include page-width;
    max-width: 70rem;
    margin: auto;
    padding: 16rem 4rem;

    @include media-query($sm-up) {
    padding: 16rem 0;
    }
`