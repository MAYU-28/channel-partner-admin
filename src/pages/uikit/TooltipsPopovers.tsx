import React from 'react';
import { Row, Col, Card, OverlayTrigger, Tooltip, Button, Popover, OverlayProps } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

interface DirectionsType {
    placement: OverlayProps['placement'];
}

const PopoverDirection = () => {
    const directions: DirectionsType[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];

    const popover = (
        <Popover id="popover-direction">
            <Popover.Body>And here's some amazing content. It's very engaging. Right?</Popover.Body>
        </Popover>
    );

    return (
        <>
            <h4 className="header-title">Popovers</h4>
            <p className="sub-header">
                Add small overlays of content, like those on the iPad, to any element for housing secondary information.
            </p>

            <div className="button-list">
                {(directions || []).map((item) => (
                    <OverlayTrigger
                        trigger="click"
                        key={item.placement}
                        placement={item.placement}
                        overlay={
                            <Popover popper id={`popover-positioned-${item.placement}`}>
                                <Popover.Body>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</Popover.Body>
                            </Popover>
                        }
                    >
                        <Button variant="light" className="me-1">
                            Popover on {item.placement}
                        </Button>
                    </OverlayTrigger>
                ))}

                <OverlayTrigger trigger="focus" placement="right" overlay={popover}>
                    <Button>Dismissible popover</Button>
                </OverlayTrigger>
            </div>
        </>
    );
};

const TooltipDirection = () => {
    const directions: DirectionsType[] = [
        { placement: 'top' },
        { placement: 'bottom' },
        { placement: 'right' },
        { placement: 'left' },
    ];

    return (
        <>
            <h4 className="header-title">Tooltips</h4>
            <p className="sub-header">Four options are available: top, right, bottom, and left aligned.</p>

            <div className="button-list">
                {(directions || []).map((item) => (
                    <OverlayTrigger
                        key={item.placement}
                        placement={item.placement}
                        overlay={
                            <Tooltip id={`tooltip-${item.placement}`}>
                                Tooltip on <strong>{item.placement}</strong>.
                            </Tooltip>
                        }
                    >
                        <Button variant="light" className="me-1">
                            Tooltip on {item.placement}
                        </Button>
                    </OverlayTrigger>
                ))}
            </div>
        </>
    );
};

const TooltipsPopovers = () => {
    return (
        <React.Fragment>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/tooltips-popovers' },
                    {
                        label: 'Tooltips & Popovers',
                        path: '/ui/tooltips-popovers',
                        active: true,
                    },
                ]}
                title={'Tooltips & Popovers'}
            />

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <PopoverDirection />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <TooltipDirection />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TooltipsPopovers;
