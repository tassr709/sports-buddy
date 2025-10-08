import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const form = document.getElementById('eventForm');
const eventsList = document.getElementById('eventsList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('eventName').value;
  const location = document.getElementById('eventLocation').value;
  const time = document.getElementById('eventTime').value;
  const category = document.getElementById('eventCategory').value;

  await addDoc(collection(db, "events"), {
    name, location, time, category
  });

  form.reset();
  loadEvents();
});

async function loadEvents() {
  eventsList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const div = document.createElement('div');
    div.textContent = ${data.name} - ${data.location} - ${data.time} - ${data.category};
    eventsList.appendChild(div);
  });
}

loadEvents();