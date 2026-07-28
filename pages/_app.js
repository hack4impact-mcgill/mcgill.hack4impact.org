import React from "react";
import ErrorMessage from "../components/errorMessage";

export default class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Page Error Boundary: ", error);
    console.error("Page Error Boundary Info: ", errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        {this.state.hasError ? (
          <ErrorMessage
            code="404"
            message="Something went Wrong. Are you logged in? Check logs as well"
          />
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    );
  }
}
