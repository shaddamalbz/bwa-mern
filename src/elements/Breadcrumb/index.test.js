import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "Home Details", pageHref: "" },
  ];
  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );
  const breadcrumb = container.querySelector(`.breadcrumb`);

  return {
    breadcrumb,
  };
};

test("Should have <ol> with classname .breadcrumb and have text home & home details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("Home Details");
});
