import React, {Fragment, Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <Fragment>
                <div className='box-body'>
                    <div className='box box-header'>
                        <h3 className='box-title'><i className='fa fa-search'> </i> Search </h3>    
                    </div>

                    <span>Search results ...</span>
                </div>
            </Fragment>                            
        )
    }
}
