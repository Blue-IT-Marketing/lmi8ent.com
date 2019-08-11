import React, { Fragment,useReducer } from 'react';

function AccountDetails(){

  function onUpdateAccountDetails (e) {
    e.preventDefault();
    console.log('Updating Account Details');
  }

  return(
    <Fragment>
      <div className='box-footer'>
        <div className='box box-header'>
            <h3 className='box-title'> <i className='fa fa-user-md'> </i> Account Details</h3>
        </div>
          <form className='form-horizontal' onSubmit={e => onUpdateAccountDetails(e)}>
            <div className='form-group'>
                <input type='email' className='form-control' name='email' placeholder='Username'/>
            </div>
            <div className='form-group'>
              <input type='password' className='form-control' name='password' placeholder='password' />
            </div>
            <div className='form-group'>
              <button 
                type='submit'
                className='btn btn-warning btn-lg' 
                name='update' 
                onClick={e => onUpdateAccountDetails(e)}
                ><strong> <i className='fa fa-user-plus'> </i> Update </strong></button>
            </div>
          </form>
      </div>
    </Fragment>
  )
}


function PersonalDetails () {
  return(
    <Fragment>
      <div className='box-footer'>
        <div className='box box-header'>
          <h3 className='box-title'> <i className='fa fa-user'> </i> Personal Details</h3>
        </div>

      <form className='form-horizontal'>
        <div className='form-group'>
          
          <input type='text' className='form-control' name='names' placeholder='Names' />
        </div>

        <div className='form-group'>
          
          <input type='text' className='form-control' name='surname' placeholder='Surname' />
        </div>

        <div className='form-group'>
          
          <input type='text' className='form-control' name='cell' placeholder='Cell' />
        </div>

        <div className='form-group'>
          
          <input type='email' className='form-control' name='email' placeholder='Email' />
        </div>

        <div className='form-group'>
          <button 
              type='submit' 
              className='btn btn-warning btn-lg' 
              name='update'>
              <strong> <i className='fa fa-user-plus'> </i> Update</strong>
              </button>
        </div>
      </form>
      </div>
    </Fragment>
  )
}

export default function Profile (){
  const [state, dispatch] = useReducer((state,action) =>{
    switch(action.type){
        case 'account-details' :
          return {
            ...state,
            load_profile_cmp : 'account-details'
          }
        case 'personal-details':
          return{
            ...state,
            load_profile_cmp:'personal-details'
          }

        default: return state;
    }
  },{load_profile_cmp:'account-details'})


  return (
      <Fragment>
          <div className='box box-body'>
                <div className='box box-header'>
                    <h3 className='box-title'><strong> <i className='fa fa-user-secret'> </i> User Profile </strong></h3>

                  <div className='box-tools'>
                      <button 
                        type='button'
                        className='btn btn-box-tool'
                        name='accountDetails'
                        onClick={e => dispatch({type:'account-details'})}
                      >
                      <strong> <i className='fa fa-user-md'> </i> Account Details </strong>
                      </button>

                      <button
                        type='button'
                        className='btn btn-box-tool'
                        name='personalDetails'
                        onClick={e => dispatch({type:'personal-details'})}
                      ><strong> <i className='fa fa-user'> </i> Personal Details</strong></button>
                  </div>

                </div>
                

                <div className='box-footer'>
                    {
                      state.load_profile_cmp === 'account-details' ? <AccountDetails /> : ''
                    }
                    {
                      state.load_profile_cmp === 'personal-details' ? <PersonalDetails /> : ''
                    }
                </div>

          </div>

      </Fragment>
  )
}
