import * as SelectorTemplate from '../Selector/TemplateSelector';
import * as TemplateAction from '../Store/TemplateAction';

import { bindActionCreators, compose } from 'redux';

import React from 'react';
import TemplateComponent from '../Component/TemplateComponent';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function TemplateContainer(props: any) {
  const { actionTemplate, siderIsOpen } = props;

  const handleToggleSider = () => {
    if (siderIsOpen) {
      actionTemplate.toggleSider(false);
    } else {
      actionTemplate.toggleSider(true);
    }
    console.log('handleToggleSider is called');
  };
  return <TemplateComponent handleToggleSider={handleToggleSider} {...props} />;
}

const mapStateToProps = createStructuredSelector({
  siderIsOpen: SelectorTemplate.sideIsOpenSelector(),
});

const mapDispatchToProps = (dispatch: any) => ({
  actionTemplate: bindActionCreators(TemplateAction, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(TemplateContainer);
