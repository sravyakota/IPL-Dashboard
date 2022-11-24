import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {matchStatus, result, competingTeam, competingTeamLogo} = matchDetails
  const msg = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="para">{result}</p>
      <p className={`para ${msg}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
