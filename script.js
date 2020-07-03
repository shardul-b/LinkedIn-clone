window.onload=()=>{
	posts_creator();
}
const ids=(val)=>{
	let value=document.getElementById(val);
	return value;
};
const classes=(val)=>{
	let values=document.getElementsByClassName(val);
	return values;
};
const creator=(val)=>{
	let created=document.createElement(val);
	return created;
};
let posts={
	'linkedin-marketing':{
		'people-update':'<b>Kaushik Mishra</b>, <b>Ayush Jain</b> and 272 other connections follow <b>LinkedIn Marketing Solutions</b>',
		'profile':'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'profile-name':'LinkedIn Marketing Solutions',
		'profile-description':'4,259,248 followers',
		'time':'Promoted',
		'description':'Leverage your LinkedIn page to it\'s full potential.Boost engagement of a post with $50 in free LinkedIn ad credits' ,
		'image':'https://images.unsplash.com/photo-1593559720888-d519a3b67747?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'link-desc':'<b>B2B Advertising Promo | LinkedIn Marketing Solutions</b>',
		'link':'business.linkedin.com',
		'reactions':'18,266',
		'comments':'527 comments',
	},
	'john-doe':{
		'people-update':'<b>Alan Page</b> likes this',
		'profile':'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'profile-name':'John Doe',
		'profile-description':'Founder and CEO at John and co.',
		'time':'3d',
		'description':'Just Completed learning JavaScript..It was an awesome experience',
		'image':'https://images.unsplash.com/photo-1593559720888-d519a3b67747?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'link':'none',
		'reactions':'36',
		'comments':'19 comments',
	},
	'shardul-birje':{
		'people-update':'<b>Sahil</b> likes this',
		'profile':'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'profile-name':'Shardul Birje',
		'profile-description':'Founder and CEO ',
		'time':'12d',
		'description':'Just Completed learning JavaScript..It was an awesome experience',
		'image':'https://images.unsplash.com/photo-1593559720888-d519a3b67747?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'link':'none',
		'reactions':'10',
		'comments':'19 comments',
	}
};
function posts_creator(){
	let postsContainer=classes('post-container');
	// let length=Object.keys(posts).length;
	for(let i in posts){
		//postbox-post parent
		let post_box=creator('div'); 
		post_box.classList.add('post-box');
		postsContainer[0].appendChild(post_box);

		//connections activity div
		let activity=creator('div');
		activity.classList.add('activity','container');
		let activity_descriptions=creator('span');
		let arrow=creator('span');
		activity_descriptions.innerHTML=posts[i]['people-update'];
		activity.appendChild(activity_descriptions);
		activity.appendChild(arrow);
		post_box.appendChild(activity);

		//profile details
		let post_profile=creator('div');
		post_profile.classList.add('container','flexonly','profile-details');
		//profile image container
		let post_profile_image=creator('div');
		post_profile_image.classList.add('poster-container');
		//image
		let profile_img=creator('img');
		profile_img.classList.add('poster-img');
		profile_img.setAttribute('src',posts[i]['profile']);
		//details
		let details=creator('div');
		details.classList.add('details');
		//name
		let name=creator('span');
		name.classList.add('name');
		name.innerHTML=posts[i]['profile-name'];
		//about
		let about=creator('span');
		about.innerHTML=posts[i]['profile-description'];
		//time
		let time=creator('span');
		time.innerHTML=posts[i]['time'];

		details.appendChild(name);
		details.appendChild(about);
		details.appendChild(time);
		post_profile_image.appendChild(profile_img);
		post_profile.appendChild(post_profile_image);
		post_profile.appendChild(details);
		post_box.appendChild(post_profile);

		//post description box
		let descriptionBox=creator('div');
		descriptionBox.classList.add('post-description','container');
		//description
		let description=creator('span');
		description.classList.add('description');
		description.innerHTML=posts[i]['description'];

		descriptionBox.appendChild(description);
		post_box.appendChild(descriptionBox);

		//post image section
		let postImage=creator('div');
		postImage.classList.add('post-image-container');
		//image
		let postimg=creator('img');
		postimg.classList.add('post-img');
		postimg.setAttribute('src',posts[i]['image']);

		postImage.appendChild(postimg);
		post_box.appendChild(postImage);

		//link if any
		if(posts[i]['link']!=='none'){
			//Link box
			let linkBox=creator('div');
			linkBox.classList.add('linkBox');
			//container
			let container=creator('div');
			container.classList.add('container');
			//Link Description
			let linkdesc=creator('span');
			linkdesc.classList.add('link-desc');
			linkdesc.innerHTML=posts[i]['link-desc'];
			//link
			let link=creator('a');
			link.setAttribute('href',posts[i]['link']);
			link.innerHTML=posts[i]['link'];

			container.appendChild(linkdesc);
			container.appendChild(link);
			linkBox.appendChild(container);
			post_box.appendChild(linkBox);
		}
		//likes
		let likesinfo=creator('div');
		likesinfo.classList.add('likes-info','container','flex');
		//reactions
		let reactionsInfo=creator('div');
		reactionsInfo.classList.add('reactions-info');
		let reactions_icons=creator('span');
		let reactions_value=creator('span');
		reactions_value.innerHTML=posts[i]['reactions'];
		//comments span
		let commentsInfo=creator('span');
		commentsInfo.innerHTML=posts[i]['comments'];
		commentsInfo.classList.add('commentsInfo');

		reactionsInfo.appendChild(reactions_icons);
		reactionsInfo.appendChild(reactions_value);
		likesinfo.appendChild(reactionsInfo);
		likesinfo.appendChild(commentsInfo);
		post_box.appendChild(likesinfo);

		//icons container
		let icons_container=creator('div');
		icons_container.classList.add('icons-container','container','flex');
		//Like
		let likeButton=creator('span');
		likeButton.classList.add('fa','fa-thumbs-up');
		
		//Comment
		let commentButton=creator('span');
		commentButton.classList.add('material-icons');
		commentButton.innerHTML='comment';
		
		//Share
		let shareButton=creator('span');
		shareButton.classList.add('fa','fa-share-alt');
		
		//Send
		let sendButton=creator('span');
		sendButton.classList.add('material-icons');
		sendButton.innerHTML='near_me';
		

		icons_container.appendChild(likeButton);
		icons_container.appendChild(commentButton);
		icons_container.appendChild(shareButton);
		icons_container.appendChild(sendButton);
		post_box.appendChild(icons_container);

		//Icon text container
		let iconsText=creator('div');
		iconsText.classList.add('icons-text-container','container','flex');

		let likeText=creator('span');
		likeText.classList.add('like-text');
		likeText.innerHTML='Like';

		let commentText=creator('span');
		commentText.classList.add('comment-text');
		commentText.innerHTML='Comment';

		let shareText=creator('span');
		shareText.classList.add('share-text');
		shareText.innerHTML='Share';

		let sendText=creator('span');
		sendText.classList.add('send-text');
		sendText.innerHTML='Send';

		iconsText.appendChild(likeText);
		iconsText.appendChild(commentText);
		iconsText.appendChild(shareText);
		iconsText.appendChild(sendText);
		post_box.appendChild(iconsText);

	}
}


