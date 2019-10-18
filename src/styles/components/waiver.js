import styled from "styled-components";
import * as styleVariables from './variable';

export const WaiverWrapper = styled.div`
    @include page-width;
    max-width: 70rem;
    margin: auto;
    padding: 16rem 4rem;

    @include media-query(${styleVariables.smUp}) {
    padding: 16rem 0;
    }
`