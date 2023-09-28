const Button = ({ children, iconUrl }) => (
  <button className="flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white">
    {children}
    {iconUrl && (
      <img className="ml-2 h-5 w-5 rounded-full" src={iconUrl} alt="Icon" />
    )}
  </button>
);

export default Button;
