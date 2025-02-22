// Write your code here
import './index.css'

const SuggestionItem = ({suggestion, onSuggestionClick}) => (
  <li className="suggestion-item">
    <p className="suggestion-text">{suggestion}</p>
    <button
      type="button"
      className="arrow-button"
      onClick={() => onSuggestionClick(suggestion)}
    >
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
      />
    </button>
  </li>
)

export default SuggestionItem
