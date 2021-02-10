import React from "react";

const Footer = () => {
  return (
    <div style={{ display: "block", padding: "1rem" }}>
      <div
        style={{
          background: "rgba(0,0,0,0.1)",
          padding: "1rem",
          position: "fixed",
          bottom: 0,

          width: "100%",
        }}
      >
        <footer>
          <a
            href="http://papachristou.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            N. ΠΑΠΑΧΡΗΣΤΟΥ Α.Ε
            <img
              src="http://papachristou.com.gr/simages/top_url.jpg"
              alt="Vercel Logo"
            />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
