export default function About() {
    return (
        <section className="bg-[#111] text-white py-60 px-8 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 justify-between items-start">
                <div className="w-full md:w-1/2">
                    <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
                        About<br />Media Forge
                    </h2>
                    <div className="w-12 h-1 bg-white mb-8"></div>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md font-sans">
                        We are a digital product studio that helps bring innovative ideas to life through strategic design and cutting-edge technology. Our focus is on crafting seamless experiences that resonate with users and drive meaningful impact.
                    </p>
                </div>

                {/* Placeholder for the team/studio image */}
                <div className="w-full md:w-1/2 aspect-video bg-gray-800 relative group overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-sans tracking-widest text-sm group-hover:scale-105 transition-transform duration-700">
                        <img
                            src="/Assets/images/about.png"
                            alt="about"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}