"use client"

import Nav from "@/t/navbar/navbar";
import { useState } from "react";


export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [userFiles, setUserFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);

    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const addUserFiles = (files) => {
    const fileNames = [];
    const filePreviews = [];

    for (let i = 0; i < files.length; i++) {
      fileNames.push(files[i].name);

      if (files[i].type.includes("application/pdf")) {
        const reader = new FileReader();
        reader.onload = (event) => {
          filePreviews.push(event.target.result);
        };
        reader.readAsDataURL(files[i]);
      } else {
        filePreviews.push(null);
      }
    }

    setUserFiles([...userFiles, { names: fileNames, previews: filePreviews }]);
  };

  const handleAddFile = (event) => {
    const files = event.target.files;
    addUserFiles(files);
  };

  return (
    <>
      <Nav />
      <div className="hero flex flex-col gap-8 mt-16">
        <h2 className="font-bold leading-8 text-4xl text-center">Document Management Tool</h2>
        <p>Manage and convert your documents to any format</p>

        <input
          type="file"
          name="documents"
          accept=".pdf"
          multiple
          id=""
          onChange={handleFileChange}
          className="file-input file-input-bordered"
        />
      </div>

      <div className="flex flex-col gap-6 mx-12 items-center justify-center my-12">

        {selectedFiles && (selectedFiles.map((file, index) => (
          <div key={index}>
            <p className="my-3 font-semibold text-center underline">{file.name}</p>
            <iframe className="w-[55rem] h-[60vh]" allowFullScreen={true} src={previewUrls[index]} alt="Preview" />
          </div>
        )))}
      </div>
    </>
  );
}