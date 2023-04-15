import { useEffect, useState } from 'react';
import { IItem } from './InfiniteScrollList.types';

interface IPlaceholderData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const useInfiniteScrollList = <T extends IItem>() => {
  const [data, setData] = useState<T[]>([]);

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const d: IPlaceholderData[] = await response.json();
    const parsedArray = d
      .slice(0, 10)
      .map(item => ({ title: item.title } as T));
    setData(prevState => [...prevState, ...parsedArray]);
  };

  useEffect(() => {
    if (!data.length) {
      fetchData();
    }
  }, [data]);

  return {
    data,
    fetchData,
  };
};
