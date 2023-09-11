import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import PageTitle from '../../../components/PageTitle';

import Statistics from './Statistics';
import RevenueChart from './RevenueChart';
import SalesChart from './SalesChart';
import MarketingChart from './MarketingChart';
import RevenueChartByLocation from './RevenueChartByLocation';
import TopSellingProducts from './TopSellingProducts';
import RevenueHistory from './RevenueHistory';
import PerformanceChart from './PerformanceChart';
import CropWiseSale from './CropWiseSale';
import CropOrders from "./CropOrders";
import TopCrops from "./TopCrops";
import TransactionHistory from "./TransactionHistory";
import OrderSummary from "./OrderSummary";
import Requests from "./Requests";


// dummy data
import { products, revenueHistory } from './data';
import { Card } from "react-bootstrap";

const SalesDashboard = () => {
    return (
      <>
        <PageTitle
          breadCrumbItems={[
            { label: "Dashboards", path: "/dashboard/sales" },
            { label: "Sales", path: "/dashboard/sales", active: true },
          ]}
          title={"Welcome !"}
        />
        <Card></Card>
        <Statistics />
        <CropWiseSale />
        <Row>
          <Col xl={6} sm={12}>
            <CropOrders />
          </Col>
          <Col xl={6} sm={12}>
            <TopCrops />
          </Col>
        </Row>
        <Row>
            <Col xl={12}>
                <TransactionHistory/>
                <OrderSummary />
                <Requests />
            </Col>
        </Row>
      </>
    );
};

export default SalesDashboard;
