import React, { useState } from 'react';
import '../style.scss'; // Nhập tệp CSS của bạn

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    for (const key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await fetch('URL_TO_YOUR_API', {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (response.ok) {
        alert('Đơn ứng tuyển của bạn đã được gửi thành công!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null,
          coverLetter: '',
        });
      } else {
        alert('Đã có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Lỗi khi gửi form:', error);
      alert('Đã có lỗi xảy ra. Vui lòng thử lại.');
    }
  };

  return (
    <div className="application-form">
      <h2>Đơn Ứng Tuyển</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Tel:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>CV:</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Cover letter:</label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            className="form-control"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
