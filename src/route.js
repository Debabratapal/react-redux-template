import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import SpacePartner from './pages/SpacePartner';
import NewPartner from './pages/NewPartner';
import ManageUser from './pages/ManageUser';
import InventoryLog from './pages/InventoryLog';
import ManageAds from './pages/ManageAds';
import PlanCreator from './pages/PlanCreator';
import Analytics from './pages/Analytics';

const routes = [
  {
    link: '/',
    component: Home,
    exact: true,
  },
  {
    link: '/login',
    component: LoginPage,
    exact: true
  },
  {
    link: '/space-partner',
    component: SpacePartner,
    exact: true,
  },
  {
    link: '/new-partner',
    component: NewPartner,
    exact: true,
  },
  {
    link: '/manage-ads',
    component: ManageAds,
    exact: true,
  },
  {
    link: '/plan-creator',
    component: PlanCreator,
    exact: true,
  },
  {
    link: '/user-management',
    component: ManageUser,
    exact: true,
  },
  {
    link: '/analytics',
    component: Analytics,
    exact: true,
  },
  {
    link: '/inventory-log',
    component: InventoryLog,
    exact: true,
  }
]

const Routes = () => {
  return routes.map((route,i) => (
    <Route 
      key={i}
      path={route.link} 
      exact={route.exact} 
      component={route.component} 
    />
  ))
}

export default Routes;
