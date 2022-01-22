export default interface TodayDataResponse {
  name: string;
  weather:[
    {
      icon: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
};