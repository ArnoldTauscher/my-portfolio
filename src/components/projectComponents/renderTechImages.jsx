export const renderTechImages = (tech) => {
    //console.log("Rendering tech images. Type of tech:", typeof tech); // Debugging-Ausgabe
    if (typeof tech === 'string') {
      //console.log("Tech is a string"); // Debugging-Ausgabe
      return <img src={tech} className="w-[30px] h-[30px] ml-3" alt="Tech" />;
    } else if (Array.isArray(tech)) {
      //console.log("Tech is an array:", tech); // Debugging-Ausgabe
      return tech.map((techItem, index) => (
        <img 
          key={index} 
          src={techItem} 
          className="w-[30px] h-[30px] ml-3" 
          alt={`Tech ${index + 1}`} 
        />
      ));
    }
    //console.log("Tech is neither a string nor an array"); // Debugging-Ausgabe
    return null;
  };