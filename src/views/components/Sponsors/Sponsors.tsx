import React from 'react';
import cc from 'classcat';
import css from './Sponsors.scss';
import {getSponsors} from "../../../shared/data";
import {SponsorGrade} from "../../../shared/interfaces";

interface SponsorsProps {
}

const sponsors = getSponsors();
const grades = [
  { itemCnt: 3, grade: 'DIAMOND', sponsors: sponsors.filter(s => s.sponsor.grade === SponsorGrade.Diamond) },
  { itemCnt: 3, grade: 'PLATINUM', sponsors: sponsors.filter(s => s.sponsor.grade === SponsorGrade.Platinum) },
  { itemCnt: 2, grade: 'GOLD', sponsors: sponsors.filter(s => s.sponsor.grade === SponsorGrade.Gold) },
  { itemCnt: 3, grade: 'ETC', sponsors: sponsors.filter(s => s.sponsor.grade === SponsorGrade.ETC) },
];

const Sponsors: React.FC<SponsorsProps> = () => {
  return (
    <div className={css.Sponsors}>
      {grades.map(row => (
        row.sponsors.length ?
          <div key={row.grade} className={cc([css.Row, row.grade])}>
            <h2>{row.grade}</h2>
            {row.sponsors.reduce((acc, item, idx) => {
              if (idx % row.itemCnt === 0) {
                acc.push([]);
              }
              acc[acc.length - 1].push(item);
              return acc;
            }, []).map((list, idx) => (
              <div key={idx} className={cc([css.SponsorList, css[row.grade]])}>
                {list.map(s => (
                  <a key={s.name} href={s.link} target="_blank">
                    <img src={'/static/images/sponsors/' + s.image} alt={s.name}/>
                  </a>
                ))}
              </div>
            ))}
          </div> : null
      ))}
    </div>
  );
}

export default Sponsors;
