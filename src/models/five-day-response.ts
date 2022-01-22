export default interface FiveDayResponse {
  weather: [
    {
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
};