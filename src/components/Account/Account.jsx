import React,{Fragment,useState,useEffect,useContext} from 'react';
import Switch from 'react-switch';


import { UserAccountContext } from '../../context/UserAccount/userAccountContext';


function PersonalDetails({user_account}){
	const [personalDetails, setPersonalDetails] = useState({
		userid: user_account.uid,
		names: '',
		surname: '',
		cell: user_account.phoneNumber,
		email: user_account.email
	});

	const{
		userid,
		names,
		surname,
		cell,
		email
	} = personalDetails;

	let onChangeHandler = e => {
		setPersonalDetails({
			...personalDetails,
			[e.target.name]:e.target.value
		});
	};

	let onUpdatePersonalDetails = e => {
		console.log('Updating personal details');
		// check for errors if found indicate the errors and exit
		// save personal details on localStorage. then save on backend
	};

	console.log('USER ACCOUNT',userid);

	return (
		<div className="box box-body">
			<div className="box-header">
				<h3 className="box-title">
					<strong>
						<small>
							{' '}
							<i className="fa fa-user"> </i> Personal Details{' '}
						</small>
					</strong>
				</h3>
			</div>

			<div className="box-footer col-lg-8">
				<form className="form-horizontal">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="names"
							placeholder="Names..."
							value={names}
							onChange={e => onChangeHandler(e)}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="surname"
							placeholder="Surname..."
							value={surname}
							onChange={e => onChangeHandler(e)}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="cell"
							placeholder="Cell..."
							value={cell}
							onChange={e => onChangeHandler(e)}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="email"
							placeholder="Email..."
							value={email}
							onChange={e => onChangeHandler(e)}
						/>
					</div>
					<div className="form-group">
						<button
							type="button"
							className="btn btn-success btn-lg"
							name="update"
							onClick={e => onUpdatePersonalDetails(e)}
						>
							<strong>
								<i className="fa fa-cloud-upload"> </i> Update
							</strong>
						</button>
						<button
							type="button"
							className="btn btn-warning btn-lg"
							name="cancel"
						>
							<strong>
								<i className="fa fa-cut"> </i> Cancel
							</strong>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default function Account (){
	const [display, setDisplay] = useState('personaldetails');
    
	let onSwitchScreen = (e) => {
		setDisplay(e.target.name);
		console.log(display);        
	};

	useEffect(() => {
		console.log(display);
	}, []);

	return (
		<UserAccountContext.Consumer>{(context) => {
			const { doSendEmailVerification, user_account_state } = context;
			return (
				<Fragment>
					<div className="box box-body">
						<div className="box-header">
							<h3 className="box-title">
								<strong>
									<i className="fa fa-sign-in"> </i> Account
								</strong>
							</h3>
							<div className="box-tools">
								<button
									type="button"
									className="btn btn-box-tool"
									name="personaldetails"
									onClick={e => onSwitchScreen(e)}
								>
									<i className="fa fa-user"> </i> Personal Details
								</button>
							</div>
						</div>

						
						<PersonalDetails
							user_account={user_account_state.user_account}
						/>
					</div>
				</Fragment>
			);
		}}
		</UserAccountContext.Consumer>
	);
}
