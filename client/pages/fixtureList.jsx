import React from 'react';
import { fromUnixTime, format } from 'date-fns';
import axios from 'axios';
export default class FixtureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixturesList: [],
      toggleMatchDetails: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedFixture = event.target.getAttribute('id');
    if (clickedFixture === this.state.toggleMatchDetails) {
      this.setState({ toggleMatchDetails: null });
    } else {
      this.setState({ toggleMatchDetails: clickedFixture });
    }
  }

  matchDetails() {

    return (
     <div>
            {this.state.fixturesList.map(matchDetails =>
      <div className ="row column-full center" key= {matchDetails.fixture.id}>

          <div className = "outer-card column-full">
            <div className ="inner-card ">

          <div className="match-details column-full">
          <h3>Match Details</h3>
          <h5>{matchDetails.league.name}</h5>
          <h6>{matchDetails.league.round}</h6>
          <img className="league-logo" src={matchDetails.league.logo} alt="" />
          <div className = "row">

          </div>

          </div>

            </div>
          </div>
        </div>

            )}
        </div>
    );

  }

  componentDidMount() {
    axios.request('/api/week-games/:date').then(response => {
      this.setState({ fixturesList: response.data });
    }).catch(err => {
      console.error(err);
    });
  }

  getDateData(props) {
    const unix = fromUnixTime(props);
    const gameTime = format(unix, 'KK:mm bb');
    return gameTime;
  }

  noGamesToday() {
    return (
      <div className="row">
        <div className="no-game">
          <h1>No Upcoming Fixtures</h1>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.fixturesList.length) {
      return this.noGamesToday();
    }
    return (

        <>
        <div className = "fixture-date-heading">
       <h1>Today&apos;s Fixtures</h1>
        </div>
        {this.state.fixturesList.map(fixture => (
          <a key={fixture.fixture.id} onClick={(this.handleClick)} id= {(fixture.fixture.id)}>
            <div className="row column-full center">
              <div className="outer-card column-full">
                <div className="inner-card column-full">
                  <div className="team-container">
                    <div className="image-container">
                      <img
                        className="team-logo"
                        src={fixture.teams.home.logo}
                        alt="home-team-logo"
                        />
                    </div>
                    <h4>{fixture.teams.home.name}</h4>
                  </div>
                  <div className="kick-off-container">
                    <h3>Kick-Off</h3>
                    <h4 className= "kick-off-time">{this.getDateData(fixture.fixture.timestamp)}</h4>
                  </div>
                  <div className="team-container">
                    <div className="image-container"></div>
                    <img
                      className="team-logo"
                      src={fixture.teams.away.logo}
                      alt="away-team-logo"
                      />
                    <h4>{fixture.teams.away.name}</h4>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      <div>
        {this.matchDetails()}
      </div>
        </>
    );
  }
}
