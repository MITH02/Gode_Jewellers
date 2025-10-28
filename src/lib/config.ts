// API Configuration - Dynamically set based on environment
export const getApiUrl = () => {
	const storedApiUrl = localStorage.getItem('apiUrl');
	if (storedApiUrl) {
		return storedApiUrl;
	}

	const hostname = window.location.hostname;

	// ✅ Production on Render
	if (hostname === 'gode-jewellers-frontend.onrender.com') {
		return 'https://gode-jewellers.onrender.com/api';
	}

	// ✅ Development (local)
	if (hostname === 'localhost' || hostname === '127.0.0.1') {
		return 'http://localhost:8099/api';
	}

	// ✅ Fallback
	return `https://${hostname}/api`;
};

export const API_BASE_URL = getApiUrl();
console.log("🚀 API_BASE_URL detected:", API_BASE_URL);
