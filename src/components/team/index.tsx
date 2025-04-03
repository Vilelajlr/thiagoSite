interface TeamProps {
    color?: string;
    fontSize?: string;
    mdFontSize?: string;
    opacity?: string;
    top?: string;
    rotate?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: string;

  }
  
  export default function Team({
    color,
    fontSize,
    mdFontSize,
    opacity,
    top,
    rotate,
    stroke,
    strokeWidth,

    
  }: TeamProps) {
    return (
      <h1
        className={`absolute whitespace-nowrap font-bold fonteNome
          ${color ? color : ""} 
          ${fontSize ? fontSize : ""} 
          ${mdFontSize ? mdFontSize : ""} 
          ${opacity ? opacity : ""} 
          ${top ? top : ""} 
          ${rotate ? rotate : ""}
          ${stroke ? stroke : ""}
          ${strokeWidth ? strokeWidth : ""}

          `}
      >
        TEAM VILELA
      </h1>
    );
  }
  