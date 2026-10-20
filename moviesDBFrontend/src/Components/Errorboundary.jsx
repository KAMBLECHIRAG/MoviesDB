import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught by Error Boundary:", error);
    console.log("Error details:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHJi9Wx8_2-XdcgdrNiEZi-qmN3z1o0eX75IzJAQyLA&s=10" />
      );
    }

    return this.props.children;
  }
}
