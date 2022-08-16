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

    setUserInfo(data) {
        this._name.textContent = data.editname;
        this._info.textContent = data.editstatus;
    }

}