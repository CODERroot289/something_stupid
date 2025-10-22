import React, { useRef, useState } from "react";
import "./css/sale.css";
import { doc, setDoc,updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";


function Sale({ user,onClose }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    phone: "",
    category: "",
  });
  const [dragActive, setDragActive] = useState(false);

  const addImages = (files) => {
    const validFiles = Array.from(files);
    const newImages = validFiles.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleFileChange = (e) => addImages(e.target.files);
  const handleDragOver = (e) => { e.preventDefault(); setDragActive(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setDragActive(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length > 0) addImages(e.dataTransfer.files);
  };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  async function addProduct(userId, product) {
    const userRef = doc(db, "users", userId);
    try {
       await setDoc(
        userRef,
        {
          myproducts: arrayUnion(product),
        },
        { merge: true } // this creates the doc if it doesn’t exist
      );
      alert("✅ Product added!");
      navigate(0);
    } catch (err) {
      alert("❌ Error adding product:", err);
    }
  }
  const handleSubmit = async (e) => {

    e.preventDefault();
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => form.append(key, value));
    for (let i = 0; i < fileInputRef.current.files.length; i++) {
      form.append("images", fileInputRef.current.files[i]);
    }
    const res = await fetch("https://productdb.up.railway.app/upload", { method: "POST", body: form });
    const data = await res.json();
    alert("✅ Product uploaded to server!");
    console.log(user.uid)
    addProduct(user.uid,data.product.id);
    onClose()
  };

  return (
    <div className="sale-overlay">
      <div className="sale-container">
        <button type="button" className="sale-close-btn" onClick={onClose}>✕</button>

        <input type="file" multiple accept="image/*" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileChange} />

        <div
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`sale-upload-box ${dragActive ? "drag-active" : ""}`}
        >
          {images.length === 0
            ? dragActive ? "Drop images here" : "Click or drag images to upload"
            : images.map((src, i) => <img key={i} src={src} alt={`upload-${i}`} />)}
        </div>

        <div className="sale-details">
          <h2>Product Details</h2>

          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="sale-input" />

          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange} required className="sale-input">
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="vegetable">Vegetable</option>
            <option value="vehicles">Vehicles</option>
            <option value="fashion">Fashion</option>
            <option value="meat">Meat</option>
            <option value="drinks">Drinks</option>
            <option value="others">Others</option>
          </select>

          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required className="sale-input" />

          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="3" required className="sale-input sale-input-textarea" />

          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required className="sale-input" />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} pattern="[0-9]{10}" maxLength="10" required className="sale-input" />

          <button type="submit" className="sale-submit-btn" onClick={handleSubmit}>Submit Product</button>
        </div>
      </div>
    </div>
  );
}

export default Sale;
