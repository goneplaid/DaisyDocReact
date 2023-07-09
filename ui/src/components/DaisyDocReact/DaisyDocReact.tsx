import React from "react";

interface DaisyDocReactProps {
  size?: "small" | "medium" | "large" | "xlarge";
  hideLogos?: boolean;
  className?: string;
}

const DaisyDocReact: React.FC<DaisyDocReactProps> = ({
  size = "large",
  hideLogos = false,
  className,
}) => {
  const textSizes = {
    small: "text-sm",
    medium: "text-base",
    large: "text-3xl",
    xlarge: "text-5xl",
  };

  const imageSizes = {
    small: "w-4 h-4",
    medium: "w-6 h-6",
    large: "w-8 h-8",
    xlarge: "w-12 h-12",
  };

  const gapSizes = {
    small: "gap-1",
    medium: "gap-2",
    large: "gap-3",
    xlarge: "gap-4",
  };

  const textSizeClassName = textSizes[size];
  const imageSizeClassName = imageSizes[size];
  const gapClassName = gapSizes[size];

  return (
    <span className={`inline-flex items-center ${gapClassName} ${className}`}>
      {!hideLogos && (
        <img
          src="daisyui-logo.png"
          alt="daisyUI logo"
          className={imageSizeClassName}
        />
      )}
      <div className={`flex font-bold ${textSizeClassName}`}>
        <span className="text-neutral-dark">daisy</span>
        <span className="text-daisy-green">Doc</span>
        <span className="text-react-blue">React</span>
      </div>
      {!hideLogos && (
        <img
          src="react-logo.png"
          alt="React logo"
          className={imageSizeClassName}
        />
      )}
    </span>
  );
};

export default DaisyDocReact;
