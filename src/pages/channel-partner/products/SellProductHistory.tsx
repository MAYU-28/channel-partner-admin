import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';
import Table from '../../../components/Table';

//dummy data
import { records as data } from './historydata';

const columns = [
    {
        Header: 'ID',
        accessor: 'id',
        sort: true,
    },
    {
        Header: 'Product',
        accessor: 'product',
        sort: true,
    },
    {
        Header: 'Farm Name',
        accessor: 'farmname',
        sort: false,
    },
    {
        Header: 'Crop Name',
        accessor: 'cropname',
        sort: true,
    },
    {
        Header: 'Date',
        accessor: 'date',
        sort: false,
    },
    {
        Header: 'Quantity',
        accessor: 'quantity',
        sort: false,
    },
    {
        Header: 'Price',
        accessor: 'price',
        sort: false,
    },
];

const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: data.length,
    },
];

const Advanced = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Products', path: '/farmer/buy-products-history' },
                    {
                        label: 'Sell Products History',
                        path: '/farmer/sell-products-history',
                        active: true,
                    },
                ]}
                title={'Sell Products History'}
            />
            <Row>
                <Col>
                    <Card className='bg-gradient-pink'>
                        <Card.Body>
                            <h4 className="text-white">Total Products Purchased</h4>
                            <h2 className='text-white mt-3'>5000</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-gradient-primary  text-white'>
                        <Card.Body>
                            <h4 className="text-white">Total Amount Spent</h4>
                            <h2 className=' text-white mt-3'>8000</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">Sell Products History</h4>
                            
                            <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    );
};

export default Advanced;
