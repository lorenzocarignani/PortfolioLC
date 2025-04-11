const ProjectFilter = ({ selected, onSelect, categories }) => {
  return (
    <div className="w-full flex justify-center mt-10 px-2">
      <div className="flex flex-wrap justify-center text-center gap-3 sm:gap-4 md:gap-6 bg-gris w-full max-w-screen-md p-4 rounded-[5px]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelect(category)}
            className={`px-4 sm:px-5 md:px-6 py-2 rounded-[5px] bg-black transition duration-200 text-lg sm:text-xl md:text-2xl ${
              selected === category ? "text-white" : "text-mute"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
