import { navbar } from "./componands/navbar.js";
console.log('navbar:', navbar)
let navbarData = document.getElementById('mainContainer');
navbarData.innerHTML = navbar();

document.querySelector('#create_btn').disabled = true;
let btn = document.getElementById('create_btn');
btn.addEventListener('click', () => {
    // submitting a post to server
    createPost();
    console.log("hello")
})


// add event handler on select file input 
let takeImage = document.getElementById('image');
takeImage.onchange = () => {
    handleImage()
    
}

let imagURL;

const handleImage = async () => {

    // 1. accept the file (image)
    let takeImagePath = document.getElementById('image')
    console.log('takeImagePath:', takeImagePath)
    let actual_img = takeImagePath.files[0];
    console.log('actual_img:', actual_img)


    // 2. access the image data 
    let form = new FormData()

    // 3. imgbb is asking to send data in formdata object 
    form.append('image', actual_img);

    // 4. lets make the post request 
    let myResouse = await fetch(`http://api.imgbb.com/1/upload?key=a4c20ca37e88bda1aa0b740bdac6a343`, {
        method: "POST",
        body: form,
    });

    let data = await myResouse.json();
    console.log('data:', data)
    imagURL = data.data.display_url;
    document.querySelector('#create_btn').disabled = false;

}

const createPost = async () => {

    // 1. grab all data from create.html
    let id = document.getElementById('id').value;
    let caption = document.getElementById('caption').value;


    // 2. create and object 
    let send_this_data = {
        id,
        caption,
        imagURL,
    };
    console.log('send_this_data:', send_this_data)

    const myResouse = await fetch(`http://localhost:3000/posts`, {
        method: "POST",
        body: JSON.stringify(send_this_data),
        headers: {
            "Content-Type": "application/json"
        },
    });
    let data = await myResouse.json()
    // console.log('data:', data)
  

}


// Deleting the post from server 
const deleteEvent = document.getElementById('delete_btn');
deleteEvent.addEventListener('click', () => {
    deletePost();
})
const deletePost = async () => {
    // How do we tell to server that which post to delete 

    let delete_id = document.getElementById('delete_id').value;

    let myResouse = await fetch(`http://localhost:3000/posts/${delete_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await myResouse.json();
    console.log('data:', data)
}


// Update the caption of the post 
const updateEvent = document.getElementById('update_btn');
updateEvent.addEventListener('click', () => {
    updatePost();
    console.log("hello")
})

const updatePost = async () => {
    try {
        let update_id = document.getElementById('update_id').value;
        let update_caption = document.getElementById('update_caption').value;

        let send_this_data = {
            caption: update_caption,
        }

        let myResouse = await fetch(`http://localhost:3000/posts/${update_id}`,{
            method: "PATCH",
            body: JSON.stringify(send_this_data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await myResouse.json();
        console.log('data:', data)
    }
    catch (err) {
        console.log('err:', err)

    }
}