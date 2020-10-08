import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardContainer from '../Dashboard/Container/DashboardContainer';
import InventoryContainer from '../Inventory/Container/InventoryContainer';
import SupplierContainer from '../Supplier/Container/SupplierContainer';
import WithTemplate from './WithTemplate';

export default class Navigation extends Component {
  render() {
    const dashboard = WithTemplate(DashboardContainer);
    const supplier = WithTemplate(SupplierContainer);
    const inventory = WithTemplate(InventoryContainer);

    return (
      <Switch>
        <Route path="/" exact={true} component={dashboard} />
        <Route path="/supplier" exact={true} component={supplier} />
        <Route path="/inventory" exact={true} component={inventory} />
      </Switch>
    );
  }
}
