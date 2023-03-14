import React, { useRef, useState } from 'react';

const PageForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    console.log('ini username:');
    console.log(form.username);
    console.log('ini password:');
    console.log(form.password);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={form.username}
          name="username"
          type="text"
        />
        <input
          onChange={handleChange}
          value={form.password}
          name="password"
          type="password"
        />
      </form>
    </div>
  );
};

export default PageForm;
