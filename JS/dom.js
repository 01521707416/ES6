document.getElementById('apply_bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = '#abed5d';
    }
})

document.getElementById('center_third').addEventListener('click', function () {
    const third = document.getElementById('third_friend');
    third.style.textAlign = 'center';
})

document.getElementById('add_friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class = 'friend-name'> New Friend </h3>
    <p> New Friend added! </p>
    `
    friendContainer.appendChild(friend);
})