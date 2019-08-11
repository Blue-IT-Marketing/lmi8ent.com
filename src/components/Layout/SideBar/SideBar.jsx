import React, { Fragment,Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from '../MenuItems/MenuItems';
import { routes } from '../../../constants';


export default class SideBar extends Component {
  onSearch = e => {
    e.preventDefault();
    console.log('Searching site...');
    // Remember to clear search field    
    // go to the backend and perform search
    // redirect to search component and return result    
  }

  render() {
    return (
      <Fragment>
        <aside className="main-sidebar">
          <section className="sidebar">
            <div className="user-panel">
              <div className="pull-left image">
                <img src="/static/dist/img/sms.jpeg" id="strSideUserImageID" className="img-circle" alt="Big-Feather" />
              </div>
              <div className="pull-left info">
                <p id="strSideUserNameID"><Link to={routes.login_page}>Please Login</Link></p>
              </div>
            </div>

            <form onSubmit={e => this.onSearch(e)} method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                </span>
              </div>
            </form>

            <ul className="sidebar-menu">
              <MenuItems />
            </ul>
          </section>
        </aside>
      </Fragment>
    )
  }
}


