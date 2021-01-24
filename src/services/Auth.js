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

    let getAccountIG = function () {
        // Or pull this from cookie/localStorage
        return sessionStorage.getItem('accountIg') ? localStorage.getItem('accountIg') : '';
    };

    let setAccountIG = function (accountIg) {
        // Also set this in cookie/localStorage
        sessionStorage.setItem('accountIg', accountIg);
    };

    let deleteAccountIG = function () {
        sessionStorage.removeItem('accountIg');
    }

    return {
        getName: getName,
        setName: setName,
        deleteName: deleteName,
        getAccountIG: getAccountIG,
        setAccountIG: setAccountIG,
        deleteAccountIG: deleteAccountIG,
    }

})();

export default UserData;