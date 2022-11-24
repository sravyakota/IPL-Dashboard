// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <div className="latest-match-sub-container">
        <div className="sub-headings-container">
          <p className="latest-match-heading">{competingTeam}</p>
          <p className="latest-match-names"> {date}</p>
          <p className="latest-match-names">{venue}</p>
          <p className="latest-match-names">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-match-logo"
        />
      </div>
      <div>
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="latest-match-logo-large"
        />
      </div>
      <hr className="hr-line" />
      <div className="text-right">
        <p className="latest-match-heading">FirstInnings</p>
        <p className="latest-match-names">{firstInnings}</p>
        <p className="latest-match-heading">SecondInnings</p>
        <p className="latest-match-names">{secondInnings}</p>
        <p className="latest-match-heading">ManOfTheMatch</p>
        <p className="latest-match-names">{manOfTheMatch}</p>
        <p className="latest-match-heading">umpires</p>
        <p className="latest-match-names">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
