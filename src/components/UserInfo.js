export class UserInfo {
    constructor({userProfileName, userProfileStatus}) {
        this._name = document.querySelector(userProfileName);
        this._info = document.querySelector(userProfileStatus);
    }

    getUserInfo() {
        this._userData = {
            userName: this._name.textContent,
            userInfo: this._info.textContent,
        }
        return this._userData;
    }

    setUserInfo(username, userinfo) {
        this._name.textContent = username.value;
        this._info.textContent = userinfo.value;
    }

}