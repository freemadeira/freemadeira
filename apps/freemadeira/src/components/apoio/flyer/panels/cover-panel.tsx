import { useContent } from "../locale-context";

const coverBg = "/apoio/flyer/cover-bg.webp";
const logoVerticalCover = "/apoio/flyer/free-madeira-logo-vertical-cover.svg";

export function CoverPanel() {
  const { coverFootnote, coverHeadline, coverSub, merchantCount } =
    useContent();
  return (
    <div
      className="panel panel-cover"
      style={{ backgroundImage: `url(${coverBg})` }}
    >
      <img className="cover-logo" src={logoVerticalCover} alt="FREE Madeira" />
      <div className="cover-main">
        <div className="hero-number">{merchantCount}</div>
        <h1>{coverHeadline}</h1>
        <p className="cover-sub">{coverSub}</p>
      </div>
      <div className="cover-footnote">{coverFootnote}</div>
    </div>
  );
}
