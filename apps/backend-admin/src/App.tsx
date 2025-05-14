import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { MarketplaceSyncList } from "./marketplaceSync/MarketplaceSyncList";
import { MarketplaceSyncCreate } from "./marketplaceSync/MarketplaceSyncCreate";
import { MarketplaceSyncEdit } from "./marketplaceSync/MarketplaceSyncEdit";
import { MarketplaceSyncShow } from "./marketplaceSync/MarketplaceSyncShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { SubscriptionPlanList } from "./subscriptionPlan/SubscriptionPlanList";
import { SubscriptionPlanCreate } from "./subscriptionPlan/SubscriptionPlanCreate";
import { SubscriptionPlanEdit } from "./subscriptionPlan/SubscriptionPlanEdit";
import { SubscriptionPlanShow } from "./subscriptionPlan/SubscriptionPlanShow";
import { MarketplaceList } from "./marketplace/MarketplaceList";
import { MarketplaceCreate } from "./marketplace/MarketplaceCreate";
import { MarketplaceEdit } from "./marketplace/MarketplaceEdit";
import { MarketplaceShow } from "./marketplace/MarketplaceShow";
import { OfferCardList } from "./offerCard/OfferCardList";
import { OfferCardCreate } from "./offerCard/OfferCardCreate";
import { OfferCardEdit } from "./offerCard/OfferCardEdit";
import { OfferCardShow } from "./offerCard/OfferCardShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="MarketplaceSync"
          list={MarketplaceSyncList}
          edit={MarketplaceSyncEdit}
          create={MarketplaceSyncCreate}
          show={MarketplaceSyncShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="SubscriptionPlan"
          list={SubscriptionPlanList}
          edit={SubscriptionPlanEdit}
          create={SubscriptionPlanCreate}
          show={SubscriptionPlanShow}
        />
        <Resource
          name="Marketplace"
          list={MarketplaceList}
          edit={MarketplaceEdit}
          create={MarketplaceCreate}
          show={MarketplaceShow}
        />
        <Resource
          name="OfferCard"
          list={OfferCardList}
          edit={OfferCardEdit}
          create={OfferCardCreate}
          show={OfferCardShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
