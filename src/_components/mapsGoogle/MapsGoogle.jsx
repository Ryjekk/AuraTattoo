const MapsGoogle = () => {
  return (
    <a href="https://maps.app.goo.gl/J9vr6UWEPDW1nowo7" target="_blank">
      <div className="map-wrapper">
        <div className="iframe-overlay"></div>
        <iframe
          title="Google Maps"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6959.478437102919!2d-21.8966567!3d64.1461295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6185b5f2e1897693!2sAura%20Reykjavik!5e0!3m2!1sen!2sse!4v1605192808589!5m2!1sen!2sse"
        ></iframe>
      </div>
    </a>
  );
};

export default MapsGoogle;
