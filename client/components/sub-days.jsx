import React from 'react';
import { subDays, format } from 'date-fns';
const SubDays = props => {
  const { today, selectedDay, handleDateClick } = props;
  const dayNumbers = [3, 2, 1];
  return dayNumbers.map((daysNums, index) => {
    const sendDate = subDays(today, daysNums);
    const formatDay = format(sendDate, 'yyyy-MM-dd');
    return (
      <div
        className={
          selectedDay === formatDay ? 'selected-date date-item' : 'date-item'
        }
        key={index}
        onClick={() => handleDateClick(event, sendDate)}
        id={formatDay}
      >
        <span className="day-label">
          {format(subDays(today, daysNums), 'E')}
        </span>
        <span className="date-label">
          {format(subDays(today, daysNums), 'dd')}
        </span>
      </div>
    );
  });
};

export default SubDays;
