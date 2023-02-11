import React, { useState } from "react";
import { motion } from "framer-motion";
import contact from "./../assets/contact.png";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs from "dayjs";

const ContactScreen = () => {
  const [formSubmit, setFormSubmit] = React.useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState(dayjs("2022-11-08T21:11:54"));
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = () => {
    if (
      name != "" &&
      email != "" &&
      dob != "" &&
      phone != "" &&
      description != ""
    ) {
      setFormSubmit(false);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleDobChange = (e) => {
    setDob(e);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <div className="grid grid-cols-12 bg-purple-200 h-screen md:p-16 p-6">
        {formSubmit ? (
          <>
            <motion.div
              className="md:col-span-6 col-span-12 max-h-[400px] mb-4 "
              initial={{ x: -150 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <img src={contact} className="h-full w-full" loading="lazy" />
            </motion.div>
            <div className="md:col-span-6 col-span-12 md:px-12 flex-1 text-center">
              <div className="font-bold">Contact Form</div>
              <form>
                <div className="text-white border-2 border-slate-400 rounded-2xl">
                  <div style={{ margin: "20px" }}>
                    <TextField
                      label="Name"
                      value={name}
                      onChange={handleNameChange}
                      required={true}
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div style={{ margin: "20px" }}>
                    <TextField
                      label="Email"
                      value={email}
                      onChange={handleEmailChange}
                      required={true}
                      id="outlined-basic"
                      variant="outlined"
                      type={"email"}
                      size="small"
                    />
                  </div>

                  <div style={{ margin: "20px" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DesktopDatePicker
                        label="Date of Birth"
                        inputFormat="MM/DD/YYYY"
                        value={dob}
                        onChange={handleDobChange}
                        renderInput={(params) => (
                          <TextField
                            size="small"
                            style={{ width: 224 }}
                            {...params}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                  <div style={{ margin: "20px" }}>
                    <TextField
                      label="Description"
                      value={description}
                      onChange={handleDescriptionChange}
                      required={true}
                      id="outlined-basic"
                      variant="outlined"
                      type={"text"}
                      size="small"
                    />
                  </div>
                  <div style={{ margin: "20px" }}>
                    <TextField
                      label="Phone Number"
                      value={phone}
                      onChange={handlePhoneChange}
                      required={true}
                      id="outlined-basic"
                      variant="outlined"
                      type="number"
                      size="small"
                    />
                  </div>
                  <div style={{ margin: "20px" }}>
                    <button
                      role={"submit"}
                      className="button_slide slide_down"
                      onClick={handleClick}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        ) : (
          <div className="col-span-12  ">
            Thank you for contacting us. We will get back to you soon.
          </div>
        )}
      </div>
    </>
  );
};

export default ContactScreen;
