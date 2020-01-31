import styled from "styled-components"
import * as styleVars from "../variable"

export const Sidebar = styled.section`
    margin-top: 30px;
    padding-right: 15px;
    border-left: 1px solid #eee;
    position: fixed;

    @media screen and (min-width: 0px) and (max-width: 1184px) {
        display: none; !important;
    }
`

export default Sidebar
