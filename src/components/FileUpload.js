import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import { Link } from "react-router-dom";

const FileUpload = ({ contract, account, provider }) => {

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No document selected");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `37d80e31ba022f557765`,
            pinata_secret_api_key: `706bb4bdb8ae7178d47579260dff11484ba5e3574a047a34ec279306bfef8e98`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        contract.add(account,ImgHash);
        alert("Successfully document Uploaded to E-sanchyan");
        setFileName("No document selected");
        setFile(null);
      } catch (e) {
        alert("Unable to upload document to E-sanchyan");
      }
    }
    alert("Successfully document Uploaded");
    setFileName("No document selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>

      <div class="documents-container1">
          <div class="documents-container2">
            <span class="documents-text">Upload Document</span>
          </div>
          <div class="documents-container3">
            <div class="documents-container4">
              <div class="documents-feature-card">
                <h2 class="documents-text1">Document Type</h2>
                <select class="documents-select">
                  <option value="Option 1">Contract</option>
                  <option value="Option 2">Property</option>
                  <option value="Option 4">Lease Agreement</option>
                  <option value="Option 3">Will</option>
                  <option value="Option 5">Court Order</option>
                  <option value="Option 6">Power of Attorney</option>
                  <option value="Option 7">Divorce Decree</option>
                  <option value="Option 8">Criminal Complaint</option>
                </select>
                <svg viewBox="0 0 1024 1024" class="documents-icon">
                  <path
                    d="M832 960l192-512h-832l-192 512zM128 384l-128 576v-832h288l128 128h416v128z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="documents-feature-card1">
              <span class="documents-text2">
                <div id="drop-zone">
                 
                   <input
                   disabled={!account}
                   type="file"
                   id="file-upload"
                   name="data"
                   onChange={retrieveFile}
                   />
                    <span className="textArea"> {fileName}</span> 
                </div>

             
                
                
          
              </span>
              <svg viewBox="0 0 1024 1024" class="documents-icon02">
                <path
                  d="M342 640l170-170 170 170-60 62-68-68v176h-84v-176l-68 66zM768 854v-470h-214v-214h-298v684h512zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"
                ></path>
              </svg>
            </div>
          </div>
          <button type="submit" id="upload-button" className="upload" class="documents-button button" disabled={!file}>
          Upload File
        </button>
        </div>
        </form>

    </div>
    
  );

};
export default FileUpload;

// import { useState } from "react";
// import axios from "axios";
// import "./FileUpload.css";
// function FileUpload({ contract, provider, account }) {
//   // const [urlArr, setUrlArr] = useState([]);
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState("No image selected");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (file) {
//         try {
//           const formData = new FormData();
//           formData.append("file", file);

//           const resFile = await axios({
//             method: "post",
//             url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//             data: formData,
//             headers: {
//               pinata_api_key: `95f328a012f1634eab8b`,
//               pinata_secret_api_key: `8ea64e6b39c91631c66128a7c0e0dde35a6fbdf797a8393cc5ba8bf8d58e9b54`,
//               "Content-Type": "multipart/form-data",
//             },
//           });

//           const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
//           const signer = contract.connect(provider.getSigner());
//           signer.add(account, ImgHash);

//           //setUrlArr((prev) => [...prev, ImgHash]);

//           //Take a look at your Pinata Pinned section, you will see a new file added to you list.
//         } catch (error) {
//           alert("Error sending File to IPFS");
//           console.log(error);
//         }
//       }

//       alert("Successfully Uploaded");
//       setFileName("No image selected");
//       setFile(null); //to again disable the upload button after upload
//     } catch (error) {
//       console.log(error.message); //this mostly occurse when net is not working
//     }
//   };
//   const retrieveFile = (e) => {
//     const data = e.target.files[0];
//     console.log(data);

//     const reader = new window.FileReader();

//     reader.readAsArrayBuffer(data);
//     reader.onloadend = () => {
//       setFile(e.target.files[0]);
//     };
//     setFileName(e.target.files[0].name);
//     e.preventDefault();
//   };
//   return (
//     <div className="top">
//       <form className="form" onSubmit={handleSubmit}>
//         <label htmlFor="file-upload" className="choose">
//           {/*turn around for avoding choose file */}
//           Choose Image
//         </label>
//         <input
//           disabled={!account} //disabling button when metamask account is not connected
//           type="file"
//           id="file-upload"
//           name="data"
//           onChange={retrieveFile}
//         />
//         <span className="textArea">Image: {fileName}</span>
//         {/* choose file */}
//         <button type="submit" disabled={!file} className="upload">
//           Upload file
//       </form>
//     </div>
//   );
// }

// export default FileUpload;
