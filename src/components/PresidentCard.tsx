import { CardProps, useCardAnalyticsCallback, useCardFeedbackCallback } from '@yext/search-ui-react';
import { useCallback, useState } from 'react';

interface CustomRawDataType {
  c_politicalParty: string;
  name: string;
  c_body: string;
  description: string;
  c_serviceDates: string;
}

interface Result {
  rawData: {
    name: string;
    c_politicalParty: string;
    c_serviceDates: string;
    c_body: string;
  };
}

function ResultCard({ result }: { result: Result }): JSX.Element {
  const [showFullBio, setShowFullBio] = useState(false);
  const bioText = showFullBio ? result.rawData.c_body : result.rawData.c_body.slice(0, 500);

  const toggleShowFullBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <div className='flex flex-col justify-between border rounded-lg mb-4 p-4 shadow-sm text-blue'>
      <p><strong>Political Party: </strong>{result.rawData.c_politicalParty}</p>
      <p><strong>Term:</strong> {result.rawData.c_serviceDates} </p>
      <p>Bio: {bioText}</p>
      {result.rawData.c_body.length > 500 && (
        <button onClick={toggleShowFullBio}>
          {showFullBio ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}

export function PresidentCard(props: CardProps<CustomRawDataType>): JSX.Element {
  const { result } = props;
  const onClickTitle = useCardAnalyticsCallback(result, 'TITLE_CLICK');
  const cardFeedbackCallback = useCardFeedbackCallback(result);
  const onClick = useCallback(() => {
    cardFeedbackCallback('THUMBS_UP');
  }, [cardFeedbackCallback]);

  return (
    <ResultCard result={result} />
  );
}
