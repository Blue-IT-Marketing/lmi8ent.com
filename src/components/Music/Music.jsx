import React, { Fragment,useReducer } from 'react';




// The Music Component must contain a list of music by Artists/ Albums / and also song lists
// Artists must have their own home page/ where their songs can be downloaded and an amount donated to them
// Songs/Artists and Albums can be shared via social media

function Artists(){
    return(
        <Fragment>
            <div className='box-footer'>
                <div className='box box-header'>
                    <h3 className='box-title'><strong> <i className='fa fa-user-md'> </i> Artists  </strong></h3>
                </div>


            </div>
        </Fragment>
    )
}


function Albums(){
    return(
        <Fragment>
            <div className='box-footer'>
                <div className='box box-header'>
                    <h3 className='box-title'><strong> <i className='fa fa-folder-o'> </i> Albums </strong></h3>
                </div>


            </div>
        </Fragment>
    )
}

function Songs(){
    return(
        <Fragment>
            <div className='box-footer'>
                <div className='box box-header'>
                    <h3 className='box-title'><strong> <i className='fa fa-music'> </i> Songs(Mp3) </strong></h3>
                </div>


            </div>
        </Fragment>
    )
}



export default function Music() {

    const [loader, dispatch] = useReducer((state,action) => {
        switch(action.type) {
            case 'artists':
                return {
                    ...state,
                    load_music_cmp:'artists'
                }
            case 'albums':
                return{
                    ...state,
                    load_music_cmp:'albums'
                }

            case 'songs':
                return{
                    ...state,
                    load_music_cmp:'songs'
                }

            default: return state
        }
    }, { load_music_cmp:'artists'})


    return (
        <Fragment>
            <div className='box box-body'>
                <div className='box box-header'>
                    <h3 className='box-title'><strong> <i className='fa fa-soundcloud'> </i> Music </strong></h3>
                    <div className='box-tools'>
                        <button className='btn btn-box-tool' onClick={e => dispatch({type:'artists'})}> <i className='fa fa-user-md'> </i> Artists</button>
                        <button className='btn btn-box-tool' onClick={e =>  dispatch({ type: 'albums' })}> <i className='fa fa-folder-o'> </i> Albums</button>
                        <button className='btn btn-box-tool' onClick={e => dispatch({ type: 'songs' })}> <i className='fa fa-music'> </i> Songs(Mp3)</button>
                    </div>

                </div>

                {
                    loader.load_music_cmp === 'artists' ? <Artists /> : ''
                }
                {
                    loader.load_music_cmp === 'albums' ? <Albums /> : ''
                }
                {
                    loader.load_music_cmp === 'songs' ? <Songs /> : ''
                }


            </div>


        </Fragment>                    
    )
}
