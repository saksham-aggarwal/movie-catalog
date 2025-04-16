export const LoadingState = () => {
    return (
      <div className="text-center py-8" aria-live="polite">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading movies...</p>
      </div>
    );
  };
  
  export default LoadingState;