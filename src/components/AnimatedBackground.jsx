const AnimatedBackground = () => {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
  
        <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />
  
        <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>
    );
  };
  
  export default AnimatedBackground;