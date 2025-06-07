
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
  googleMapsEmbedUrl: "https://www.google.com/maps/place/D-CURE+A+Multispeciality+Dental+Clinic+%7C+Best+dental+Clinic+in+Saguna+More,+Patna+%7C+Best+Root+Canal+Treatment+%7C+Top+Dentist/@25.6168654,85.0458557,17z/data=!3m1!4b1!4m16!1m9!3m8!1s0x67913eac02a54fed:0x4a13f80cb023450c!2sD-CURE+A+Multispeciality+Dental+Clinic+%7C+Best+dental+Clinic+in+Saguna+More,+Patna+%7C+Best+Root+Canal+Treatment+%7C+Top+Dentist!8m2!3d25.6168654!4d85.0484306!9m1!1b1!16s%2Fg%2F11vm0nl7mz!3m5!1s0x67913eac02a54fed:0x4a13f80cb023450c!8m2!3d25.6168654!4d85.0484306!16s%2Fg%2F11vm0nl7mz?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
};

