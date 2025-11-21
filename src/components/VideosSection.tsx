const VideosSection = () => {
  const videos = [{
    id: "yGZYnDdjVo8",
    url: "https://www.youtube.com/embed/yGZYnDdjVo8",
    title: "Short - Fantoches",
    aspectRatio: "9/16"
  }, {
    id: "iMY0xzS7oMg",
    url: "https://www.youtube.com/embed/iMY0xzS7oMg",
    title: "Short - Fantoches",
    aspectRatio: "9/16"
  }, {
    id: "gA84Fq5FG-U",
    url: "https://www.youtube.com/embed/gA84Fq5FG-U",
    title: "Short - Performance",
    aspectRatio: "9/16"
  }];
  return <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-black via-primary/5 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,69,140,0.08),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Da Nossa Oficina
Para as Telas<span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">
              em Ação
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e veja a magia dos fantoches ganhando vida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {videos.map(video => <div key={video.id} className="group relative bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,69,140,0.3)]">
              <div className="relative w-full overflow-hidden" style={{
            aspectRatio: video.aspectRatio
          }}>
                <iframe src={video.url} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy" className="absolute inset-0 w-full h-full" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default VideosSection;