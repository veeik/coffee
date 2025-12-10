import { firebaseConfig } from './config.js';

// инициализация Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// генерация ID
const userId = 'user_' + Date.now();
const userRef = db.ref('users/' + userId);

// пользователь онлайн
userRef.set(true);
userRef.onDisconnect().remove();

// слушаем количество
db.ref('users').on('value', (snapshot) => {
    const count = snapshot.numChildren();
    document.getElementById('counter').textContent = count;
});