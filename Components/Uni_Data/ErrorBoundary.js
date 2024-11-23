import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error or send it to an error tracking service here
    console.error('Error caught by ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={{ padding: 20, backgroundColor: '#f8d7da' }}>
          <Text style={{ color: '#721c24' }}>Something went wrong with this section.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
