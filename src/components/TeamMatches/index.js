/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {details: {}, bgColor: '', isLoading: true}

  componentDidMount() {
    this.fetchingTeamMatches()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  fetchingTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()

    const formattedData = {
      latestMatchDetails: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(each =>
        this.getFormattedData(each),
      ),
      teamBannerUrl: fetchedData.team_banner_url,
    }

    this.setState({details: formattedData, bgColor: id, isLoading: false})
  }

  render() {
    const {details, bgColor, isLoading} = this.state
    const {latestMatchDetails, recentMatches, teamBannerUrl} = details
    // console.log(recentMatches)

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`bg ${bgColor}`}>
            <div className="team-matches-container">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="banner-image"
              />
              <h1 className="latest-matches-heading">Latest Matches</h1>
              <LatestMatch
                latestMatchDetails={latestMatchDetails}
                key={latestMatchDetails.competingTeam}
              />
              <ul className="match-cards-lists-container">
                {recentMatches.map(eachMatch => (
                  <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
