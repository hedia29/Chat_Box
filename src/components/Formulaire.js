
import React from 'react';

class Formulaire extends React.Component {
	render(){
		return (
			<form className="form">
				<textarea 
				required
				maxLength="140"
				>
				</textarea>
				<button 
				type="submit"
				>Envoyer!
				</button>

			</form>
			
			)
	}
}
export default Formulaire;