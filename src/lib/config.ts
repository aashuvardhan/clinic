
export const siteConfig = {
  clinicName: "D-Cure Multispecialty Dental Clinic",
  tagline: "Redefining Dental Wellness.",
  address: "123 Dental Street, Smileville, CA 90210",
  phone: "+1 (555) 123-4567",
  email: "contact@dcure.com",
  whatsappNumber: "15551234567", // International format without + or spaces
  get whatsappLink() {
    return `https://wa.me/${this.whatsappNumber}?text=Hello%20D-Cure!%20I'd%20like%20to%20know%20more%20about%20your%20services.`;
  },
  instagramLink: "https://instagram.com/dcuredental",
  clinicHours: [
    { days: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { days: "Saturday", time: "10:00 AM - 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  emergencyContact: "+1 (555) 765-4321",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.819561314769!3d-6.194741395514938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2c6e17ca168000!2sCentral%20Park!5e0!3m2!1sen!2sid!4v1617700200000!5m2!1sen!2sid"
};
