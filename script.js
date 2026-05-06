function login(){
  let pass = document.getElementById('password').value;
  if(pass === "1234"){
    document.getElementById('loginScreen').style.display='none';
    document.getElementById('mainContent').style.display='block';
  } else {
    alert('Password salah');
  }
}

function showSection(id){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function logout(){
  location.reload();
}

function showPopup(id){
  document.getElementById(id).style.display='block';
}

function closeModal(id){
  document.getElementById(id).style.display='none';
}
