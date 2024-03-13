function VideoInfo({ data }) {
    return (
      <div>
          <iframe
          width="900"
          height="500"
          src={data.embedUrl}
          title="Thinking in React"
        />
        <h1>{data.title}</h1>
        <p>{data.views} Views | Uploaded {data.createdAt}</p>
      </div>
    )
  }
  
  export default VideoInfo;