let result = (function () {

    class Textbox {
        constructor(selector, regex) {
            this._elements = $(selector);
            this._invalidSymbols = regex;
            this.value = $(this._elements[0]).val();
            this.onInput();
        }

        get elements() {
            return this._elements
        }

        get value() {
            return this._value;
        }

        set value(value) {
            this._value = value;
            for (let element of this.elements) {
                $(element).val(value);
            }
        }

        onInput() {
            this.elements.on('input', (event) => {
                let text = $(event.target).val();
                this.value = text;
            });
        }

        isValid() {
            return !this._invalidSymbols.test(this._value);
        }
    }

    class Form {
        constructor() {
            this._element = $("<div>").addClass("form");
            this.textboxes = arguments;
            this.appendAll(this.textboxes);
        }

        get textboxes() {
            return this._textboxes
        }

        set textboxes(args) {
            for (let arg of args) {
                if (!arg instanceof Textbox) {
                    throw new Error("object is not a textboxt")
                }
            }
            this._textboxes = args;

        }

        appendAll(textboxes) {
            console.log(textboxes)
            for (let textbox of textboxes) {
                console.log(textbox)
                for (let al of textbox._elements) {
                    $(al).appendTo(this._element)
                }
            }
        }
        attach(selector){
            $(selector).append(this._element);
        }
        submit(){
            let allValid = true;
            for (let textbox of this.textboxes) {
                if(textbox.isValid()){
                    for (let obj of textbox._elements) {
                        $(obj).css('border','2px solid green')
                    }
                }else{
                    for (let obj of textbox._elements) {
                        $(obj).css('border','2px solid red')
                        allValid = false;
                    }
                }
            }
            return allValid;
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username", /[^a-zA-Z0-9]/);
let password = new Textbox("#password", /[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username, password);
form.attach("#root");
