import React from 'react';
// components
import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import Statistics2 from './Statistics2';
import Allusers from './LatestRegistered';
import TransactionHistory from "./TransactionHistory";
import OrderSummary from "./OrderSummary";
import Requests from "./Requests";
import EmailAndNotifications from './EmailAndNotifications'

const ChannelPartner = () => {
    return (
      <>
        <PageTitle
          breadCrumbItems={[
            { label: "Dashboards", path: "/dashboard/sales" },
            { label: "Sales", path: "/dashboard/sales", active: true },
          ]}
          title={"Welcome !"}
        />
        <Statistics />
        <Allusers />
        <Statistics2/>
        <EmailAndNotifications />
        <TransactionHistory/>
        {/* <OrderSummary />
        <Requests /> */}
      </>
    );
};

export default ChannelPartner;
