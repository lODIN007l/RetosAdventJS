export default function contarOvejas(ovejas) {
  
    const {name,color}=ovejas;
  
    return ovejas.filter(({ name, color }) => {
          const lowerCaseName = name.toLowerCase();
          return color === "rojo" && lowerCaseName.includes('n') && lowerCaseName.includes('a');
      });
    
  }
  