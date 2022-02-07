import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import React from "react";

class Index extends React.Component {
  state = { open: false };
  render() {
    return (
      <Page
        title="Products"
        primaryAction={{
          content: "Select Products",
          onAction: () => this.setState({ open: true }),
        }}
      >
        <ResourcePicker
          resourceType="Product"
          // showVariant={false}
          open={this.state.open}
        />
      </Page>
    );
  }
}

export default Index;
