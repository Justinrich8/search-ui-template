import { CardProps, useCardAnalyticsCallback, useCardFeedbackCallback } from '@yext/search-ui-react';
import { useCallback } from 'react';

interface CustomRawDataType {
  name: string,
  c_body: string,
  description: string,
}

export function PresidentCard(props: CardProps<CustomRawDataType>): JSX.Element {
  const { result } = props;
  const onClickTitle = useCardAnalyticsCallback(result, 'TITLE_CLICK');
  const cardFeedbackCallback = useCardFeedbackCallback(result);
  const onClick = useCallback(() => {
    cardFeedbackCallback('THUMBS_UP');
  }, [cardFeedbackCallback]);

  return (
    <div className='flex flex-col justify-between border rounded-lg mb-4 p-4 shadow-sm'>
      <p className='text-red-600'>President Card</p>
      <button onClick={onClickTitle}>Name: {result.rawData.name}</button>
      <p>Description: {result.rawData.c_body}</p>
      <button onClick={onClick}>Feedback</button>
    </div>
  );
}
