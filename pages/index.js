import { Heading, Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Products"
    primaryAction={{
      content: "Select Products",
      onAction: () => console.log("clicked"),
    }}
  />
);

export default Index;
