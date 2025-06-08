
export const siteConfig = {
  clinicName: "D-CURE",
  brandLine: "A Multispeciality Dental Clinic",
  tagline: "Where Every Smile Gets Expert Attention",
  address: "Raghunath Path, R.P.S More, Patna, Bihar 801503",
  phone: "+91 8709595329",
  email: "drhv.indentistry@gmail.com",
  whatsappNumber: "+918709595329", // International format without + or spaces
  get whatsappLink() {
    return `https://api.whatsapp.com/send/?phone=918709595329&text=Hello%2C+Dr.+Harsh%21%0A%0AI+hope+you%27re+doing+well.+I%E2%80%99m+interested+in+booking+an+appointment+and+would+love+to+know+your+availability.+Please+let+me+know+the+best+time+to+visit.+&type=phone_number&app_absent=0`;
  },
  instagramLink: "https://www.instagram.com/d_cure_dentalclinic/",
  clinicHours: [
    { days: "Monday - Friday", time: "11:00 AM - 8:00 PM" },
    { days: "Saturday - Sunday", time: "10:00 AM - 9:00 PM" },
  ],
  emergencyContact: "+91 8709595329",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11304.691315852262!2d85.04604033455216!3d25.617819992654663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67913eac02a54fed%3A0x4a13f80cb023450c!2sD-CURE%20A%20Multispeciality%20Dental%20Clinic%20%7C%20Best%20dental%20Clinic%20in%20Saguna%20More%2C%20Patna%20%7C%20Best%20Root%20Canal%20Treatment%20%7C%20Top%20Dentist!5e0!3m2!1sen!2sin!4v1749321191770!5m2!1sen!2sin",
  logoUrl:"https://res.cloudinary.com/dbbox9eum/image/upload/v1749323276/oujeqkeafzh4doyiyfs2.png"
};

