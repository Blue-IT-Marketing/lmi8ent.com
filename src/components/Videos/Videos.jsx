import React, { Fragment, useReducer } from "react";
 



function Artists(){
    return(
        <Fragment>
            <div className='box-footer'>
                <div className='box box-header'>
                    <h3 className='box-title'><strong> <i className='fa fa-user-md'> </i> Artists </strong></h3>
                </div>


            </div>
        </Fragment>
    )
}


function MusicVideos(){
    return(
        <Fragment>
            <div className='box-footer'>
                <div className='box box-header'>
                    <h3 className='box-title'><strog> <i  className='fa fa-youtube-play'> </i> Music Videos </strog></h3>
                </div>


            </div>
        </Fragment>
    )

}

export default function Videos() {
    const [state, dispatch] = useReducer((state,action) => {
        switch(action.type){
            case 'artists': 
                return{
                    ...state,
                    load_videos_cmp : 'artists'
                }
            case 'videos':
                return{
                    ...state,
                    load_videos_cmp: 'videos'
                }
            default: return state
            
        }
    }, {load_videos_cmp:'artists'})

    return (
        <Fragment>
            <div className='box box-body'>
                <div className='box box-header'>
                    <h3 className='box-title'><strong> <i className='fa fa-youtube'> </i> Videos </strong></h3>
                    <div className='box-tools'>
                        <button className='btn btn-box-tool' onClick={e => dispatch({ type: 'artists' })}> <i className='fa fa-user-md'> </i> Artists</button>
                        <button className='btn btn-box-tool' onClick={e => dispatch({ type: 'videos' })}> <i className='fa fa-folder-o'> </i> Videos</button>

                    </div>

                </div>


                {
                    state.load_videos_cmp === 'artists' ? <Artists /> : ''
                }

                {
                    state.load_videos_cmp === 'videos' ? <MusicVideos /> : ''
                }



            </div>
        </Fragment>            
    )
}
