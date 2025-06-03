import './SplashScreen.css'

const SplashScreen = () => (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-grey-200 to-black z-50">
    <h2 className="text-red-500 mb-4 text-4xl">Khaemba Innocent</h2>
    <img
      src="/images/portforlio_splash.png"
      alt="Splash"
      className="w-64 h-64 object-cover rounded-full shadow-lg animate-pulse animate-grow-shrink"
    />
    <div className="absolute bottom-16 flex flex-col items-center w-full md:w-1/2">
      <div className="mb-2 text-white text-lg font-semibold">Please Wait...</div>
      <div className="w-14 h-14 rounded-full border-4 border-t-transparent border-b-transparent border-l-transparent animate-spin"
        style={{
          borderRight: "4px solid",
          borderImage: "linear-gradient(90deg, #a21caf, #ef4444) 1"
        }}
      ><h1>KAY</h1></div>
    </div>
  </div>
);

export default SplashScreen;