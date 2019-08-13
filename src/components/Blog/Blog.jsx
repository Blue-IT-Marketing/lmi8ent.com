/* eslint-disable no-unused-vars */
import React, { Fragment, useState, useEffect } from 'react';
import Axios from 'axios';
import './Blog.css';
import {useForceUpdate} from '../../hooks/forceUpdate';
import {get_blog_articles} from './articles';
let blog_posts = '';


function BlogPost({ post_data }) {
	const [post, setPost] = useState({});

	let article = post_data;
	
	return (
		<Fragment>
			<div className="box box-body with-border">
				<div className="box box-header with-border">
					<a href={article.url} target="_blank">
						<h2 className="box-title">{article.title}</h2>
					</a>
				</div>
				<div className="polaroid">
					<img src={article.urlToImage} className="pola-image" />
					<div className="polatext">{article.description}</div>
					<div className="box box-footer with-border">
						<a href={article.url} target="_blank">
							<h3 className="box-title">
								{' '}
								{article.source.name} - {article.author}{' '}
							</h3>
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default function Blog() {
	const[category,setCategory] = useState('entertainment');
	const [posts, setPosts] = useState([]);
  const forceUpdate = useForceUpdate();

	useEffect(() => {
		async function fetchData() {
			let blog_posts = await get_blog_articles(category);			
			setPosts(blog_posts);
		}
    fetchData();    
    forceUpdate();
    console.log('Force update called');

	}, [category]);
  
	return (
		<Fragment>
			<div className="box box-body">
				<div className="box box-header">
					<h3 className="box-title">
						<strong>
							{' '}
							<i className="fa fa-file-text"> </i> Blog{' '}
						</strong>
					</h3>

					<div className="box-tools">
						<button
							type="button"
							className="btn btn-box-tool"
							name="pages"
							onClick={() => setCategory('entertainment')}
						>
							<i className="fa fa-file-text"> </i> Entertainment{' '}
						</button>

						<button
							type="button"
							className="btn btn-box-tool"
							name="posts"
							onClick={() => setCategory('sports')}
						>
							<i className="fa fa-file-text"> </i> Sports{' '}
						</button>
						<button
							type="button"
							className="btn btn-box-tool"
							name="categories"
							onClick={() => setCategory('business')}
						>
							{' '}
							<i className="fa fa-folder-open"> </i> Business{' '}
						</button>
					</div>
				</div>

				
					{posts.map((post, index) => {
						return <BlogPost post_data={post} key={index} />;
					})}
					
			</div>
		</Fragment>
	);
}
