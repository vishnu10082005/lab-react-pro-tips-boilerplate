import React, { useState } from 'react';
import '../App.css';

export default function Form() {
  const [formsubmit, setFormsubmit] = useState(false);
  const [formerr, setError] = useState({});
  const [formdata, setFormdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const Submit = e => {
    e.preventDefault();
    console.log(formdata);
    const errors = validData(formdata);
    setError(errors);
    const errKey = Object.keys(errors);

    if (errKey.length === 0) {
      setFormsubmit(true);
    } else {
      setFormsubmit(false);
    }
  };

  const validData = data => {
    let error = {};

    if (data.firstName.trim() === '') {
      error.firstName = 'Please enter the first name';
    }
    if (data.lastName.trim() === '') {
      error.lastName = 'Please enter the last name';
    }
    if (!/^\d{10}$/.test(data.phone.trim())) {
      error.phone = 'Please enter a valid 10-digit phone number';
    }
    if (data.email.trim() === '') {
      error.email = 'Please enter the email data';
    }

    return error;
  };

  return (
    <div className='form-container'>
      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={Submit}>
          {formsubmit && (
            <div className='success'>
              <p>Registration Successful</p>
            </div>
          )}

          <label style={{ color: 'black' }}>First Name : </label>
          <input type='text' name='firstName' onChange={handleInput} />
          {formerr.firstName && <p className='err'>{formerr.firstName}</p>}

          <label style={{ color: 'black' }}>Last Name : </label>
          <input type='text' name='lastName' onChange={handleInput} />
          {formerr.lastName && <p className='err'>{formerr.lastName}</p>}

          <label style={{ color: 'black' }}>Email : </label>
          <input type='email' name='email' onChange={handleInput} />
          {formerr.email && <p className='err'>{formerr.email}</p>}

          <label style={{ color: 'black' }}>Phone : </label>
          <input type='text' name='phone' onChange={handleInput} />
          {formerr.phone && <p className='err'>{formerr.phone}</p>}

          <input type='submit' value={'Register'} />
        </form>
      </fieldset>
    </div>
  );
}
