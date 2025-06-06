const messages = [
    "Em có chắc honggg?",
    "Em có thiệc sự chắc honggg??",
    "Thiệc hỏooo...",
    "Hoi mò có đi mò...",
    "Em si nghĩ kĩ chưa...",
    "Em hong đồng ý là anh buồn ó...",
    "Siêu siêu buồn luôn ó...",
    "Hoi đựt gòi, haizzz...",
    "Vỡn thoi, bấm đồng ý đyyy!"
];

let messagesIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no_button');
    const yesButton = document.querySelector('.yes_button');
    noButton.textContent = messages[messagesIndex];
    messagesIndex = (messagesIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}