import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tab1 from './tabs/Tab1'

function ControlledTabsExample() {
  const [key, setKey] = useState('tab1');

  return (
    <Card>
        <Card.Body>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                >
                <Tab eventKey="tab1" title="Email" className='p-0'>
                    <Tab1 />
                </Tab>
                <Tab eventKey="tab2" title="Sms">
                    <Tab1 />
                </Tab>
                <Tab eventKey="tab3" title="Notifications">
                    <Tab1 />
                </Tab>
            </Tabs>
        </Card.Body>
    </Card>
  );
}

export default ControlledTabsExample;