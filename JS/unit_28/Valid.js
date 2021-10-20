class Valid {
    constructor(email, password, isValid) {
        this.email = email;
        this.password = password;
        this.isValid = isValid = false;
    }
    validate() {
        if (this.password.length < 6) this.isValid = false;
        else this.isValid = true;
        return this.isValid;
    }

}
