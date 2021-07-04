import React from "react";
import Styled from "styled-components/native";

import WeatherView from "./pages/WeatherView";

const Container = Styled.View`
    flex: 1;
    background-color: #EEE;
`;

const App = () => {
    return (
        <Container>
            <WeatherView />
        </Container>
    );
};

export default App;
