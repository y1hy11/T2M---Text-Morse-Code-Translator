// i18n Translation, React, and PropTypes Imports
import { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

class ErrorBoundary extends Component {
  // Initialize error state
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    // Destructure translation function from props
    const { t } = this.props;

    // Render fallback UI if an error occurred
    if (this.state.hasError) {
      return (
        <div className="error-content">
          <h1>{t("error.somethingWrong")}</h1>
          <p>{t("error.refreshMessage")}</p>
          <button onClick={() => window.location.reload()}>
            {t("error.refreshPage")}
          </button>
        </div>
      );
    }

    // Render children if no error occurred
    return this.props.children;
  }
}

// PropTypes validation
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
};

// Wrap ErrorBoundary with translation HOC
const TranslatedErrorBoundary = withTranslation()(ErrorBoundary);
export default TranslatedErrorBoundary;