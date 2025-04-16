const ErrorState = ({ message }) => {
    return (
      <div className="text-center py-8 bg-red-50 rounded-lg border border-red-100 p-6" aria-live="assertive">
        <p className="text-red-600 font-medium">Error</p>
        <p className="text-red-600">{message || 'Something went wrong. Please try again.'}</p>
      </div>
    );
  };

export default ErrorState;