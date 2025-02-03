import { useState } from "react";
import "./main.scss";
import axios from "axios";
import {
   Stack,
   TextField,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   Button,
   Snackbar,
   Alert,
   CircularProgress,
} from "@mui/material";

// 256x256, 512x512, or 1024x1024 pixels
const sizes = {
   small: "256x256",
   medium: "512x512",
   large: "1024x1024",
};

const Main = () => {
   const [prompt, setPrompt] = useState("");
   const [size, setSize] = useState(sizes.small);
   const [open, setOpen] = useState(false);
   const [img, setImg] = useState("");
   const [loading, setLoading] = useState(false);

   const clickHandler = async () => {
      try {
         if (prompt === "") {
            setOpen(true);  // Show Snackbar for empty prompt
            return;
         }
         setLoading(true);  // Start loading indicator
         console.log({ prompt, size });
         
         const url = "http://localhost:8200/generate"; // Your API endpoint
         const data = { prompt, size }; // Pass prompt and size in the request body

         // Make the API call to generate the image
         const response = await axios.post(url, data);
         const imgSrc = response.data.src; // Ensure this is correct based on your API response
         
         if (imgSrc) {
            setImg(imgSrc);  // Set the generated image source
         } else {
            setOpen(true);  // Show error if imgSrc is not received
         }
         setLoading(false);  // Stop loading indicator
      } catch (error) {
         setOpen(true);  // Show error Snackbar if API call fails
         setLoading(false);
      }
   };

   return (
      <div className="main">
         <Stack spacing={1} className="main-stack">
            <TextField
               label="Prompt"
               variant="outlined"
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)} // Handle prompt input
            />
            <FormControl fullWidth>
               <InputLabel>Size</InputLabel>
               <Select
                  value={size}
                  label="Size"
                  onChange={(e) => setSize(e.target.value)} // Handle size change
               >
                  <MenuItem value={sizes.small}>small</MenuItem>
                  <MenuItem value={sizes.medium}>medium</MenuItem>
                  <MenuItem value={sizes.large}>large</MenuItem>
               </Select>
               <Button
                  variant="contained"
                  onClick={clickHandler}
                  sx={{ mt: "1rem" }}
               >
                  Generate New Image
               </Button>
            </FormControl>
         </Stack>

         {loading && <CircularProgress color="success" sx={{ mt: "1rem" }} />}
         {img !== "" && <img src={img} alt="Generated Image" />}
         
         {/* Snackbar for error messages */}
         <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Error occurred"
         >
            <Alert severity="error">This is an error alert — check it out!</Alert>
         </Snackbar>
      </div>
   );
};

export default Main;
