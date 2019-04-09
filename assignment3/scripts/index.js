let users = [
  {
    name: 'Choose profile',
    avatar: 'images/default.png',
    background: 'images/backde.png'
  },
  {
    name: 'Student',
    avatar: "images/male.png",
    background: 'images/nerdphoto.jpg'
  },
  {
    name: 'Trainer',
    avatar: 'images/maleEmp.png',
    background: 'images/windows7.png'
  },
  {
    name: 'Head Master',
    avatar: 'images/HeadMaster.png',
    background: 'images/starwars.jpg'
  }
];

(function(d) {
  // elements
  let select = d.getElementById('username'),
      profile = d.getElementById('profile'),
      body = d.body;
  
  // create options and preload images
  for (let i = 0; i < users.length; i++) {
    let option = d.createElement('option');
    
    option.value = users[i].name;
    option.innerHTML = users[i].name;
    
    select.appendChild(option);
    
    // preload
    let image = new Image();
    image.src = users[i].avatar;
    image = new Image();
    image.src = users[i].background;
  }
  
  // event handler
  select.addEventListener('change', function() {
    let user = getUser(this.value);
    
    if (!user) return;
    
    profile.style.backgroundImage = 'url("' + user.avatar + '")';
    body.style.backgroundImage = 'url("' + user.background + '")';
  });
  
  // get user by name
  function getUser(name) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].name == name)
        return users[i];
    }
      
    return false;
  }
})(document);



function btnLogin(id) {
  let e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}