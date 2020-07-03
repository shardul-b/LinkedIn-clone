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
		'image':'',
		'link':'none',
		'reactions':36,
		'comments':19,
	},
	'john-doe':{
		'people-update':'<b>Alan Page</b> likes this',
		'profile':'https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
		'profile-name':'John Doe',
		'profile-description':'Founder and CEO at John and co.',
		'time':'3d',
		'description':'Just Completed learning JavaScript..It was an awesome experience',
		'image':'',
		'link':'none',
		'reactions':36,
		'comments':19,
	},
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
	}
}


