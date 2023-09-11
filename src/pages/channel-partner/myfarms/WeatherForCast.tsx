import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';
import WeatherWidget from './weather/WeatherWidget';

// dummy data
import { weather, chatMessages } from './weather/data';

const Widgets = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Home', path: '/farmer' },
                    { label: 'Weather Forcast', path: '/farmer/weather-forcast', active: true },
                ]}
                title={'Weather Forcast'}
            />
            {/* weather */}
            <Row>
                {(weather || []).map((item, index) => {
                    return (
                        <Col xl={6} key={index}>
                            <WeatherWidget item={item} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default Widgets;
