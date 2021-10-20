class Valid2 extends Valid {
    constructor(email, password, isValid, emaiError, passwordError) {
        super(email, password, isValid)
        this.emaiError = emaiError = '';
        this.passwordError = passwordError = '';
    }
    validate() {
        if (this.password.length < 6) {
            this.passwordError = 'min length 6';
            this.isValid = false;
        }
        else this.isValid = true;
        if (this.email == '') {
            this.emaiError = 'email empty';
            this.isValid = false;
        }
        return this.isValid;
    }
}