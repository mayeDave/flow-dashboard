import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  size?: number;
  fullScreen?: boolean;
};

export default function Loader({
  size = 28,
  fullScreen = false,
}: Props) {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
        ${fullScreen ? "h-screen" : "py-10"}
      `}
    >
      <CircularProgress size={size} />
    </div>
  );
}
