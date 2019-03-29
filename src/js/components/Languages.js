import React, {Component, Fragment} from 'react';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps";
import InfoBlock from "./InfoBlock";

class Languages extends Component {
    render() {
        return (
            <Fragment>
                <InfoBlock title={"Languages"} content={(
                    <Fragment>
                        <ComposableMap style={{width: "100%", height: "auto"}}>
                            <ZoomableGroup center={[0,20]} disablePanning>
                                <Geographies geography={ "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json" }>
                                    {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                                        <Geography
                                            key={i}
                                            geography={geography}
                                            projection={projection}
                                            style={{
                                                default: {
                                                    fill: "#ECEFF1",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.75,
                                                    outline: "none",
                                                },
                                                hover: {
                                                    fill: "#607D8B",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.75,
                                                    outline: "none",
                                                },
                                                pressed: {
                                                    fill: "#FF5722",
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.75,
                                                    outline: "none",
                                                },
                                            }}
                                        />
                                    ))}
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
                    </Fragment>
                )}/>
            </Fragment>
        );
    }
}

export default Languages;
