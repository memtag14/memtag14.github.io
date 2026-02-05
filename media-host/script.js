const API = "https://media-host-backend.onrender.com";

async function uploadImage() {
  const file = document.getElementById("image").files[0];
  if (!file) return alert("Выбери файл");

  const form = new FormData();
  form.append("file", file);

  const res = await fetch(API + "/upload/image", {
    method: "POST",
    body: form
  });

  const data = await res.json();
  document.getElementById("imageResult").innerHTML =
    `<a href="${API}${data.url}" target="_blank">${API}${data.url}</a>`;
}

async function uploadMusic() {
  const file = document.getElementById("music").files[0];
  if (!file) return alert("Выбери файл");

  const form = new FormData();
  form.append("file", file);

  const res = await fetch(API + "/upload/music", {
    method: "POST",
    body: form
  });

  const data = await res.json();
  document.getElementById("musicResult").innerHTML =
    `<a href="${API}${data.url}" target="_blank">${API}${data.url}</a>`;
}
