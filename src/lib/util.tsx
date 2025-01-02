// export const CurrentUrl = process.env.VERCEL_URL || "http://127.0.0.1:3000";
export const prodURL = import.meta.env.VERCEL_URL;
export const CurrentUrl =
import.meta.env.ENVIRONMENT === "development"
    ? "http://127.0.0.1:3000"
    : prodURL;

export const handleBgImage = (bgImage?: string) => {
  if (!bgImage) {
    return "bg-landingMobile sm:bg-landing";
  }
  switch (bgImage) {
    case "landing":
      return "bg-landingMobile sm:bg-landing";
    case "staff":
      return "bg-staffLandingMobile sm:bg-staffLanding md:h-[50vh]";
  }
};

export const sectionAOS = () => {
  const sections = document.querySelectorAll('section');
  const divSections = document.querySelectorAll('div.section');
  if (sections.length > 0) { 
    sections.forEach((section, index) => {
      if (index != 0) {
          section.setAttribute('data-aos', 'fade-up');
          section.setAttribute('data-aos-easing', 'linear');
          section.setAttribute('data-aos-duration', '1500');
          }    
    });
  }

  if (divSections.length > 0) {
    divSections.forEach((section) => {
      section.setAttribute('data-aos', 'fade-up');
      section.setAttribute('data-aos-easing', 'linear');
      section.setAttribute('data-aos-duration', '1500');
     });
  }
}