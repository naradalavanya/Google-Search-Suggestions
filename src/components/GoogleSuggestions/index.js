import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {searchInput: ''}
  }

  updateSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSuggestionClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredSuggestions = suggestionsList.filter(({suggestion}) =>
      suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-suggestions-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />

        {/* Search Box */}
        <div className="search-box">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.updateSearchInput}
            />
          </div>

          {/* Suggestions List */}
          <ul className="suggestions-list">
            {filteredSuggestions.map(({id, suggestion}) => (
              <SuggestionItem
                key={id}
                suggestion={suggestion}
                onSuggestionClick={this.onSuggestionClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
