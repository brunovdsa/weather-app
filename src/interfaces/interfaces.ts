export interface CardDataProps {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];

  wind: {
    speed: number;
  };
}

export interface CardProps {
  weatherData: CardDataProps | undefined;
  timestamp: number | undefined;
}
