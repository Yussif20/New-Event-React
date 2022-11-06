import { SponsorImage } from "./OurSponsorsItem-styles";

export default function OurSponsorsItem({ img, alt }) {
  return (
    <div>
      <SponsorImage src={img} alt={alt} width="70%" />
    </div>
  );
}
