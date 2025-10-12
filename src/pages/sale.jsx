import React, { useRef, useState } from "react";

function Sale() {
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

  // ✅ Convert FileList → Array of URLs
  const addImages = (files) => {
    const validFiles = Array.from(files);
    const newImages = validFiles.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleFileChange = (e) => addImages(e.target.files);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addImages(e.dataTransfer.files);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("location", formData.location);
    form.append("description", formData.description);
    form.append("price", formData.price);
    form.append("phone", formData.phone);
    form.append("category", formData.category);

    for (let i = 0; i < fileInputRef.current.files.length; i++) {
      form.append("images", fileInputRef.current.files[i]);
    }

    const res = await fetch("https://productdb.up.railway.app/upload", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    alert("Product uploaded to server!");
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "75vw",
        justifyContent: "center",
        background: "#1e1e1e",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        maxWidth: "900px",
        margin: "40px auto",
        alignItems: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        gap: "20px",
      }}
    >
      {/* Hidden file input */}
      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {/* Upload box */}
      <div
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          width: "320px",
          height: "260px",
          border: dragActive ? "2px dashed #00bfa6" : "2px dashed #666",
          borderRadius: "10px",
          background: dragActive ? "#2e2e2e" : "#2c2c2c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          overflowX: "auto",
          whiteSpace: "nowrap",
          padding: "10px",
          transition: "all 0.2s ease-in-out",
        }}
      >
        {images.length === 0 ? (
          <span>
            {dragActive ? "Drop images here" : "Click or drag images to upload"}
          </span>
        ) : (
          images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`upload-${index}`}
              style={{
                height: "100%",
                width: "auto",
                borderRadius: "8px",
                marginRight: "10px",
                objectFit: "cover",
              }}
            />
          ))
        )}
      </div>

      {/* Product details */}
      <div style={{ flex: 1, minWidth: "250px" }}>
        <h2 style={{ marginBottom: "10px" }}>Product Details</h2>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Category:</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select a category</option>
          <option value="electronics">Electronics</option>
          <option value="furniture">Furniture</option>
          <option value="vehicles">Vehicles</option>
          <option value="fashion">Fashion</option>
          <option value="real-estate">Real Estate</option>
          <option value="others">Others</option>
        </select>

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          required
          style={{ ...inputStyle, resize: "none" }}
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
          maxLength="10"
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            background: "#00bfa6",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Submit Product
        </button>
      </div>
    </form>
  );
}

const inputStyle = {
  width: "95%",
  padding: "8px",
  margin: "8px 0 15px",
  borderRadius: "6px",
  border: "1px solid #444",
  background: "#2c2c2c",
  color: "white",
};

export default Sale;
