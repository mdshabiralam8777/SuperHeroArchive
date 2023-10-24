import SVGIcons from './assets/icons/SVGIcons.js';

function IconComponent({ iconName }) {
  const iconToRender = SVGIcons[iconName]; // Get the desired icon based on the prop

  return (
    <div>
      {iconToRender}
      {/* Render the desired SVG icon based on the prop */}
      {/* Other content */}
    </div>
  );
}

export default IconComponent;
