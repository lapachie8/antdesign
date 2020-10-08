import React, { Component } from 'react';

import TemplateContainer from '../Template/Container/TemplateContainer';

export default function WithTemplate(ContentComponent: any) {
  class CombinedComponent extends Component {
    render() {
      return (
        <TemplateContainer {...this.props}>
          <ContentComponent />
        </TemplateContainer>
      );
    }
  }
  return CombinedComponent;
}
