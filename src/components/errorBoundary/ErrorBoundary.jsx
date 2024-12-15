import React from 'react';
import PropTypes from 'prop-types';

import { ERROR_BOUNDARY_TEXT } from '../../constant';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // State aktualisieren, sodass beim nächsten Render die Fallback-UI angezeigt wird.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Fehlerprotokollierungsdienst
    console.error("Fehler abgefangen:", error, errorInfo);
    // Hier könnte den Fehler an einen externen Dienst senden
    // z.B. logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback-UI
      return this.props.fallback || (
        <div role="alert">
          <h1>{ERROR_BOUNDARY_TEXT.TEXT_1}</h1>
          <p>{ERROR_BOUNDARY_TEXT.TEXT_2}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  fallback: PropTypes.node,
};

export default ErrorBoundary;
