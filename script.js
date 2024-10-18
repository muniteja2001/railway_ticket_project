const nameField = document.getElementById('name');
const fromField = document.getElementById('from');
const toField = document.getElementById('to');
const dateField = document.getElementById('date');

// Event Listeners for buttons
document.getElementById('btn1').addEventListener('click', function() {
    let formObject = new RailForm(nameField.value, fromField.value, toField.value, dateField.value);
    formObject.submit();
});

document.getElementById('btn2').addEventListener('click', function() {
    let formObject = new RailForm(nameField.value, fromField.value, toField.value, dateField.value);
    formObject.preview();
});

document.getElementById('btn3').addEventListener('click', function() {
    let formObject = new RailForm(nameField.value, fromField.value, toField.value, dateField.value);
    formObject.cancel();
});

// RailForm class definition
class RailForm {
    constructor(name, from, to, date) {
        this.name = name;
        this.from = from;
        this.to = to;
        this.date = date;
    }

    submit() {
        alert(`${this.name}, your details were successfully submitted for ${this.date} from ${this.from} to ${this.to}.`);
    }

    preview() {
        alert(`${this.name}, here are the details previewed: Date - ${this.date}, From - ${this.from}, To - ${this.to}.`);
    }

    cancel() {
        alert(`${this.name}, your form submission has been canceled.`);
        document.getElementById('trainForm').reset();  // Reset the form
    }
}