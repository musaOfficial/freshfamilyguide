
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import classes from "./RichTextEditor.module.css"
import Image from 'next/image';
import { useRouter } from 'next/router';
const RichTextEditor = ({ onSubmit }) => {

    const [links] = useState([
        "Ernährung",
        "Schlaf",
        "Hygiene",
        "Unterhaltung für Babies",
        "Unterhaltung für Kinder",
    ]);

  const [step, setStep] = useState(0);  
  const [content, setContent] = useState('');
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState('');

    const router = useRouter();

  const handleChange = (value) => {
    setContent(value);
    console.log(value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("/api/createPost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                title: title,
                image: imagePreview,
                category: selectedCategory
            })
        })
        if(response.ok){
            const res = await response.json();
            router.replace("/")
            console.log(res);
        }
        else {
            console.error("Error, " , err);
        }
    }
    catch(err){
        throw new Error("POST FAILED..");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  };

  console.log(selectedCategory)


  // <button className={classes.button} onClick={handleSubmit}>Post Article</button>

  return (
    <div className={classes.container}>
      {
        step === 0 && <>
        <ReactQuill className={classes.quill} value={content} onChange={handleChange} />
        <button className={classes.button} onClick={() => setStep(d => d + 1)}>Weiter</button>
        </>
      }
      {
        step === 1 && <div className={classes.input_fields}>
            <label className={classes.label}>Titel</label>
            <input type="text" placeholder="Title" className={classes.input} onChange={(e) => setTitle(e.target.value)} />
            <label className={classes.label}>Kategorie</label>
            <select className={classes.select} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">Wähle eine Kategorie</option>
                {links.map((link, index) => (
                    <option key={index} value={link}>{link}</option>
                ))}
            </select>

            <label className={classes.label}>Image Preview:</label>
            {imagePreview && (
                <div>
                
                <Image src={imagePreview} alt="Preview" width={300} height={200} />
                </div>
            )}
            <input className={classes.btne} type="file" onChange={handleImageChange} />
            <button type='submit' className={classes.btn} onClick={handleSubmit}>Beitrag veröffentlichen</button>
        </div>
      }
    </div>
  );
};

export default RichTextEditor;
