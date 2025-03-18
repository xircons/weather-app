import React, { useState, useEffect } from 'react';
import './index.css';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#1A1A1A" viewBox="0 0 16 16">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>
);

const WindIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#1A1A1A" viewBox="0 0 16 16">
    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
  </svg>
);

const HumidityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#1A1A1A" className="bi bi-water" viewBox="0 0 16 16">
  <path d="M.036 3.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 3.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 6.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0L.314 9.964a.5.5 0 0 1-.278-.65m0 3a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65"/>
</svg>
);

const VisibilityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#1A1A1A" viewBox="0 0 16 16">
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A0A0A0" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792 0 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278z"/>
  </svg>
);

// Get icon component
const getIconComponent = (iconType) => {
  switch (iconType) {
    case 'sun-icon':
      return <SunIcon />;
    case 'wind-icon':
      return <WindIcon />;
    case 'humidity-icon':
      return <HumidityIcon />;
    case 'visibility-icon':
      return <VisibilityIcon />;
    default:
      return null;
  }
};

// Component for the navigation bar with functional search bar
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log(`Searching for: ${searchTerm}`);
      alert(`Searching for weather in: ${searchTerm}`);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
    document.body.classList.toggle('dark-theme');
  };

  return (
    <div className="navbar col-12">
      <div className="logo">
        <div className="logo-circle"></div>
      </div>
      <form className={`search-bar ${isSearchFocused ? 'focused' : ''}`} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
        <button type="submit" className="search-button">
          <SearchIcon />
        </button>
      </form>
      <div className="nav-buttons">
        <button className="get-app-btn">Get the App</button>
        <ThemeToggle isDark={isDarkTheme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

// Component for the time display
const TimeDisplay = () => {
  const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0')
      });
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-display">
      <span className="time-unit">{time.hours}</span>
      <span className="separator">:</span>
      <span className="time-unit">{time.minutes}</span>
      <span className="separator">:</span>
      <span className="time-unit">{time.seconds}</span>
    </div>
  );
};

// Component for the clock section
const ClockSection = ({ date }) => (
  <div className="clock-section">
    <TimeDisplay />
    <div className="clock-details">
      <span className="current-label">Current</span>
      <div className="date-location">
        <span>{date}</span>
        <span>Chiang Mai, Thailand</span>
      </div>
    </div>
  </div>
);

// Component for the weather detail item
const WeatherDetailItem = ({ icon, text }) => (
  <div className="detail-item">
    <div className="icon">
      {getIconComponent(icon)}
    </div>
    <span>{text}</span>
  </div>
);

// Component for the forecast day
const ForecastDay = ({ day, temp, condition }) => (
  <div className="forecast-day">
    <span className="day-name">{day}</span>
    <div className="day-temp">{temp}</div>
    <span className="day-condition">{condition}</span>
  </div>
);

// Component for the grid overlay with animation
const GridOverlay = ({ show }) => {
  return (
    <div className={`grid-overlay ${show ? 'show' : 'hide'}`} key={show ? 'show' : 'hide'}>
      <div className="grid-overlay-inner">
        {[...Array(12)].map((_, index) => (
          <div 
            key={index} 
            className="grid-column animated-column" 
            style={{ animationDelay: `${index * 0.1}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const toggleGrid = () => setShowGrid(prev => !prev);

const ThemeToggle = ({ isDark, toggleTheme }) => (
  <div className="theme-toggle" onClick={toggleTheme}>
    <div className={`toggle-circle ${isDark ? 'dark' : ''}`}>
      {isDark && <MoonIcon />}
    </div>
  </div>
);

const App = () => {
  const [date, setDate] = useState('');
  const [showGrid, setShowGrid] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  useEffect(() => {
    const updateDate = () => {
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      setDate(new Date().toLocaleDateString('en-US', options));
    };
    
    updateDate();
    const interval = setInterval(updateDate, 60000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  const weatherForecast = [
    { day: 'Today', temp: '20°C', condition: 'Clear' },
    { day: 'Tuesday', temp: '20°C', condition: 'Clear' },
    { day: 'Wednesday', temp: '20°C', condition: 'Clear' },
    { day: 'Thursday', temp: '20°C', condition: 'Clear' },
    { day: 'Friday', temp: '20°C', condition: 'Clear' },
    { day: 'Saturday', temp: '20°C', condition: 'Clear' },
  ];

  const weatherDetails = [
    { icon: 'sun-icon', text: '0. Low' },
    { icon: 'wind-icon', text: '3 Km/h' },
    { icon: 'humidity-icon', text: '59% Humidity' },
    { icon: 'visibility-icon', text: '14 Km' },
  ];

  const toggleGrid = () => setShowGrid(!showGrid);

  return (
    <>
      <GridOverlay show={showGrid} />
      
      <button className="grid-toggle" onClick={toggleGrid}>
        <span className={`icon-close ${showGrid ? 'visible' : 'hidden'}`}>×</span>
        <span className={`icon-grid ${showGrid ? 'hidden' : 'visible'}`}>#</span>
      </button>

      <div className="app-container grid-container">
        {/* Navbar */}
        <div className="row">
          <Navbar />
        </div>
        
        {/* Clock Section */}
        <div className="row clock-row">
          <div className="clock-container col-12">
            <ClockSection date={date} />
          </div>
        </div>
            
        <div className="row">
          <div className="col-12">
            <div className="divider"></div>
          </div>
        </div>
            
        {/* Weather Section */}
        <div className="weather-section">
          <div className="row">
            <div className="col-12">
              <div className="location-display">
                <h1>Chiang Mai,<br />Thailand</h1>
              </div>
            </div>
          </div>
          
          <div className="row weather-content">
            <div className="col-6">
              <div className="current-temp">
                <span className="temp">20°C</span>
                <span className="feels-like">/ Feel like</span>
                <span className="temp-feel-like">18°C</span>
              </div>
            </div>
            
            <div className="col-6">
              <div className="weather-details">
                {weatherDetails.map((detail, index) => (
                  <WeatherDetailItem 
                    key={index} 
                    icon={detail.icon} 
                    text={detail.text} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
              
        {/* Weather Forecast */}
        <div className="row">
          <div className="forecast-container col-12">
            <div className="forecast">
              {weatherForecast.map((day, index) => (
                <ForecastDay 
                  key={index} 
                  day={day.day} 
                  temp={day.temp} 
                  condition={day.condition} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;