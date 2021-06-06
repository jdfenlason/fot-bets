import React from 'react';

const BetSlip = props => {
  return (
    <div
      className={props.activeId === props.fixtures.fixture.id ? '' : 'none'}
      id={props.fixtures.fixture.id}
    >
      <div className="row column-full center">
        <div className="outer-card column-full">
          <div className="match-card row center">
            <h3>Bet Slip</h3>
              <h4>Pick a Team:</h4>
            <div>
            </div>
          </div>
          <div className="row column-full">
            <div className="location column-thirds margin-bottom">
              <div className="logo-button">
                <img
                  className={'small-logo'}
                  onClick={() => props.addWagerTeam(event, props.homeOdds)}
                  id={props.fixtures.teams.home.id}
                  src={props.fixtures.teams.home.logo}
                  alt={props.fixtures.teams.home.name}
                />
              </div>
              <h4 className="sub-head">{props.fixtures.teams.home.name}</h4>
              <h3>Odds:</h3>
              <h4 className="sub-head">{props.homeOdds}</h4>
            </div>
            <div className="location column-thirds margin-bottom">
              <div className="logo-button">
                <img
                  onClick={() => props.addWagerTeam(event, props.awayOdds)}
                  id={props.fixtures.teams.away.id}
                  className="small-logo"
                  src={props.fixtures.teams.away.logo}
                  alt={props.fixtures.teams.away.name}
                />
              </div>
              <h4 className="sub-head">{props.fixtures.teams.away.name}</h4>
              <h3>Odds:</h3>
              <h4 className="sub-head">{props.awayOdds}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BetSlip;
