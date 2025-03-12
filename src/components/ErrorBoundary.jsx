import { Component } from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

class ErrorBoundary extends Component {
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
    const { t } = this.props;

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

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
};

const TranslatedErrorBoundary = withTranslation()(ErrorBoundary);
export default TranslatedErrorBoundary;