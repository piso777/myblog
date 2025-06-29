const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center">
      {/* Main Spinner */}
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-24 h-24 border-4 border-blue-400/30 rounded-full animate-spin">
          <div className="w-full h-full border-4 border-transparent border-t-blue-400 rounded-full animate-spin"></div>
        </div>
        
        {/* Inner Ring */}
        <div className="absolute top-2 left-2 w-20 h-20 border-4 border-purple-400/30 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}>
          <div className="w-full h-full border-4 border-transparent border-t-purple-400 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>
        
        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4 animate-pulse">Loading...</h2>
        
        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-8 w-64 bg-gray-700/30 rounded-full h-2 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 rounded-full animate-pulse" style={{width: '60%'}}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/50 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400/50 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-indigo-400/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
}

export default LoadingPage;
