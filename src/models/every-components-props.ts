export default interface EveryComponentsProps {
  city: string;
  apiKey?: string;
  onSearch?: (arg: string) => void;
  getFiveDaysAPI?: () =>  Promise<Response>
  getTodayAPI?: () =>  Promise<Response>
}

