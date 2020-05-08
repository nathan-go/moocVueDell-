let defaultCity = '北京';
try {
    if (localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch (e) {
    console.error('localStorage is prohibited');
}

export default {
    city: defaultCity,
};
