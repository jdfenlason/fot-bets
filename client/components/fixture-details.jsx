import React from 'react';
import { formatDate } from '../lib';

const FixtureDetails = props => {
  const { activeId } = props;
  const { name, round, logo } = props.fixtures.league;
  const { id, venue, referee, date } = props.fixtures.fixture;
  const tbdRef = 'TBD';

  return (
    <div
      className={activeId === id ? '' : 'hidden'}
      id={id}
    >
      <div className="row column-full center fixture-card">
        <div className="outer-card column-full">
          <div className="match-card row center">
            <h2 className = "lg">Fixture Details</h2>
            <h5 className="sub-head">{name}</h5>
            <h5 className="sub-head">{round}</h5>
            <img
              className="small-logo"
              src={logo}
              alt=""
            />
            <h4>{formatDate(date)}</h4>
            <div className="sub-details column-full">
              <div className="location column-half">
                <h3 className = "head lg">Stadium:</h3>
                <h5 className="sub-head">
                  {venue.name}
                </h5>
                <h5 className="sub-head">
                  {venue.city}
                </h5>
              </div>
              <div className="location column-half ref">
                <h3 className = "head lg">Referee:</h3>
                <h5 className="sub-head">{(!referee) ? tbdRef : referee }</h5>
                <h5 className = "sub-head"></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixtureDetails;
