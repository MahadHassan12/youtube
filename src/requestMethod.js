import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
// const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZmEyMzk2NjMzMWZkMmFhYTRmZTVmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NzY3OTE3NiwiZXhwIjoxNjc3OTM4Mzc2fQ.nzTTfXzfC4vbbSYfWufJjDibwuhTQoeQruuUlEXm-iA'
const TOKEN =   JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user).currentUser.accessToken

console.log(TOKEN)
export const publicRequest = axios.create({
    baseUrl: BASE_URL,
});
export const userRequest = axios.create({
    // baseUrl: BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});

