import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details

  return (
    <li className="team-card-container">
      <Link to={`/team-matches/${id}`} className="team-link">
        <img src={teamImageUrl} alt={name} className="team-card-logo" />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
