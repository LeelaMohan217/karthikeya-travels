import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Map,
  Calendar,
} from "lucide-react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    source: "",
    destination: "",
    travelDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const fields = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name",
      icon: <User className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      icon: <Mail className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "Enter your phone number",
      icon: <Phone className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Source",
      name: "source",
      type: "text",
      placeholder: "Starting point",
      icon: <MapPin className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Destination",
      name: "destination",
      type: "text",
      placeholder: "Destination point",
      icon: <Map className="w-4 h-4 text-gray-400" />,
    },
    {
      label: "Travel Date",
      name: "travelDate",
      type: "date",
      placeholder: "Choose a travel date",
      icon: <Calendar className="w-4 h-4 text-gray-400" />,
    },
  ];

  return (
    <section className="w-full py-16 px-6 lg:px-12">
      <div className="relative max-w-4xl mt-2 md:mt-20 mx-auto bg-white border border-orange-100 rounded-xl shadow-xl/30 p-4 md:p-8 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2 text-gray-800">Let's Connect</h2>
          <p className="text-gray-600">
            Fill out the form and our executive will reach out shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fields.map(({ label, name, type, placeholder, icon }) => (
            <div key={name}>
              <label className="block text-sm mb-1">{label}</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 focus-within:border-orange-500 focus-within:ring-0 focus-within:ring-orange-500 transition">
                {icon}
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  placeholder={placeholder}
                  className="w-full text-sm focus:outline-none bg-transparent"
                />
              </div>
            </div>
          ))}

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-4 px-5 py-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 font-medium cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormPage;
