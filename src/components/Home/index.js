/* eslint-disable react/no-unknown-property */
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsList: []}

  componentDidMount() {
    this.fetchingTeamsData()
  }

  fetchingTeamsData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()
    const {teams} = data

    const obj = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamsList: obj, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="ipl-home-container">
            <div className="heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="main-heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-container">
              {teamsList.map(eachItem => (
                <TeamCard key={eachItem.id} details={eachItem} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
