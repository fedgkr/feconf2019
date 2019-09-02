import React from 'react';
import css from './RowContainer.scss';
import {Speaker} from "../../../shared/interfaces";
import SpeakerBrief from "../../containers/SpeakersPage/components/SpeakerBrief/SpeakerBrief";

interface RowContainerProps {
  count: number;
  fold: boolean;
  items: Speaker[];
}

const RowContainer: React.FC<RowContainerProps> = ({
  count = 4,
  fold = true,
  items = [],
}) => {
  const rowList = items.reduce((acc, item, idx) => {
    if (idx % count === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(item);
    return acc;
  }, []);
  return (
    <div className={css.RowContainer}>
      {fold ? (
        <div key={0} className={css.Row}>
          {rowList[0].map((item) => (
            <SpeakerBrief
              key={item.nameEn}
              speaker={item}
            />
          ))}
        </div>
      ) : rowList.map((row, idx) => (
        <div key={idx} className={css.Row}>
          {row.map((item, idx) => (
            <SpeakerBrief
              key={idx}
              speaker={item}
            />
          ))}
          {row.length < count ?
            [...Array(count - row.length)].map((_, idx) => <SpeakerBrief speaker={null} key={idx}/>)
            : null
          }
        </div>
      ))}
    </div>
  );
}

export default RowContainer;
