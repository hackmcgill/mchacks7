import React from "react"
import styled from "styled-components"
import * as styleVars from "../variable"

const FloorplanContainer = styled.section`
    text-align: center;
    float:right;
    max-width:100%;
    vertical-align: middle;

    h2 {
        color: #f2463a;
        font-size: 3rem;
        font-weight: 400;
    }
    padding-top: 15px;

    @media screen and (min-width: 0px) and (max-width: 400px) {
        max-width: 100%; !important;
    }

`;

const FloorplanImage = styled.img`
    margin: 0;
    float:center;
    max-width: 35%;
    height: auto;
    border-radius: 12px;
    border: 1px solid #d2d2d2;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;
class Floorplan extends React.Component {
    render() {
        return <FloorplanContainer id={"section-" + this.props.id}>
                <h2>{this.props.name}</h2>
                <FloorplanImage src={this.props.floorplan}>
                </FloorplanImage>
            </FloorplanContainer>
    }
}
export default Floorplan;