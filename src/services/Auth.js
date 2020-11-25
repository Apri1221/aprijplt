const UserData = (function () {
    let getName = function () {
        // Or pull this from cookie/localStorage
        return sessionStorage.getItem('username') ? localStorage.getItem('username') : '';
    };

    let setName = function (name) {
        // Also set this in cookie/localStorage
        sessionStorage.setItem('username', name);
    };

    let deleteName = function () {
        sessionStorage.removeItem('username');
    }

    return {
        getName: getName,
        setName: setName,
        deleteName: deleteName
    }

})();

export default UserData;