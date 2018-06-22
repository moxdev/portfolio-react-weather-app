const testData = [
  {
    name: "Joe",
    email: "joemail"
  },

  {
    name: "Bill",
    email: "billmail"
  },

  {
    name: "Dude",
    email: "dudemail"
  }
];

class FormContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        name: "",
        email: ""
      }
    };
  }

  handleChange(event) {
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;
    this.setState({
      formValues
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email } = this.state.formValues;
    this.props.addContact({ name, email });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.formValues["name"]}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <br />
        <label>
          {" "}
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.formValues["email"]}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

FormContact.PropTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.object)
};

FormContact.defaultProps = {
  data: testData
};

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      data: testData
    };
  }

  addContact = contact => {
    this.setState({ data: this.state.data.concat(contact) });
  };

  render() {
    const contacts = _.map(this.state.data, (value, index) => {
      return (
        <li key={index + value}>
          {" "}
          {value.email} {value.name}{" "}
        </li>
      );
    });
    return (
      <div>
        <h1>CONTACT PAGE</h1>
        <FormContact data={this.state.data} addContact={this.addContact} />
        <h3> Contacts</h3>
        <ul>{contacts} </ul>
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById("test"));
