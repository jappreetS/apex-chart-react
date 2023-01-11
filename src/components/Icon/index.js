import "./Icon.scss";

const Icon = ({ icon, style }) => {
  return (
    <div style={style} className="Icon">
      {icon}
    </div>
  );
};

export default Icon;
