import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="rounded-social-buttons">
                    <a className="social-button facebook" href="https://www.facebook.com/profile.php?id=100094541027160" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/in/dekhilomran/" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a className="social-button instagram" href="https://www.instagram.com/omraannnn/" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a className="social-button twitter" href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                </div>
      <div className="footer__copyright">
        <span>© NX.Trailers  </span>, All right reserved.
      </div>

      <div className="footer__developer">
        Dekhil Omran
      </div>
    </div>
  );
}

export default Footer;
