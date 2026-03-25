import { useState } from "react";
import styles from "./Settings.module.css";

const Settings = () => {
  const [form, setForm] = useState({
    name: "Patricia",
    email: "patricia@email.com",
    password: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Settings saved ✅");
  };

  return (
    <div className={styles.container}>
      <h2>Settings </h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* NAME */}
        <div className={styles.field}>
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
        </div>

        {/* EMAIL */}
        <div className={styles.field}>
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
        </div>

        {/* PASSWORD */}
        <div className={styles.field}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            onChange={handleChange}
          />
        </div>

        {/* NOTIFICATIONS */}
        <div className={styles.toggle}>
          <label>Enable Notifications</label>
          <input
            type="checkbox"
            name="notifications"
            checked={form.notifications}
            onChange={handleChange}
          />
        </div>

        {/* SAVE BUTTON */}
        <button className={styles.save}>Save Changes</button>
      </form>
    </div>
  );
};

export default Settings;
