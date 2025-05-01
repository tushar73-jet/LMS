import React, { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'Learner',
    email: 'learner@gmail.com',
    bio: 'Passionate learner at LearnX platform.',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP-KKtRJXm9qK7k2_PA1utxbxWdpzGIdulQ&s"
  });
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(form);
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-card">
        <div className="avatar-section">
          <img src={editMode ? form.avatar : user.avatar} alt="Avatar" className="avatar" />
          {editMode && (
            <label className="upload-btn">
              Change
              <input type="file" accept="image/*" onChange={handleAvatarUpload} hidden />
            </label>
          )}
        </div>

        <div className="info-section">
          <div className="field">
            <label>Name:</label>
            {editMode ? (
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            ) : (
              <span>{user.name}</span>
            )}
          </div>

          <div className="field">
            <label>Email:</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            ) : (
              <span>{user.email}</span>
            )}
          </div>

          <div className="field">
            <label>Bio:</label>
            {editMode ? (
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
              />
            ) : (
              <p>{user.bio}</p>
            )}
          </div>
        </div>

        <div className="actions">
          {editMode ? (
            <>
              <button className="btn save" onClick={handleSave}>Save</button>
              <button className="btn cancel" onClick={() => setEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button className="btn edit" onClick={() => setEditMode(true)}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
}
