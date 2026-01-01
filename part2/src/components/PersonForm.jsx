const PersonForm = ({ onSubmit, nameValue, numberValue, onNameChange, onNumberChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      name: <input value={nameValue} onChange={onNameChange} />
    </div>
    <div>
      number: <input value={numberValue} onChange={onNumberChange} />
    </div>
    <button type="submit">add</button>
  </form>
)

export default PersonForm
