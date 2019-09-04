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
          {rowList[0].map((item, idx) => (
            <SpeakerBrief
              key={item.nameEn}
              speaker={item}
              order={idx}
            />
          ))}
        </div>
      ) : rowList.map((row, listIdx) => (
        <div key={listIdx} className={css.Row}>
          {row.map((item, idx) => (
            <SpeakerBrief
              key={item.nameEn}
              speaker={item}
              order={(listIdx * 4) + idx}
            />
          ))}
          {row.length < count ?
            [...Array(count - row.length)].map((_, idx) => (
              <SpeakerBrief
                speaker={null}
                key={idx}
                order={(listIdx * 4) + idx}
              />
            )) : null
          }
        </div>
      ))}
    </div>
  );
}

export default RowContainer;
