import css from "./Loader.module.css";
import { MutatingDots } from "react-loader-spinner";

export default function Loader() {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#68c298"
      secondaryColor="#68c298"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={css.wrap}
    />
  );
}
