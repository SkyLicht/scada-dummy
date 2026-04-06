import foxconnLogo from "@/assets/svg/foxconn.svg";

interface FoxconnLogoProps {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}

export function FoxconnLogo({ x = 0, y = 0, width = 285.6, height = 188.6 }: FoxconnLogoProps) {
    return (
        <img
            src={foxconnLogo}
            alt="Foxconn logo"
            width={width}
            height={height}
            style={{
                display: "block",
                transform: `translate(${x}px, ${y}px)`,
            }}
        />
    );
}
